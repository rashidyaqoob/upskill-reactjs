import React from "react";

const Todos = ({ data }) => {
  console.log(data);
  return (
    <div class="container">
      <h1 class="page-title">Todos</h1>
      <ul>
        {data?.map((todo) => {
          return (
            <li className={todo.completed ? "strike-through" : ""}>
              {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
