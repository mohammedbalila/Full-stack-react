import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import authReducer from './AuthReducer';
import userReducer from './UserReducer';

export default combineReducers({
  posts: postsReducer,
  auth: authReducer,
  user: userReducer,
});
