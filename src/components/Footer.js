import React, { useContext } from "react";
import Button from "./Button";

import { CHANGE_FILTER, VisibilityFilters } from "./../reducers/todos";
import { TodoContext } from "./../contexts/todos";

const BUTTONS_FILTER = [
  {
    id: 1,
    caption: "All",
    type: CHANGE_FILTER,
    filter: VisibilityFilters.SHOW_ALL
  },
  {
    id: 2,
    caption: "Active",
    type: CHANGE_FILTER,
    filter: VisibilityFilters.SHOW_ACTIVE
  },
  {
    id: 3,
    caption: "Completed",
    type: CHANGE_FILTER,
    filter: VisibilityFilters.SHOW_COMPLETED
  }
];

const Footer = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <footer>
      {BUTTONS_FILTER.map(({ id, caption, type, filter }) => (
        <Button
          disabled={state.filter === filter}
          onClick={() => dispatch({ type, payload: filter })}
          key={id}
        >
          {caption}
        </Button>
      ))}
    </footer>
  );
};

export default Footer;
