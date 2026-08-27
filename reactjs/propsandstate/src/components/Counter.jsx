import { useState } from "react";

const Counter = () => {
  //    const [variable, setterFunction] = useState(intialValue)
  //   const count = 0
  const [count, setCount] = useState(0);

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function increment() {
    if(count < 10)
    setCount(count + 1);
  }

  return (
    // Fragments
    // addEventListener - onclick, onchange, ondblClick
    <>
      <button onClick={decrement}>Decrement</button>
      <h3>Count : {count}</h3>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
