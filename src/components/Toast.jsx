// Toast.jsx
import React, { useEffect } from "react";
import "./ToastStyles.css";

const Toast = ({
  id,
  message,
  position,
  autoDismiss,
  autoDismissTimeout,
  removeToast,
}) => {
  useEffect(() => {
    let timer;
    if (autoDismiss) {
      timer = setTimeout(() => {
        removeToast(id);
      }, autoDismissTimeout);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [id, autoDismiss, autoDismissTimeout, removeToast]);

  return (
    <div className={`toast toast-${position}`} onClick={() => removeToast(id)}>
      {message}
    </div>
  );
};

export default Toast;
