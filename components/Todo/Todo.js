import React from "react";

const Todo = (props) => (
  <div>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
        backgroundColor: props.todo.complete ? "lime" : "red",
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button onClick={props.deleteCompletely}>Delete</button>
  </div>
);

export default Todo;
