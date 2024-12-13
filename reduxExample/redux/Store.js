// store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducers/userReducers";
import watchFetchUser from "./userSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with configureStore
const Store = configureStore({
  reducer: userReducer,
  middleware: sagaMiddleware,
});

// Run the watcher saga
sagaMiddleware.run(watchFetchUser);

export default Store;

// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./reducers/counterReducer";

// export const Store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
