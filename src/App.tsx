import { useConfirm } from "./hooks/useConfirm";

const App = () => {
  const deleteWorld = () => console.log("Delete World"); // 확인 callback
  const abort = () => console.log("Aborted"); // 취소 callback
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>삭제</button>
    </div>
  );
};

export default App;
