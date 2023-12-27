import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <h1>Counter:</h1>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </>
  );
}


export default Counter;