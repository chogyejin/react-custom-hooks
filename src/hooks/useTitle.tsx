import { useEffect, useState } from "react";

export const useTitle = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle!.innerHTML = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

// const App = () => {
//   const titleUpdater = useTitle("Loading...");
//   setTimeout(() => titleUpdater("Home"), 5000);
//   return (
//     <div>
//       <div>ㅁㄴㅁ </div>
//     </div>
//   );
// };
