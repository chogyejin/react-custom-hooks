import { useEffect, useRef } from "react";

export const useFadeIn = (duration: number = 1, delay: number = 0) => {
  const element = useRef<HTMLDivElement | HTMLParagraphElement>(null);
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      // opacity 0 to 1 in 3s
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = "1";
    }
  }, []);
  return { ref: element, style: { opacity: "0" } };
};

// const App = () => {
//   const fadeInDiv = useFadeIn(1, 2); // 1초 동안 서서히 2초 뒤에
//   const fadeInP = useFadeIn(5, 10); // 5초 동안 서서히 10초 뒤에
//   return (
//     <div>
//       <div {...fadeInDiv}>Hi</div>
//       <p {...fadeInP}>안녕 안녕 안녕</p>
//     </div>
//   );
// };
