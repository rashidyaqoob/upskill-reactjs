import React, { useReducer } from "react";
import ContextModule from "./components/ContextModule";
import GlobalContext from "./components/GlobalContext";

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.count };
    case "decrement":
      return { ...state, count: state.count - action.count };
    case "reset":
      return { ...state, count: action.count };
    default:
      return state;
  }
}

function App() {
  const initialCount = 10;
  const [state, dispatch] = useReducer(reducer, { count: initialCount });

  return (
    <GlobalContext.Provider
      value={{
        countState: state.count,
        countDispatch: dispatch,
      }}
    >
      <ContextModule step={5} initialCount={initialCount} />
    </GlobalContext.Provider>
  );
}

export default App;
