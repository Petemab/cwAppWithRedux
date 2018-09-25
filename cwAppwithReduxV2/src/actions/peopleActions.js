import * as types from './actionTypes';


function url() {
  return 'https://cwbackend.herokuapp.com/api/people/';
}

function detailUrl(id){
  return `https://cwbackend.herokuapp.com/api/people/${id}`;
}

export function receiveNames(json) {
  // console.log('in people actions ---->', json);
  return {type: types.RECEIVE_NAMES, payload: json};
}

export function fetchNames(){
  return dispatch => {
    return fetch(url(), {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveNames(json)))
      .catch((error) => {
        console.error(error);
      });
  };
}


export function receiveAllPersonData(json) {
  // console.log('in receiveAllPersonData ---->', json);
  return {type: types.RECEIVE_ALL_DATA, payload: json};
}

export function fetchAllPersonData(id){
  return dispatch => {
    return fetch(detailUrl(id), {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => dispatch(receiveAllPersonData(json)))
      .catch((error) => {
        console.error(error);
      });

  };
}
