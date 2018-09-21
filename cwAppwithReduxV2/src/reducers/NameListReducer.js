import initialState from './initialState';
import {FETCH_NAMES, RECEIVE_NAMES} from '../actions/actionTypes';

export default function nameList(state = initialState.peopleData, action) {
  let newState;
  switch (action.type) {
    case FETCH_NAMES:
      console.log('FETCH_STUFF Action');
      return action;
    case RECEIVE_NAMES:
      newState = action.peopleData;
      console.log('RECEIVE_STUFF Action');
      return newState;
    default:
      return state;
  }
}
