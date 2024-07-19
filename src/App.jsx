import "./user.css";
import user from "./user.json";
import UserCard from "./components/UserCard";
import { UserClassCard } from "./components/UserClassCard";
import NameCounter from "./components/NameCounter";
import { NameCounterClass } from "./components/NameCounterClass";
import CustomModal from "./components/CustomModal";
import { Children, useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleShowModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

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
      <h2>Custom Modal</h2>
      <button onClick={handleShowModal}>
        {isModalOpen === true ? "Close Custom Modal" : "Show custom Modal"}
      </button>

      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal}>
        {Children}
      </CustomModal>
    </div>
  );
}

export default App;
