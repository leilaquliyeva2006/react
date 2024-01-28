import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setValue] = useState(0);
  const [step, setStep] = useState(1);


  function clickHandler() {
    if(step > 1){
		setStep(step - 1);}
	}
  function clickHandler2() {
		setStep(step + 1);
	}

  function clickHandler3(){
    setValue(count + step)
  }
  function clickHandler4(){
    setValue(count - step)
  }

  return (
    <>
    <button onClick={clickHandler}>Step -</button>
    <div>{step}</div>
    <button onClick={clickHandler2}>Step +</button>
    <br/>
    <button onClick={clickHandler4}>Value -</button>
    <div>{count}</div>
    <button onClick={clickHandler3}>Value +</button>
    </>
  );
};

export default App;
