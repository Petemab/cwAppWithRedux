import initialState from './initialState';
import {FETCH_NAMES, RECEIVE_NAMES, GETTING_DATA} from '../actions/actionTypes';

export default function nameList(state = initialState.peopleData, action) {
  // let newState;
  switch (action.type) {
    case FETCH_NAMES:
      return action;
    case GETTING_DATA:
      return { ...state, loading: true};
    case RECEIVE_NAMES:
      // newState = action.payload;
      // console.log(newState);
      // return newState;
      return { ...state, peopleData: action.payload, loading: false};
    default:
      return state;
  }
}
