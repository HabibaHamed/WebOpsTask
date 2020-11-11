import {takeEvery, take, call, takeLatest, put, all} from 'redux-saga/effects';
import * as apiHandler from './apiHandler';
import * as RootNavigation from '../../navigation/RootNavigation';
import {Alert} from 'react-native';

/**Saga function for login action */
function* login(input) {
  const payload = yield call(apiHandler.login, input);

  //Login successful
  if (payload) {
    yield put({type: 'user/logIn', payload});
  }
}

/**Sagas functions for posts' actions */
function* loadPosts() {
  const response = yield call(apiHandler.fetchPosts);
  const testResponses = [response, 'Fetch_failed']; //random response types for testing refresh feature
  const payload = testResponses[Math.floor(Math.random() * 2)];
  if (payload !== 'Fetch_failed') yield put({type: 'posts/getPosts', payload});
  else {
    yield put({type: 'posts/getPostsFailed', payload});
  }
}
function* addPost(input) {
  const payload = input.newPostObj;
  const responseApi = call(apiHandler.addNewPost, payload);
  const testResponses = [responseApi, 'Add_failed'];
  const response = testResponses[Math.floor(Math.random() * 2)];
  if (response !== 'Add_failed') {
    yield put({type: 'posts/addPost', payload});
    if (payload.destination !== '') {
      yield call(apiHandler.removeBucketlist, payload.destination);
      yield put({type: 'bucketlist/removeBucketlist', payload});
    }
    RootNavigation.navigate('NewsFeed');
  } else {
    Alert.alert("Add post failed, please try again");
  }
}

/**Sagas functions for bucketlist's actions */
function* clearBucketList() {
  const payload = yield call(apiHandler.clearAll);
}
function* loadBucketList() {
  const response = yield call(apiHandler.fetchBucklist);
  const testResponses = [response, 'Fetch_failed']; //random response types for testing refresh feature
  const payload = testResponses[Math.floor(Math.random() * 2)];
  if (payload !== 'Fetch_failed') {
    yield put({type: 'bucketlist/getBucketlist', payload});
  } else {
    yield put({type: 'bucketlist/getBucketlistFailed', payload});
  }
}
function* addToBucketList(input) {
  const payload = input.updatedList;
  const responseApi = yield call(apiHandler.addBucketlist, payload);
  const testResponses = [responseApi, 'Add_failed'];
  const response = testResponses[Math.floor(Math.random() * 2)];
  if (response !== 'Add_failed') {
    yield put({type: 'bucketlist/addBucketList', payload});
  }
  else{
    Alert.alert("Add to bucketlist failed, please try again");
  }
}

export default function* rootSaga() {
  console.log('Hello Sagas!');
  while (true) {
    const {user} = yield take('LOG_IN');
    yield call(login, user);

    yield takeLatest('FETCH_POSTS', loadPosts);
    yield takeEvery('ADD_POST', addPost);

    yield takeEvery('CLEAR_BUCKETLIST', clearBucketList); //temp for clearing bucketlist
    yield takeEvery('FETCH_BUCKETLIST', loadBucketList);
    yield takeEvery('ADDTO_BUCKETLIST', addToBucketList);
    
  }
}
