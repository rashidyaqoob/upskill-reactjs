import "./user.css";
import user from "./user.json";
import UserCard from "./components/UserCard";
import { UserClassCard } from "./components/UserClassCard";
import NameCounter from "./components/NameCounter";
import { NameCounterClass } from "./components/NameCounterClass";
import CustomHook from "./components/CustomHook";

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

      <br />

      <CustomHook />
    </div>
  );
}

export default App;
