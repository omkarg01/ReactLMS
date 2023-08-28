import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0)
  // let count = 0;

  const incrementHandler =()=>{
    // count += 1;
    setCount(count + 1)
    console.log("count :", count);
    document.title = `Count : ${count}`
  }
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  );
};

export default Counter;
