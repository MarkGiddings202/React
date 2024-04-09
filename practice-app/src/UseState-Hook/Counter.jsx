import React, { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);

    const add = () => {
      setCount(count + 1);
    };
  
    const sub = () => {
      setCount(count - 1);
    };
  return (
    <div>
    <h1>Count {count}</h1>
    <button onClick={add} >+</button>
    <button onClick={sub} >-</button>
  </div>
  )
}

export default Counter