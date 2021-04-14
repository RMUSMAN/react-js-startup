/* eslint-disable */
import { fork, all } from 'redux-saga/effects';
import { authWatcher } from '../auth';
import { siteWatcher } from '../site';
import { inviteWatcher } from '../invites';
import { groupWatcher } from '../usersGroup';
import { taskWatcher } from '../task';

export default function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(siteWatcher),
    fork(inviteWatcher),
    fork(groupWatcher),
    fork(taskWatcher)
  ]);
}
