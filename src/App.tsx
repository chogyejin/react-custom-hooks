import { useBeforeLeave } from "./hooks/useBeforeLeave";

const App = () => {
  const sayStay = () => console.log("Plz stay");
  useBeforeLeave(sayStay);
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default App;
