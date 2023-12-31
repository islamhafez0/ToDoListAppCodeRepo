import React from "react";
import FeatherIcon from "feather-icons-react";
import { useDispatch } from "react-redux";
import {
  editCompletion,
  deleteTodo,
  setActiveTodo,
} from "../../store/todos/todosActions";
import { changeMode } from "../../store/modes/modesActions";
import { modesTypes } from "../../store/types";

const Todo = (props) => {
  const dispatch = useDispatch();
  const changeTodoCompletion = (id) => {
    dispatch(editCompletion(id));
  };

  const editTodo = (todo) => {
    dispatch(changeMode(modesTypes.EDIT));
    dispatch(setActiveTodo(todo));
  };

  let { id, title, done } = props.todo;
  return (
    <div className={done ? "todos-todo done" : "todos-todo "}>
      <div className="todos-todo_icon" onClick={() => changeTodoCompletion(id)}>
        <FeatherIcon icon={done ? "check-circle" : "circle"} />
      </div>
      <div className="todos-todo_text"> {title} </div>
      <div className="todos-todo_cta">
        <div
          className="todos-todo_cta-edit"
          onClick={() => editTodo(props.todo)}
        >
          <FeatherIcon icon="edit" size="20" />
        </div>
        <div
          className="todos-todo_cta-delete"
          onClick={() => dispatch(deleteTodo(id))}
        >
          <FeatherIcon icon="trash-2" size="20" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
