import { useState } from "react";
import { useHover } from "./hooks/useHover";

const App = () => {
  const [num, setNum] = useState<number>(0);
  const upCount = () => {
    setNum(num + 1);
  };
  const ref = useHover(upCount);

  return (
    <div>
      <div
        ref={ref}
        style={{ backgroundColor: "red", width: "100px", height: "100px" }}
      >
        {num}
      </div>
    </div>
  );
};

export default App;
