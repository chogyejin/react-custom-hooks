import { useRef } from "react";

interface FullScreenDocument extends Document {
  mozCancelFullScreen?: () => void;
  msExitFullscreen?: () => void;
  webkitExitFullscreen?: () => void;
}

interface FullScreenDocumentElement extends HTMLDivElement {
  mozRequestFullScreen?: () => void;
  msRequestFullscreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

export const useFullscreen = (callback: (isFull: boolean) => void) => {
  const element = useRef<FullScreenDocumentElement>(null);
  const newDoc: FullScreenDocument = document; // window.document 참조하는 새 type 객체 생성

  const triggerFull = () => {
    if (element.current) {
      console.log(element.current); // ref로 전달받는 태그
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      }
      callback(true);
    }
  };
  const exitFull = () => {
    if (newDoc.exitFullscreen) {
      newDoc.exitFullscreen();
    } else if (newDoc.mozCancelFullScreen) {
      newDoc.mozCancelFullScreen();
    } else if (newDoc.msExitFullscreen) {
      newDoc.msExitFullscreen();
    } else if (newDoc.webkitExitFullscreen) {
      newDoc.webkitExitFullscreen();
    }
    callback(false);
  };
  return { element, triggerFull, exitFull };
};

// const App = () => {
//   const onFull = (isFull: boolean) => {
//     console.log(isFull ? "Now Full" : "Now No Full");
//   };
//   const { element, triggerFull, exitFull } = useFullscreen(onFull);
//   return (
//     <div>
//       <div ref={element}>
//         <img src="https://i.ibb.co/R6RwNxx/grape.jpg" />
//         <button onClick={exitFull}>Exit</button>
//       </div>
//       <div>
//         <button onClick={triggerFull}>Full</button>
//       </div>
//     </div>
//   );
// };
