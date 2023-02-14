import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import TodoReducer from "./Reducers/TodoReducer";

const reducer = combineReducers({
  Todo: TodoReducer,
});

const initialState = {};

const Store = createStore(reducer, initialState, applyMiddleware(thunk));
export default Store;
