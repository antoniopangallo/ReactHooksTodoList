import React, { useReducer, createContext } from "react";
import toDoReducer, { VisibilityFilters } from "./../reducers/todos";

const TodoContext = createContext();

const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function TodoContextProvider(props) {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const value = { state, dispatch };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
}
export { TodoContext, TodoContextProvider };
