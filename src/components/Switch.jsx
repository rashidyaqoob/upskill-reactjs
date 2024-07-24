import React from "react";
import "./Switch.css";

const Switch = ({ on }) => {
  return (
    <>
      <div className="switch">
        <input
          type="checkbox"
          id="toggle"
          className="switch-input"
          checked={on}
        />
        <label htmlFor="toggle1" className="switch-label"></label>
      </div>
    </>
  );
};

export default Switch;
