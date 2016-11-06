import axios from 'axios';
import {
  FETCH_USERS
} from './types';

// ACTION GENERATOR / CREATOR returns an Action
export function fetchUsers () {

  // RETURNS A PROMISE
  const request = axios.get('https://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    // STATIC hard-coded data for now
    payload: request // <<< PROMISE !
/*
    [
      { name: 'Lisa' },
      { name: 'Liza' },
      { name: 'Lisabetta' },
      { name: 'Lisa2' },
      { name: 'Lisabetta2' },
      { name: 'Lisa3' },
      { name: 'Liza3' },
      { name: 'Lisabetta3' },
    ]
*/
  };
}
