// sagas.js
import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./reducers/actionConstants";

// Simulated API call function
const fetchUserFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users/1").then((response) =>
    response.json()
  );

// Worker saga: called when FETCH_USER_REQUEST is dispatched
function* fetchUserSaga() {
  try {
    const user = yield call(fetchUserFromApi); // Wait for API call to complete
    yield put({ type: FETCH_USER_SUCCESS, payload: user }); // Dispatch success action
  } catch (error) {
    yield put({ type: FETCH_USER_FAILURE, payload: error.message }); // Dispatch failure action
  }
}

// Watcher saga: watches for FETCH_USER_REQUEST action
function* watchFetchUser() {
  yield takeEvery(FETCH_USER_REQUEST, fetchUserSaga); // Listen for FETCH_USER_REQUEST
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
}

export default watchFetchUser;
