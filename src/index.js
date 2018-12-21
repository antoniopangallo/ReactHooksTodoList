import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { TodoContextProvider } from "./contexts/todos";

import "./styles.css";

function App() {
  return (
    <TodoContextProvider>
      <AddTodo />
      <TodoList />
      <Footer />
    </TodoContextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
