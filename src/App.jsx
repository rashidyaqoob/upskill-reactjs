import "./user.css";
import user from "./user.json";
import UserCard from "./components/UserCard";
import { UserClassCard } from "./components/UserClassCard";
import NameCounter from "./components/NameCounter";
import { NameCounterClass } from "./components/NameCounterClass";

function App() {
  console.log(user);
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
    </div>
  );
}

export default App;
