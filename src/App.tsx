import { useNotification } from "./hooks/useNotification";

const App = () => {
  const title = "안녕하세요";
  const options = {
    body: "반갑습니다",
  };
  const onNotify = useNotification(title, options);
  return (
    <div>
      <button onClick={onNotify}>Button</button>{" "}
    </div>
  );
};

export default App;
