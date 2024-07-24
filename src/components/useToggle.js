import { useState } from "react";

// Hook with prop collection
export function useToggle(initialState = false) {
  const [isToggled, setIsToggled] = useState(initialState);

  const toggle = () => setIsToggled((prev) => !prev);
  const toggleProps = {
    onClick: toggle,
    "aria-pressed": isToggled,
    role: "button",
  };

  return [isToggled, toggleProps];
}
