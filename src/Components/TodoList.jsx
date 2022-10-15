import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { todos, isLoading, isError } = useSelector((state) => {
    return state;
  });
  console.log(isLoading);
  return (
    <div>
      {isLoading && <h2>Loading....</h2>}
      {isError && <p>An error occurs....</p>}
      {todos.length > 0 &&
        todos.map((el) => {
          return (
            <div key={el.id}>
              {" "}
              {el.title} - {el.status ? "Done" : "Not Done"}{" "}
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
