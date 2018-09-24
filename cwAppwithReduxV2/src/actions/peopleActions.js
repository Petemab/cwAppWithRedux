import * as types from './actionTypes';


function url() {
  return 'https://cwbackend.herokuapp.com/api/people/';
}

export function receiveNames(json) {
  // console.log('in people actions ---->', json);
  return {type: types.RECEIVE_NAMES, peopleData: json};
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

// export function fetchAllPersonData(){
//   return dispatch => {
//
//   }
// }
