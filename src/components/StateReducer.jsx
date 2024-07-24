import React, { useReducer } from "react";
import "./StateReducer.css";

const initialState = {
  count: 0,
  isDisabled: false,
  warningMessage: "",
};

// Define the reducer function
const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "increment":
      if (state.count + 1 > 4) {
        return {
          ...state,
          isDisabled: true,
          warningMessage: "Whoa! You overclicked the button",
        };
      }
      return { ...state, count: state.count + 1 };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
};

const StateReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="switch">
      <input
        type="checkbox"
        id="toggle"
        className="switch-input"
        disabled={state.isDisabled}
      />
      <label
        htmlFor="toggle"
        className="switch-label"
        onClick={() => dispatch({ type: "increment" })}
      ></label>
      <p>{state.warningMessage}</p>
      {state.isDisabled && (
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      )}
    </div>
  );
};

export default StateReducer;
