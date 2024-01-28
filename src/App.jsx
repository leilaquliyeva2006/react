import "./App.css";
import { useState } from "react";

const App = () => {
  let [count, setValue] = useState( 0);
  function clickHandler() {
		setValue(count + 1);
	}
  function clickHandler2() {
		setValue(count - 1);
	}

  return (
    <>
    <button  onClick={clickHandler2}>-</button>
    <div>{count}</div>
    <button onClick={clickHandler}>+</button>
    </>
  );
};

export default App;
