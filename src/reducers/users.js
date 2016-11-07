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
    /* WR__ Question:
    A. Think I found my answer, asking my question.
    Yes, if you don't do the '...' you wind up with
    [array01, [array02]]
    whereas what you want is
    [array01, array02[0], array02[1]].
    Cheers.
    Q. Why does action.payload need the spread operator?
    What precisely is in that 'action.payload'?
    Isn't it an [array] ? [{user1},{user2}] ?
    To put an [array01] inside another [array02], is spread operator necessary ? [array02, [array01]]
    */
      // return [ ...state, action.payload ]; // Nope. (Secondo me.)
      return [ ...state, ...action.payload ];
  }
  return state;
}
