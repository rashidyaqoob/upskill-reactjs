import React, { useReducer, useEffect, useState } from "react";
import "./StateReducer.css";

const initialState = {
  count: 0,
  isDisabled: false,
  warningMessage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      if (state.count + 1 >= 5) {
        return {
          ...state,
          count: state.count + 1,
          isDisabled: true,
          warningMessage: "Whoa! You overclicked the button",
        };
      }
      return { ...state, count: state.count + 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const StateReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(state.count % 2 !== 0);
  }, [state.count]);

  return (
    <>
      <div className="switch">
        <input
          type="checkbox"
          id="toggle1"
          className="switch-input"
          checked={toggle}
          disabled={state.isDisabled}
          onChange={() => dispatch({ type: "increment" })}
        />
        <label htmlFor="toggle1" className="switch-label"></label>
      </div>
      <div className="switch">
        <input
          type="checkbox"
          id="toggle2"
          className="switch-input"
          checked={toggle}
          disabled={state.isDisabled}
          onChange={() => dispatch({ type: "increment" })}
        />
        <label htmlFor="toggle2" className="switch-label"></label>
      </div>
      <p>{state.warningMessage}</p>
      {state.isDisabled && (
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      )}
    </>
  );
};

export default StateReducer;
