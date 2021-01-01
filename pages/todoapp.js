import React from "react";
import Todo from "../components/Todo/Todo";
import TodoForm from "../components/Todo/Todoform";

/*   TodoMVC   */

export default class todoApp extends React.Component {
  state = {
    todos: [],
    TodoShow: "all",
  };
  addTodo = (todo) => {
    this.setState((state) => ({
      todos: [todo, ...state.todos],
    }));
  };
  toggleComplete = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          //update
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };
  handleShow = (value) => {
    this.setState({
      TodoShow: value,
    });
  };
  deleteCompletely = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };
  removeAllCompleteds = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };
  removeAll = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.complete && !todo.complete),
    }));
  };
  render() {
    let todos = [];

    if (this.state.TodoShow === "all") {
      todos = this.state.todos;
    } else if (this.state.TodoShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.TodoShow === "left") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />

        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={() => this.toggleComplete(todo.id)}
            deleteCompletely={() => this.deleteCompletely(todo.id)}
          />
        ))}

        <div>
          To-Dos Left:{" "}
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          To-Dos Done: {this.state.todos.filter((todo) => todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.handleShow("all")}>All</button>
          <button onClick={() => this.handleShow("active")}>Active</button>
          <button onClick={() => this.handleShow("left")}>Done</button>
        </div>
        <div>
          <button onClick={() => this.removeAllCompleteds()}>
            Remove All Completed
          </button>
          <button onClick={() => this.removeAll()}>Remove</button>
        </div>
      </div>
    );
  }
}
