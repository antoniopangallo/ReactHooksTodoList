export const CHANGE_FILTER = "CHANGE_FILTER";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_TODO = "ADD_TODO";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const toDoReducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return { ...state, filter: payload };
    case TOGGLE_TODO: {
      const todos = state.todos.map(todo =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      );
      return { ...state, todos };
    }
    case ADD_TODO: {
      const todos = [...state.todos, payload];
      return { ...state, todos };
    }
    default:
      return state;
  }
};

export default toDoReducer;
