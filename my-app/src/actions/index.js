import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// action creator
export const fetchFacts = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axios
    .get(
      'http://ddragon.leagueoflegends.com/cdn/9.22.1/data/en_US/champion.json'
    )
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: Object.entries(res.data.data).map((e) => ( { [e[0]]: e[1] } )) })) 
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};


//RGAPI-ce59c62c-e99e-47e0-b137-a46560f0eb86 Key