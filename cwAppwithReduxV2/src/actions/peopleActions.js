import * as types from './actionTypes';


function url() {
  return 'https://cwbackend.herokuapp.com/api/people/';
}

export function receiveNames(json) {
  return{type: types.RECEIVE_NAMES, peopleData: json.peopleData};
}

export function fetchNames(){
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveNames(json)));
  };
}
