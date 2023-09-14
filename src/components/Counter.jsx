import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../counterSlice";

const Counter = () => {

  const count = useSelector((state)=>(state.counter.value))
  const dispatch = useDispatch()
  
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span style={{ margin: "10px" }}>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
