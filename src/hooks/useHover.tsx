import { useEffect, useRef } from "react";

export const useHover = (onHover: () => void) => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseover", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseover", onHover);
      }
    };
  });

  return element;
};

// const App = () => {
//   const [num, setNum] = useState<number>(0);
//   const upCount = () => {
//     setNum(num + 1);
//   };
//   const ref = useHover(upCount);

//   return (
//     <div>
//       <div
//         ref={ref}
//         style={{ backgroundColor: "red", width: "100px", height: "100px" }}
//       >
//         {num}
//       </div>
//     </div>
//   );
// };
