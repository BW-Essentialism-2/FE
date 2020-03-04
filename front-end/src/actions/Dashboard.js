import { axiosWithAuth } from '../utils/axiosWithAuth';

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchData = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth
    .get("/api/user/:id/values")
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const fetchProjects = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth
    .get("/api/user/:id/projects")
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};