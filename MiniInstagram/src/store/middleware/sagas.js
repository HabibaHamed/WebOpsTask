import {takeEvery, take, call, takeLatest, put} from 'redux-saga/effects';
import * as apiHandler from './apiHandler';
import * as RootNavigation from '../../navigation/RootNavigation';
import{Alert} from 'react-native';


function* login(input){
  const payload = yield call(apiHandler.login,input);

  //Login successful
  if(payload){ 
    yield put({type: 'user/logIn', payload});
  }
  //Login failed
  else{
    Alert.alert("Wrong Username or password");
  }
}
function* loadPosts() {
  const payload = yield call(apiHandler.fetchPosts);
  yield put({type: 'posts/getPosts', payload});
}
function* addPost(input) {
  const payload = input.newPostObj;
  yield call(apiHandler.addNewPost, payload);
  yield put({type: 'posts/addPost', payload});
  if (payload.destination !== '') {
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
  while (true) {
  const {user} = yield take('LOG_IN');
  //console.log(user);
  yield call(login,user);

  yield takeLatest('FETCH_POSTS', loadPosts);
  yield takeEvery('CLEAR_BUCKETLIST', clearBucketList); //temp for clearing bucketlist
  yield takeEvery('FETCH_BUCKETLIST', loadBucketList);
  yield takeEvery('ADDTO_BUCKETLIST', addToBucketList);
  yield takeEvery('ADD_POST', addPost);
  }
}
