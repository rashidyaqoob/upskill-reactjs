import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const getStoredValue = () => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      try {
        return JSON.parse(storedValue);
      } catch (error) {
        console.error(`Error parsing localStorage key "${key}":`, error);
      }
    }
    return initialValue;
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
