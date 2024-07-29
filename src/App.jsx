import React from "react";
import { useState } from "react";
// import "./components/form.css";
import useLocalStorage from "./components/useLocalStorage";

function App() {
  const [firstName, setFirstName] = useState("initialvalue");
  const [lastName, setLastName] = useState("initialvalue");
  const [storedFirstName, setStoredFirstName] = useLocalStorage(
    "FIRST_NAME",
    ""
  );
  const [storedLastName, setStoredLastName] = useLocalStorage("LAST_NAME", "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStoredFirstName(firstName);
    setStoredLastName(lastName);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setStoredFirstName("");
    setStoredLastName("");
  };

  return (
    <div className="App">
      <a href="">learn react</a>
      <form className="storage-form" onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
        />
        <input type="submit" value="Submit" />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <div className="stored-values">
        <h3>Stored Values</h3>
        <p>
          First Name: <span>{storedFirstName}</span>
        </p>
        <p>
          Last Name: <span>{storedLastName}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
