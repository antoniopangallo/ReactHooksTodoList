import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TOGGLE_TODO } from "./../reducers/todos";
import { TodoContext } from "./../contexts/todos";

const Todo = ({ id, completed, text }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <li
      onClick={() =>
        dispatch({
          type: TOGGLE_TODO,
          payload: { id, completed: !completed }
        })
      }
      style={{
        cursor: "pointer",
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </li>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
