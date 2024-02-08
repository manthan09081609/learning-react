import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("Can't Add More Value");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Can't Remove More Value");
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
