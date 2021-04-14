/* eslint-disable */
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { errorNotification, successNotification } from '../../utils';
import * as api from './service';
import { token } from '../selectors';

import { actions } from './reducer';

function* createGroupSaga(action) {
  try {
    const authtoken = yield select(token);
    const result = yield call(api.createGroup, action.payload, authtoken);
    yield put(actions.createUserGroupSuccess(result.data));
    successNotification(result);
    yield put(actions.reset());
  } catch (error) {
    errorNotification(error);
    yield put(actions.createUserGroupFail({ ...error }));
  }
}
function* getGroupSaga() {
  try {
    const authtoken = yield select(token);
    const result = yield call(api.getGroups, authtoken);
    yield put(actions.getUserGroupSuccess(result.data));
    yield put(actions.reset());
  } catch (error) {
    // errorNotification(error);
    yield put(actions.getUserGroupFail({ ...error }));
  }
}

export default function* groupWatcher() {
  yield takeLatest(actions.createUserGroup.type, createGroupSaga);
  yield takeLatest(actions.getUserGroup.type, getGroupSaga);
  // yield takeLatest(actions.updateSite.type, updateSitesSaga);
}
