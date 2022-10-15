import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reduce";
const costumMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  return next(action);
};
export const store = legacy_createStore(
  reducer,
  applyMiddleware(costumMiddleware)
);
