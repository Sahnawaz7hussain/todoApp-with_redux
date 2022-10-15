import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getTodos, addnewTodo } from "../Redux/action";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text) {
      const payload = {
        title: text,
        status: false,
      };
      dispatch(addnewTodo(payload)).then((r) => {
        dispatch(getTodos);
        setText("");
      });
    }
  };
  return (
    <div>
      <h3>ADD NEW TODO</h3>
      <div>
        <input
          placeholder="add here"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoInput;
