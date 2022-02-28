import useAxios from "./hooks/useAxios";

const App = () => {
  const { loading, error, data, refetch } = useAxios({
    url: `https://yts.mx/api/v2/list_movies.json`,
  });
  console.log(loading, error, JSON.stringify(data));
  return (
    <div>
      <div>Hi</div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
