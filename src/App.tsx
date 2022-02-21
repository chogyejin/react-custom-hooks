import { useTabs } from "./hooks/useTabs";

const content = [
  {
    tab: "Section 1",
    content: "Content of Section 1",
  },
  {
    tab: "Section 2",
    content: "Content of Section 2",
  },
];

const App = () => {
  // const tabs = useTabs(0, content);
  const { currentItem, changeItem } = useTabs(0, content); // tabs.currentItem.~~ 대신 currentItem.~~ 바로 씀
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
