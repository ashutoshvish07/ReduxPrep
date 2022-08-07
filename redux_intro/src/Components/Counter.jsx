import React from "react";
import { handleDec, handleInc } from "../Redux/Appreducer/action";

import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  // whenever you want to change / modify / update any value in
  // redux store, we can use dispatch ,method from useDispatch
  // it will run call back function , whenever the state inside the redux store changes
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(handleInc())}>Inc</button>
      <button onClick={() => dispatch(handleDec())}>Dec</button>
    </div>
  );
};

export default Counter;
