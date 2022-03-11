import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // permite trabajar con promesas

import postsReducer from "./postDucks";

const rootReducer = combineReducers({
  entries: postsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // redux devTools || permite configurar extension que tengo en google chrome

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store
}
