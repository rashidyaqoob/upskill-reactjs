// ToastManager.jsx
import React, { useState, useCallback } from "react";
import Toast from "./Toast";

const ToastManager = () => {
  const [toasts, setToasts] = useState([]);

  const addToast =
    ((message, options = {}) => {
      const id = Date.now();
      const {
        autoDismiss = true,
        autoDismissTimeout = 3000,
        position = "top-right",
      } = options;

      const newToast = {
        id,
        message,
        position,
        autoDismiss,
        autoDismissTimeout,
      };

      setToasts((prevToasts) => [...prevToasts, newToast]);
    },
    []);

  const removeToast =
    ((id) => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    },
    []);

  return (
    <div className="toast-container">
      {toasts.map(
        ({ id, message, position, autoDismiss, autoDismissTimeout }) => (
          <Toast
            key={id}
            id={id}
            message={message}
            position={position}
            autoDismiss={autoDismiss}
            autoDismissTimeout={autoDismissTimeout}
            removeToast={removeToast}
            addToast={addToast}
          />
        )
      )}
    </div>
  );
};

export default ToastManager;
