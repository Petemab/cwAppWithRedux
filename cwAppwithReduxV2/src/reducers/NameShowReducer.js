import initialState from './initialState';
import {FETCH_ALL_DATA, RECEIVE_ALL_DATA, INCREMENT_RATING} from '../actions/actionTypes';

export default function nameShow(state = initialState.personData, action) {
  let newState;
  switch (action.type) {
    case FETCH_ALL_DATA:
      return action;
    case RECEIVE_ALL_DATA:
      newState = action.payload;
      // console.log(newState);
      return newState;
    case INCREMENT_RATING:
      return action;
    default:
      return state;
  }
}
