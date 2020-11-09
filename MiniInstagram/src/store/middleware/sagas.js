import { takeEvery ,take,call, takeLatest,put} from 'redux-saga/effects';
import * as apiHandler from './apiHandler';

function* loadPosts(){
  //console.log('posts saga');
  const posts = yield call(apiHandler.fetchPosts);
  console.log("posts",posts);
  //yield put({type: 'posts/getPosts', posts})
  console.log('posts saga');
  //console.log(posts);
}
function* clearBucketList (){
  const payload = yield call(apiHandler.clearAll);
  //console.log("bucketlist+",payload);
   //yield put({type: 'bucketlist/getBucketlist', payload});
  //console.log('bucketlist saga after');
}
function* loadBucketList (){
  const payload = yield call(apiHandler.fetchBucklist);
  //console.log("bucketlist+",payload);
   yield put({type: 'bucketlist/getBucketlist', payload});
  //console.log('bucketlist saga after');
}
function* addToBucketList (input){
  const payload = input.updatedList;
  
  yield call(apiHandler.addBucketlist,payload);
  //console.log('bucketlist saga before',payload);
   yield put({type:'bucketlist/addBucketList', payload});
  //console.log('bucketlist saga after',payload);
}
export default function* rootSaga() {
    console.log('Hello Sagas!');
    yield takeLatest('FETCH_POSTS', loadPosts);
    //yield takeEvery('CLEAR_BUCKETLIST',clearBucketList); temp for clearing bucketlist
    yield takeEvery('ADDTO_BUCKETLIST',addToBucketList);
    yield takeEvery('FETCH_BUCKETLIST',loadBucketList);
  }