import { combineReducers } from 'redux';
import usersReducer from './users';

const rootReducer = combineReducers({
  // state: (state = {}) => state // default, dummy state
  users: usersReducer
});

export default rootReducer;
