import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "./reducers/authReducer";  // Ensure this is correctly imported
import { booksReducer } from "./reducers/bookReducer";

const rootReducer = combineReducers({
  auth: authReducer,  // Ensure 'auth' matches useSelector((state) => state.auth)
  books: booksReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
