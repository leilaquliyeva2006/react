import "./App.css";
import { useState } from "react";
import Div from "./component/Div/Div";
import Button from "./component/Button/Button";
const App = () => {
  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }
  function clickHandler2() {
    setCount(count - 1);
  }

  return (
    <>
      <Button OnClik={clickHandler2}>-</Button>
      <Div>{count}</Div>
      <Button OnClik={clickHandler}>+</Button>
    </>
  );
};

export default App;
