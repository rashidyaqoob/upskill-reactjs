import React from "react";
import {
  Toggle,
  ToggleButton,
  ToggleOff,
  ToggleOn,
} from "./components/Toggle.tsx";

function App() {
  return (
    <div className="App">
      <div className="toggle-container">
        <Toggle>
          <ToggleOn>
            <span className="toggle-text">Toggle is On</span>
            <p>This is some text that is shown when the toggle is ON.</p>
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
          </ToggleOn>
          <ToggleOff>
            <span className="toggle-text">Toggle is Off</span>
            <p>This is some text that is shown when the toggle is OFF.</p>
          </ToggleOff>
          <ToggleButton />
        </Toggle>
      </div>
    </div>
  );
}

export default App;
