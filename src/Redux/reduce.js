import * as types from "./actionTypes";
const initState = {
  isLoading: false,
  isError: false,
  todos: [],
};
export const reducer = (oldState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TODO_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    case types.GET_TODO_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        todos: payload,
      };
    case types.GET_TODO_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        todos: [],
      };
    default:
      return oldState;
  }
};
