import { useEffect, useState } from "react";

interface IState {
  x: number;
  y: number;
}

export const useScroll = () => {
  const [state, setState] = useState<IState>({
    x: 0,
    y: 0,
  });
  const onScroll = (event: Event) => {
    setState({ x: window.scrollX, y: window.scrollY }); // pageXOffset, pageYOffset for IE
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return state;
};

// const App = () => {
//   const { x, y } = useScroll();
//   return (
//     <div style={{ height: "1000vh", width: "1000vw" }}>
//       <h1
//         style={{
//           position: "fixed",
//           color: y > 100 ? "red" : "blue",
//           fontSize: x > 100 ? "100px" : "",
//         }}
//       >
//         Hi
//       </h1>
//     </div>
//   );
// };
