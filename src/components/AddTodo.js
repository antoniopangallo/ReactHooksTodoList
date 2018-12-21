import React, { useContext, useState } from "react";
import { ADD_TODO } from "./../reducers/todos";
import { TodoContext } from "./../contexts/todos";
import Button from "./Button";

const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const [nextTodoId, setIndex] = useState(1);
  const input = useFromInput("");
  const { resetValue, ...inputProp } = input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch({
            type: ADD_TODO,
            payload: {
              id: nextTodoId,
              completed: false,
              text: input.value
            }
          });
          setIndex(nextTodoId + 1);
          resetValue();
        }}
      >
        <input {...inputProp} />
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
};

// custom hook which is reusable wherever you want to use an input
function useFromInput(initValue = "") {
  const [value, setValue] = useState(initValue);
  const onChange = e => setValue(e.target.value);
  const resetValue = newValue => setValue(newValue || initValue);
  return { value, onChange, resetValue };
}

export default AddTodo;
