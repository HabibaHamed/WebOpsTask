import {takeEvery, take, call, takeLatest, put} from 'redux-saga/effects';
import * as apiHandler from './apiHandler';
import * as RootNavigation from '../../navigation/RootNavigation';

function* loadPosts() {
  const payload = yield call(apiHandler.fetchPosts);
  //console.log(payload);
  yield put({type: 'posts/getPosts', payload});
}
function* addPost(input) {
  const payload = input.newPostObj;
  console.log('add post');
  yield call(apiHandler.addNewPost, payload);
  yield put({type: 'posts/addPost', payload});
  if (payload.destination !== '') {
    console.log("destination not empty");
    yield call(apiHandler.removeBucketlist, payload.destination);
    yield put({type: 'bucketlist/removeBucketlist', payload});
  }
  RootNavigation.navigate('NewsFeed');
}
function* clearBucketList() {
  const payload = yield call(apiHandler.clearAll);
}
function* loadBucketList() {
  const payload = yield call(apiHandler.fetchBucklist);
  console.log('fetch-bucket-list',payload);
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
  yield takeEvery('CLEAR_BUCKETLIST', clearBucketList); //temp for clearing bucketlist
  yield takeEvery('FETCH_BUCKETLIST', loadBucketList);
  yield takeEvery('ADDTO_BUCKETLIST', addToBucketList);
  yield takeEvery('ADD_POST', addPost);
}
