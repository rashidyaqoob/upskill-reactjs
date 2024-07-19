import React, { useState } from "react";

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray);

  const push = (value) => {
    setArray((initialArray) => [...initialArray, value]);
  };

  const replace = (index, value) => {
    setArray((initialArray) => [
      ...initialArray.slice(0, index),
      value,
      ...initialArray.slice(index + 1),
    ]);
  };

  const filter = (callback) => {
    setArray(array.filter(callback));
  };

  const remove = (index) => {
    setArray((prevArray) => prevArray.filter((_, i) => i !== index));
  };

  const clear = () => {
    setArray([]);
  };

  const reset = () => {
    setArray(initialArray);
  };

  return { array, push, set: setArray, replace, filter, remove, clear, reset };
}
