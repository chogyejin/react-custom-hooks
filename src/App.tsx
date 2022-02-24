import { usePreventLeave } from "./hooks/usePreventLeave";

const App = () => {
  const { enableProtect, disableProtect } = usePreventLeave();
  return (
    <div>
      <button onClick={enableProtect}>보호</button>
      <button onClick={disableProtect}>보호X</button>
    </div>
  );
};

export default App;
