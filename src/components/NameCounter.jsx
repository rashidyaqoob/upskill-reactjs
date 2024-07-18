import React, { useState } from "react";

const NameCounter = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(26);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={() => setAge(age + 1)}>+</button>
      {age}
      <button onClick={() => setAge(age - 1)}>-</button>
      <p>
        My name is {name} and I am {age} years old
      </p>
    </div>
  );
};

export default NameCounter;
