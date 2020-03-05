import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";

export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const PROJECTS_SUCCESS = "PROJECTS_SUCCESS";
export const PROJECTS_FAILURE = "PROJECTS_FAILURE";

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axiosWithAuth
    .get("/api/user/:id/values")
    .then(res => dispatch({ type: DATA_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DATA_FAILURE, payload: err.response }));
};

export const fetchProjects = () => dispatch => {
  dispatch({ type: FETCH_PROJECTS });
  axiosWithAuth
    .get("/api/user/:id/projects")
    .then(res => dispatch({ type: PROJECTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: PROJECTS_FAILURE, payload: err.response }));
};