import postsReducer from './postsReducer';
import bucketListReducer from './bucketListReducer';
import { combineReducers } from 'redux';

const rootReducer= combineReducers({
  posts:postsReducer,
  bucketlist:bucketListReducer
});

export default rootReducer;