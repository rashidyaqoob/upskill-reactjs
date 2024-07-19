import React, { useState } from "react";
import "../todo.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();
  const [message, setMessage] = useState("");

  const addTodo = () => {
    const newTodo = {
      text: todo,
      id: Date.now(),
      completed: false,
    };
    setTodo("");
    return setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const todoToDelete = todos.find((todo) => todo.id === id);
    if (!todoToDelete.completed) {
      setMessage(`Please complete the task.`);
    } else {
      setTodos(todos.filter((todo) => todo.id !== id));
      setMessage("");
    }
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>TodoList</h2>
      <ul id="list">
        {todos &&
          todos.map((item) => (
            <li className="list-item" key={item.id}>
              <label className="list-item-label">
                <input
                  type="checkbox"
                  data-list-item-checkbox
                  checked={item.completed}
                  onChange={() => toggleCompletion(item.id)}
                />
                <span data-list-item-text>{item.text}</span>
              </label>
              <button data-button-delete onClick={() => deleteTodo(item.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
      {message && <p>{message}</p>}
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;
