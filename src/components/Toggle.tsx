import React, { useState, createContext, useContext } from "react";
import './Toggle.css'

const ToggleContext = createContext();

function Toggle({ children }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

function useToggle() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a Toggle component");
  }
  return context;
}

function ToggleOn({ children }) {
  const { on } = useToggle();
  return on ? children : null;
}

function ToggleOff({ children }) {
  const { on } = useToggle();
  return on ? null : children;
}

function ToggleButton({ children }) {
  const { on, toggle } = useToggle();
  return <button onClick={toggle} className="toggle-button" >{children ? children : on ? "On" : "Off"}</button>;
}

export { Toggle, ToggleOn, ToggleOff, ToggleButton };
