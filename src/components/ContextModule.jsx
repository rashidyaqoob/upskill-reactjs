import React, { useContext } from "react";
import GlobalContext from "./GlobalContext";
import "./ContextModule.css";

const ContextModule = ({ step, initialCount }) => {
  const { countState, countDispatch } = useContext(GlobalContext);

  return (
    <div className="counter-container">
      <p className="count-display">Count: {countState}</p>
      <div className="button-group">
        <button
          className="counter-button increment-button"
          onClick={() => countDispatch({ type: "increment", count: step })}
        >
          Increment
        </button>
        <button
          className="counter-button decrement-button"
          onClick={() => countDispatch({ type: "decrement", count: step })}
        >
          Decrement
        </button>
        <button
          className="counter-button reset-button"
          onClick={() => countDispatch({ type: "reset", count: initialCount })}
        >
          Reset Count
        </button>
      </div>
    </div>
  );
};

export default ContextModule;
