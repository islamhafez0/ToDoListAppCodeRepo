import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";

import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../store/modes/modesActions";
import {
  addNewTodo,
  editTodo,
  setActiveTodo,
} from "../../store/todos/todosActions";
import { modesTypes } from "../../store/types";

const TodosForm = (props) => {
  const [newTitle, setNewTitle] = useState("");

  const mode = useSelector((state) => state.modesState.mode);
  const activeTodo = useSelector((state) => state.todosState.activeTodo);

  const dispatch = useDispatch();

  useEffect(() => {
    if (mode === modesTypes.EDIT && activeTodo) {
      setNewTitle(activeTodo.title);
    }
  }, [mode, activeTodo]);

  const showUncompleteHandle = () => {
    if (mode === modesTypes.ADD) {
      dispatch(changeMode(modesTypes.NOT_DONE));
    } else if (mode === modesTypes.NOT_DONE) {
      dispatch(changeMode(modesTypes.ADD));
    }
  };

  const newTitleHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const addNewTodoHandler = () => {
    if (mode !== modesTypes.EDIT) {
      const newTodo = {
        id: Date.now(),
        title: newTitle,
        done: false,
      };

      dispatch(addNewTodo(newTodo));
      setNewTitle("");
    } else {
      dispatch(editTodo(newTitle));
      dispatch(setActiveTodo({}));
      dispatch(changeMode(modesTypes.ADD));
      setNewTitle("");
    }
  };

  let btnString = "Add";
  if (mode === modesTypes.EDIT) {
    btnString = "Edit";
  }

  return (
    <div className="todos-form">
      <div
        className={
          mode === modesTypes.NOT_DONE
            ? "todos-form_icon active"
            : "todos-form_icon"
        }
        onClick={showUncompleteHandle}
      >
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-form_form">
        <input
          type="text"
          placeholder="Add new task ..."
          onChange={newTitleHandler}
          value={newTitle}
        />
      </div>
      <div className="todos-form_submit">
        <button
          className="btn"
          onClick={addNewTodoHandler}
          disabled={newTitle.trim() ? false : true}
        >
          {btnString}
        </button>
      </div>
    </div>
  );
};

export default TodosForm;
