import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/action";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return { state };
  });

  useEffect(() => {
    // getTodos(dispatch);
    dispatch(getTodos);
  }, []);
  return (
    <div>
      <h3>Todo</h3>

      <TodoInput />
      <br />
      <TodoList />
    </div>
  );
};

export default Todo;
