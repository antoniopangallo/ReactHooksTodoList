import React, { useContext } from "react";
import Todo from "./Todo";
import { VisibilityFilters } from "./../reducers/todos";
import { TodoContext } from "./../contexts/todos";

const TodoList = () => {
  const { state } = useContext(TodoContext);
  const todos = applyFilter(state);
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

const applyFilter = state => {
  const { filter, todos } = state;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default TodoList;
