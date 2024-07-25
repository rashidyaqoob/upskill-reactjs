import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ todoText, id, onDelete, onComplete, complete }) => {
  const [isChecked, setIsChecked] = useState();

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onComplete(id);
  };

  return (
    <div className="todo-item-container">
      <li data-complete={complete}>
        <input
          type="checkbox"
          className="todo-checkbox"
          onChange={handleCheckboxChange}
        />
        <p className="todo-text">{todoText}</p>
        <button className="todo-button delete" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
