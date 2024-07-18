import { useEffect, useState } from "react";
export default function UseEffectHook() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Re-render");
  });
  useEffect(() => {
    console.log("Comp mounts");
    return () => {
      console.log("Comp unmounts");
    };
  }, []);

  useEffect(() => {
    const timeset = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => clearTimeout(timeset);
  }, [name]);

  useEffect(() => {
    document.title = name;
  }, [name]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
