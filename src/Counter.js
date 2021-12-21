import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Guvi");

  useEffect(() => {
    console.log("Empty array usEffect is called"); //ComponentDidMount
  }, []);

  useEffect(() => {
    console.log("Default usEffect is called"); //ComponentDidUpdate
  });

  useEffect(() => {
    console.log("Name change usEffect is called"); //ComponentDidUpdate -name
  }, [name]);

  useEffect(() => {
    return () => {
      console.log("Unmount usEffect is called"); //ComponentWillUnmount
    };
  }, []);

  console.log("Rendered");
  return (
    <>
      <h3>Counter App</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <p>Name: {name}</p>
      <button onClick={() => setName("Zen")}>Change</button>
    </>
  );
}

export default Counter;
