import { todosTypes } from "../types";
export const addNewTodo = (todo) => {
  return {
    type: todosTypes.ADD_TODO,
    payload: todo,
  };
};

export const editCompletion = (id) => {
  return {
    type: todosTypes.EDIT_COMPLETION,
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: todosTypes.DELETE_TODO,
    payload: id,
  };
};

export const setActiveTodo = (todo) => {
  return {
    type: todosTypes.SET_ACTIVE_TODO,
    payload: todo,
  };
};

export const editTodo = (title) => {
  return {
    type: todosTypes.EDIT_TODO,
    payload: title,
  };
};
