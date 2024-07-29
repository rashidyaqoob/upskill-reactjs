import "./user.css";
import user from "./user.json";
import UserCard from "./components/UserCard";
import { UserClassCard } from "./components/UserClassCard";
import NameCounter from "./components/NameCounter";
import { NameCounterClass } from "./components/NameCounterClass";
import TextareaComp from "./components/TextareaComp";

function App() {
  console.log(user);
  return (
    <div className="App">
      <TextareaComp />
    </div>
  );
}

export default App;
