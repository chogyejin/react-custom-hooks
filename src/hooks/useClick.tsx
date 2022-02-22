import { useEffect, useRef } from "react";

export const useClick = (onClick: () => void) => {
  const element = useRef<HTMLHeadingElement>(null);
  // 초기값 null을 주지 않으면 element가 MutableRefObject가 되어 ref prop으로 사용 불가
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  console.log(element);
  console.log(element.current);
  return element;
};

// const App = () => {
//   const sayHello = () => console.log("say Hello");
//   const title = useClick(sayHello);
//   return (
//     <div>
//       {/* ref 마우스 올려서 type 확인 */}
//       <h1 ref={title}>Hi</h1>
//     </div>
//   );
// };
