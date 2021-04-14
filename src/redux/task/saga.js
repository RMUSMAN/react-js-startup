/* eslint-disable */
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { errorNotification, successNotification } from '../../utils';
import * as api from './service';
import { token } from '../selectors';

import { actions } from './reducer';

function* createTaskSaga(action) {
  try {
    const authtoken = yield select(token);
    const result = yield call(api.createTask, action.payload, authtoken);
    yield put(actions.createTaskSuccess(result.data));
    successNotification(result);
    yield put(actions.reset());
  } catch (error) {
    errorNotification(error);
    yield put(actions.createTaskFail({ ...error }));
  }
}
function* getTasksSaga() {
  try {
    const authtoken = yield select(token);
    const result = yield call(api.getTask, authtoken);
    yield put(actions.getTasksSuccess(result.data));
    yield put(actions.reset());
  } catch (error) {
    // errorNotification(error);
    yield put(actions.getTasksFail({ ...error }));
  }
}
function* updateTasksSaga(action) {
  try {
    const authtoken = yield select(token);
    const result = yield call(api.updateTask, action.payload, authtoken);
    yield put(actions.updateTaskSuccess({ data: action.payload }));
    yield put(actions.reset());
  } catch (error) {
    yield put(actions.updateTaskFail({ ...error }));
  }
}

export default function* taskWatcher() {
  yield takeLatest(actions.createTask.type, createTaskSaga);
  yield takeLatest(actions.getTasks.type, getTasksSaga);
  yield takeLatest(actions.updateTask.type, updateTasksSaga);
}
