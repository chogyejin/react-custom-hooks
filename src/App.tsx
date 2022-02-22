import { useClick } from "./hooks/useClick";

const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div>
      {/* ref 마우스 올려서 type 확인 */}
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
