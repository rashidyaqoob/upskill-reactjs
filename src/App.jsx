import "./user.css";
import user from "./user.json";
import UserCard from "./components/UserCard";
import { UserClassCard } from "./components/UserClassCard";
import NameCounter from "./components/NameCounter";
import { NameCounterClass } from "./components/NameCounterClass";
import DatePicker from "./components/DatePicker";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(new Date());
  return (
    <div className="App">
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

      <NameCounter />
      <br />

      <NameCounterClass />
      <br />

      <DatePicker value={value} onChange={setValue} />
    </div>
  );
}

export default App;
