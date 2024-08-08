import React, { useState, useEffect } from 'react';
import './Greeting.css'; 

const Greeting = () => {
  const [name, setName] = useState(() => {
    return localStorage.getItem('name') || '';
  });

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  function handleReset(e) {
    e.preventDefault();
    setName('');
    localStorage.setItem('name', '');
  }

  return (
   <div className="formContainer">
      <form className="formStyle">
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="inputStyle"
        />
      </form>
      <p>My name is { name}</p>
      <button
        onClick={handleReset}
        className="buttonStyle"
      >
        Reset
      </button>
    </div>
  );
};

export default Greeting;
