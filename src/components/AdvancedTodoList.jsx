import React, { useState, useEffect } from "react";
import "./AdvancedTodoList.css";
import TodoItem from "./TodoItem";

const AdvancedTodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem("TODOS");
    if (value === null) return [];

    return JSON.parse(value);
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      const newTodo = {
        text: todo,
        id: Date.now(),
        complete: false,
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  const onDelete = (id) => {
    const todoToDelete = todos.find((todo) => todo.id === id);

    if (todoToDelete && todoToDelete.complete) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } else if (todoToDelete) {
      alert(
        `Please complete the todo: "${todoToDelete.text}" before deleting.`
      );
    }
  };

  const onComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="advanced-todo-list">
      <h1>Advanced Todo List</h1>
      <ul>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todoText={todo.text}
            id={todo.id}
            complete={todo.complete}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </ul>
      <form onSubmit={handleTodoSubmit} className="todo-form-container">
        <input
          type="text"
          placeholder="Add todo"
          className="todo-input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" value="Add Todo" className="todo-submit" />
      </form>
    </div>
  );
};

export default AdvancedTodoList;
