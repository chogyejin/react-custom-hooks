import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const useInput = (
  initialValue: string,
  validator: (value: string) => boolean
) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value: string) => !value.includes("#");
  const name = useInput("Mr. ", maxLen);
  return (
    <div className="App">
      <h1>asdas</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
