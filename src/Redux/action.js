import axios from "axios";
import * as types from "./actionTypes";

export const getTodoRequest = () => {
  return { type: types.GET_TODO_REQUEST };
};
export const getTodoSuccess = (payload) => {
  return { type: types.GET_TODO_SUCCESS, payload };
};
export const getTodoFailure = () => {
  return { type: types.GET_TODO_FAILURE };
};
export const addTodoRequest = () => {
  return { type: types.ADD_TODO_REQUEST };
};
export const addTodoSucces = (payload) => {
  return { type: types.ADD_TODO_SUCCESS, payload };
};
export const addTodoFailure = () => {
  return { type: types.ADD_TODO_FAILURE };
};
export const getTodos = (dispatch) => {
  dispatch(getTodoRequest());
  return axios
    .get("http://localhost:8080/todos")
    .then((res) => {
      dispatch(getTodoSuccess(res.data));
      //console.log(res);
    })
    .catch((e) => {
      dispatch(getTodoFailure());
      // console.log(e);
    });
};
export const addnewTodo = (payload) => (dispatch) => {
  dispatch(addTodoRequest());
  return axios
    .post("http://localhost:8080/todos", payload)
    .then((r) => {
      dispatch(addTodoSucces(r.data));
    })
    .catch((e) => {
      dispatch(addTodoFailure());
    });
};
