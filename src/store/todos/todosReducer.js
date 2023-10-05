import { todosTypes } from "../types";

const localTodos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const initialState = {
  todos: localTodos,
  activeTodo: {},
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case todosTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case todosTypes.EDIT_COMPLETION:
      return {
        ...state,
        todos: getCompletionTodos(state.todos, action.payload),
      };
    case todosTypes.DELETE_TODO:
      return {
        ...state,
        todos: getDeleteTodos(state.todos, action.payload),
      };
    case todosTypes.SET_ACTIVE_TODO:
      return {
        ...state,
        activeTodo: action.payload,
      };
    case todosTypes.EDIT_TODO:
      return {
        ...state,
        todos: getEditTodos(state.todos, state.activeTodo, action.payload),
      };
    default:
      return state;
  }
};

const getCompletionTodos = (todos, id) => {
  return todos.map((td) => {
    if (td.id === id) {
      td.done = !td.done;
      return td;
    } else {
      return td;
    }
  });
};

const getDeleteTodos = (todos, id) => {
  return todos.filter((td) => td.id !== id);
};

const getEditTodos = (todos, todo, title) => {
  return todos.map((td) => {
    if (td.id === todo.id) {
      td.title = title;
      return td;
    } else {
      return td;
    }
  });
};

export default todosReducer;
