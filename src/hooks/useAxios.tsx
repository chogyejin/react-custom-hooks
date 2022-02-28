import defaultAxios, { AxiosRequestConfig, Method } from "axios";
import { useEffect, useState } from "react";

interface IOptions {
  url: string;
  method?: Method;
  data?: any;
}

const useAxios = (options: IOptions, axiosInstance = defaultAxios) => {
  const [state, setState] = useState<any>({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState<number>(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (!options.url) {
      return;
    }
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  return { ...state, refetch };
};

export default useAxios;

// const App = () => {
//   const { loading, error, data, refetch } = useAxios({
//     url: `https://yts.mx/api/v2/list_movies.json`,
//   });
//   console.log(loading, error, JSON.stringify(data));
//   return (
//     <div>
//       <div>Hi</div>
//       <h1>{data && data.status}</h1>
//       <h2>{loading && "Loading"}</h2>
//       <button onClick={refetch}>Refetch</button>
//     </div>
//   );
// };
