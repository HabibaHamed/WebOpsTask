import {takeEvery, take, call, takeLatest, put} from 'redux-saga/effects';
import * as apiHandler from './apiHandler';

function* loadPosts() {
  const payload = yield call(apiHandler.fetchPosts);
  yield put({type: 'posts/getPosts', payload});
}
function* clearBucketList() {
  const payload = yield call(apiHandler.clearAll);
}
function* loadBucketList() {
  const payload = yield call(apiHandler.fetchBucklist);
  yield put({type: 'bucketlist/getBucketlist', payload});
}
function* addToBucketList(input) {
  const payload = input.updatedList;

  yield call(apiHandler.addBucketlist, payload);
  yield put({type: 'bucketlist/addBucketList', payload});
}
export default function* rootSaga() {
  console.log('Hello Sagas!');
  yield takeLatest('FETCH_POSTS', loadPosts);
  //yield takeEvery('CLEAR_BUCKETLIST',clearBucketList); temp for clearing bucketlist
  yield takeEvery('ADDTO_BUCKETLIST', addToBucketList);
  yield takeEvery('FETCH_BUCKETLIST', loadBucketList);
}
