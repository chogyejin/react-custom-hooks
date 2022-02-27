import { useFullscreen } from "./hooks/useFullscreen";

const App = () => {
  const onFull = (isFull: boolean) => {
    console.log(isFull ? "Now Full" : "Now No Full");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFull);
  return (
    <div>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" />
        <button onClick={exitFull}>Exit</button>
      </div>
      <div>
        <button onClick={triggerFull}>Full</button>
      </div>
    </div>
  );
};

export default App;
