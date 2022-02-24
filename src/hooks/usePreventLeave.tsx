export const usePreventLeave = () => {
  const listener = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    // Chrome에서는 returnValue 설정이 필요함
    event.returnValue = "";
  };
  const enableProtect = () => window.addEventListener("beforeunload", listener);
  const disableProtect = () =>
    window.removeEventListener("beforeunload", listener);

  return { enableProtect, disableProtect };
};

// const App = () => {
//   const { enableProtect, disableProtect } = usePreventLeave();
//   return (
//     <div>
//       <button onClick={enableProtect}>보호</button>
//       <button onClick={disableProtect}>보호X</button>
//     </div>
//   );
// };
