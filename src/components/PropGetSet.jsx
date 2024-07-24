import React from "react";
import Switch from "./Switch"; // Ensure this is a valid import
import { useToggle } from "./useToggle";

const PropGetSet = () => {
  const [isToggled, toggleProps] = useToggle();

  return (
    <div>
      <h2>Set Props</h2>
      <button {...toggleProps}>{isToggled ? "On" : "Off"}</button>
      <Switch on={isToggled} />

      <h2>Get Props</h2>
      <button style={{ backgroundColor: isToggled ? "green" : "red" }}>
        {isToggled ? "On" : "Off"}
      </button>
    </div>
  );
};

export default PropGetSet;
