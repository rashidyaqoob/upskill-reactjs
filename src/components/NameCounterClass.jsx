import React from "react";

export class NameCounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 26,
    };
  }

  setName = (name) => {
    this.setState({ name });
  };

  setAge = (age) => {
    this.setState({ age });
  };

  render() {
    const { name, age } = this.state;
    return (
      <div>
        <input value={name} onChange={(e) => this.setName(e.target.value)} />
        <br />
        <button onClick={() => this.setAge(age + 1)}>+</button>
        {age}
        <button onClick={() => this.setAge(age - 1)}>-</button>
        <p>
          My name is {name} and I am {age} years old
        </p>
      </div>
    );
  }
}

export default NameCounterClass;
