import { useTitle } from "./hooks/useTitle";

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div>
      <div>ㅁㄴㅁ </div>
    </div>
  );
};

export default App;
