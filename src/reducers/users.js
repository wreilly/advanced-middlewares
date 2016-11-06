import {
  FETCH_USERS
} from '../actions/types';

// This action brings a payload of array of users

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
    // debugger
    /*
action.payload
Promise__proto__: Promise[[PromiseStatus]]: "pending"[[PromiseValue]]: undefined
    */
      return [ ...state, ...action.payload ];
  }
  return state;
}
