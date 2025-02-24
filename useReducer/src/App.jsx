import { useState, useReducer, useRef } from "react";
import Test from "./Test";
import { useEffect } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      dispatch({ type: "increment" });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <h2>Count:{state.count}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <Test />
    </>
  );
}

export default App;
