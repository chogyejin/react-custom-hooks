import { useEffect } from "react";

export const useBeforeLeave = (onBefore: () => void) => {
  const handle = (event: MouseEvent) => {
    // console.log(event);
    const { clientY } = event;

    // document 위로 갈 때만
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};

// const App = () => {
//   const sayStay = () => console.log("Plz stay");
//   useBeforeLeave(sayStay);
//   return (
//     <div>
//       <h1>Hi</h1>
//     </div>
//   );
// };
