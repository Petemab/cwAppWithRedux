import initialState from './initialState';
import {FETCH_NAMES, RECEIVE_NAMES} from '../actions/actionTypes';

export default function nameList(state = initialState.peopleData, action) {
  let newState;
  switch (action.type) {
    case FETCH_NAMES:
      return action;
    case RECEIVE_NAMES:
      newState = action.peopleData;
      // console.log(newState);
      return newState;
    default:
      return state;
  }
}
