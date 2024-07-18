import React, { useState } from "react";

import "./user.css";
import user from "./user.json";
import UserCard from "./components/UserCard";
import { UserClassCard } from "./components/UserClassCard";
import NameCounter from "./components/NameCounter";
import { NameCounterClass } from "./components/NameCounterClass";
import UseEffectHook from "./components/UseEffectHook";

function App() {
  const [show, setShow] = useState(true);
  const childComponent = show ? <UseEffectHook /> : "";
  return (
    <div className="App">
      <h2>User card</h2>
      <UserCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />

      <br />

      <UserClassCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />

      <br />
      <h2>Name counter </h2>
      <NameCounter />
      <br />

      <NameCounterClass />

      <br />
      <h2> Use Effect exercise</h2>

      <button onClick={() => setShow((currentShow) => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
    </div>
  );
}

export default App;
