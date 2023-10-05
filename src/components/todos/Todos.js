import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { modesTypes } from "../../store/types";

const Todos = (props) => {
  const allTodos = useSelector((state) => state.todosState.todos);
  const activeTodo = useSelector((state) => state.todosState.activeTodo);
  const mode = useSelector((state) => state.modesState.mode);

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    if (mode === modesTypes.ADD) {
      setTodos(allTodos);
    } else if (mode === modesTypes.EDIT) {
      setTodos([activeTodo]);
    } else if (mode === modesTypes.NOT_DONE) {
      let notDoneTodos = allTodos.filter((td) => td.done === false);
      setTodos(notDoneTodos);
    }
  }, [mode, allTodos, activeTodo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <div className="todos-list">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
      {todos.length === 0 ? (
        <h3 className="no-todos">There are no tasks currently..</h3>
      ) : null}
    </div>
  );
};

export default Todos;
