import "./App.css";
import { useState } from "react";

const App = () => {
  console.log('Rendered');

  const [values, setValues] = useState({
      nums: [1, 2]
  });

  const handleClick = () => {
      const valuesCopy = {...values};
      const lastNum = valuesCopy.nums[valuesCopy.nums.length - 1];

      valuesCopy.nums.push(lastNum + 1);

      setValues(valuesCopy);
  }

  return (
      <>
          <button onClick={handleClick}>Add number</button>
          <div>{values.nums}</div>
      </>
  );
}


export default App;