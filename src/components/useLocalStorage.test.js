import React from "react";
import { render, screen, renderHook, act } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";

describe("#useLocalStorage", () => {
  function renderLocalStorageHook(key, initialValue) {
    return renderHook(
      ({ key, initialValue }) => useLocalStorage(key, initialValue),
      {
        initialProps: { key, initialValue },
      }
    );
  }

  beforeEach(() => {
    localStorage.clear();
  });

  it("should use the initialValue passed to the hook and store it in localStorage", () => {
    const key = "key";
    const initialValue = "initial";
    renderLocalStorageHook(key, initialValue);
  });

  it("should use the value from localStorage if it exists", () => {
    const key = "key";
    const storedValue = "stored";

    localStorage.setItem(key, JSON.stringify(storedValue));

    const { result } = renderLocalStorageHook(key, "initial");

    expect(result.current[0]).toBe(storedValue);
  });

  it("should update localStorage when setValue is called", () => {
    const key = "key";
    const initialValue = "initial";

    const { result } = renderLocalStorageHook(key, initialValue);

    act(() => {
      result.current[1]("newValue");
    });

    expect(localStorage.getItem(key)).toBe(JSON.stringify("newValue"));
  });

  it("should clear localStorage when setValue is called with undefined", () => {
    const key = "key";
    const initialValue = "initial";

    const { result } = renderLocalStorageHook(key, initialValue);

    act(() => {
      result.current[1](undefined);
    });

    expect(localStorage.getItem(key)).toBe(null);
  });
});
