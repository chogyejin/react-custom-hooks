import "./App.css";
import { useInput } from "./hooks/useInput";

const App = () => {
  const maxLen = (value: string) => value.length <= 10;
  const name = useInput("Mr. ", maxLen);
  return (
    <div className="App">
      <h1>asdas</h1>
      <input {...name} />
    </div>
  );
};

export default App;
