import { useScroll } from "./hooks/useScroll";

const App = () => {
  const { x, y } = useScroll();
  return (
    <div style={{ height: "1000vh", width: "1000vw" }}>
      <h1
        style={{
          position: "fixed",
          color: y > 100 ? "red" : "blue",
          fontSize: x > 100 ? "100px" : "",
        }}
      >
        Hi
      </h1>
    </div>
  );
};

export default App;
