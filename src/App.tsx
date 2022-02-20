import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [item, setItem] = useState<number>(1);
  const upItem = () => setItem(item + 1);
  const downItem = () => setItem(item - 1);
  return (
    <div>
      <div>{item}</div>
      <button onClick={upItem}>UP</button>
      <button onClick={downItem}>DOWN</button>
    </div>
  );
};

class AppUgly extends React.Component<{}, { item: number }> {
  state = {
    item: 1,
  };

  render() {
    const { item } = this.state;
    return (
      <div>
        <div>{item}</div>
        <button onClick={this.upItem}>UP</button>
        <button onClick={this.downItem}>DOWN</button>
      </div>
    );
  }

  upItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  downItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}

export default App;
