// ToastContext.jsx
import React, { createContext, useState, useContext, useCallback } from "react";
import Toast from "./Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, options = {}) => {
    const id = Date.now();
    const {
      autoDismiss = true,
      autoDismissTimeout = 3000,
      position = "top-right",
    } = options;

    setToasts((prevToasts) => [
      ...prevToasts,
      { id, message, position, autoDismiss, autoDismissTimeout },
    ]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const removeLastToast = useCallback(() => {
    setToasts((prevToasts) => prevToasts.slice(0, -1));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, removeLastToast }}>
      {children}
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
            />
          )
        )}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
