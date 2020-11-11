import postsReducer from './postsReducer';
import bucketListReducer from './bucketListReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer= combineReducers({
  posts:postsReducer,
  bucketlist:bucketListReducer,
  user:userReducer
});

export default rootReducer;