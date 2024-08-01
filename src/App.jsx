import React, { useState } from "react";
import { ToastProvider, useToast } from "../src/components/ToastContext";
import "../src/components/ToastStyles.css";

const App = () => {
  const { addToast, removeLastToast } = useToast();
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState("top-right");
  const [autoDismiss, setAutoDismiss] = useState(true);
  const [autoDismissTimeout, setAutoDismissTimeout] = useState(3000);

  const handleAddToast = (e) => {
    e.preventDefault();
    addToast(message, {
      autoDismiss,
      autoDismissTimeout: parseInt(autoDismissTimeout, 10),
      position,
    });
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleAddToast}>
        <div>
          <label>Message: </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Position: </label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="top-left">Top Left</option>
            <option value="top-center">Top Center</option>
            <option value="top-right">Top Right</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-center">Bottom Center</option>
            <option value="bottom-right">Bottom Right</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={autoDismiss}
              onChange={(e) => setAutoDismiss(e.target.checked)}
            />
            Auto Dismiss
          </label>
        </div>
        {autoDismiss && (
          <div>
            <label>Dismiss Timeout (ms): </label>
            <input
              type="number"
              value={autoDismissTimeout}
              onChange={(e) => setAutoDismissTimeout(e.target.value)}
            />
          </div>
        )}
        <button type="submit">Add Toast</button>
        <button onClick={removeLastToast}>Remove Last Toast</button>
      </form>
    </div>
  );
};

export default () => (
  <ToastProvider>
    <App />
  </ToastProvider>
);
