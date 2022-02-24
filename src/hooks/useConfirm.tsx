export const useConfirm = (
  message = "",
  onConfirm: () => void,
  onCancel: () => void
) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

// const App = () => {
//   const deleteWorld = () => console.log("Delete World"); // 확인 callback
//   const abort = () => console.log("Aborted"); // 취소 callback
//   const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
//   return (
//     <div>
//       <button onClick={confirmDelete}>삭제</button>
//     </div>
//   );
// };
