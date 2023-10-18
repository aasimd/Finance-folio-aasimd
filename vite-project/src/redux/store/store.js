/** @format */

import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { AppReducer } from "../reducer/AppReducer";

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

export const store = createStore(
	AppReducer,
	composeEnhancers(applyMiddleware(thunk))
);
