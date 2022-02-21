import { useState } from "react";

interface IContent {
  tab: string;
  content: string;
}

export const useTabs = (initialTab: number, allTabs: IContent[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

// const content = [
//   {
//     tab: "Section 1",
//     content: "Content of Section 1",
//   },
//   {
//     tab: "Section 2",
//     content: "Content of Section 2",
//   },
// ];

// const App = () => {
//   // const tabs = useTabs(0, content);
//   const { currentItem, changeItem } = useTabs(0, content); // tabs.currentItem.~~ 대신 currentItem.~~ 바로 씀
//   return (
//     <div>
//       {content.map((section, index) => (
//         <button onClick={() => changeItem(index)}>{section.tab}</button>
//       ))}
//       <div>{currentItem.content}</div>
//     </div>
//   );
// };
