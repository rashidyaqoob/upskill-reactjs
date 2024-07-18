import "./user.css";
import user from "./user.json";
import UserCard from "./components/UserCard";
import { UserClassCard } from "./components/UserClassCard";

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
    </div>
  );
}

export default App;
