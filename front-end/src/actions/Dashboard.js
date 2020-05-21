import { axiosWithAuth } from '../utils/axiosWithAuth';

const userId = localStorage.getItem('user_id')

// FETCH USER VALUES
export const FETCH_USER_VALUES_START = "FETCH_USER_VALUES_START"
export const FETCH_USER_VALUES_SUCCESS = "FETCH_USER_VALUES_SUCCESS"
export const FETCH_USER_VALUES_FAIL = "FETCH_USER_VALUES_FAIL"

export const fetchUserValues = () => dispatch => {
  dispatch({type: FETCH_USER_VALUES_START})
  axiosWithAuth()
    .get(`/api/user/${userId}/values`)
    .then(res => dispatch({ type: FETCH_USER_VALUES_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_USER_VALUES_FAIL, payload: err }))
};

// UPDATE USER VALUES
export const UPDATE_USER_VALUES_START = "UPDATE_USER_VALUES_START"
export const UPDATE_USER_VALUES_SUCCESS = "UPDATE_USER_VALUES_SUCCESS"
export const UPDATE_USER_VALUES_FAIL = "UPDATE_USER_VALUES_FAIL"

export const updateValue = (value) => dispatch => {
  dispatch({type: UPDATE_USER_VALUES_START})
  axiosWithAuth()
    .put(`/api/user/${userId}/values`, value)
    .then(res => dispatch({ type: UPDATE_USER_VALUES_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_USER_VALUES_FAIL, payload: err }))
};

// FETCH USER PROJECTS
export const FETCH_PROJECTS_START = "FETCH_PROJECTS_START"
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS"
export const FETCH_PROJECTS_FAIL = "FETCH_PROJECTS_FAIL"

export const fetchProjects = () => dispatch => {
  dispatch({type: FETCH_PROJECTS_START})
  axiosWithAuth()
    .get(`/api/user/${userId}/projects`)
    .then(res => dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_PROJECTS_FAIL, payload: err }))
};

// ADD USER PROJECT
export const ADD_PROJECT_START = "ADD_PROJECT_START"
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS"
export const ADD_PROJECT_FAIL = "ADD_PROJECT_FAIL"

export const addProject = (project) => dispatch => {
  dispatch({ type: ADD_PROJECT_START })
  axiosWithAuth()
    .post(`/api/user/${userId}/projects`, project)
    .then(res => dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_PROJECT_FAIL, payload: err }))
};

// UPDATE USER PROJECTS
export const UPDATE_PROJECTS_START = "UPDATE_PROJECTS_START"
export const UPDATE_PROJECTS_SUCCESS = "UPDATE_PROJECTS_SUCCESS"
export const UPDATE_PROJECTS_FAIL = "UPDATE_PROJECTS_FAIL"

export const updateProjects = (project) => dispatch => {
  dispatch({ type: UPDATE_PROJECTS_START })
  axiosWithAuth()
    .put(`/api/user/${userId}/projects`, project)
    .then(res => dispatch({ type: UPDATE_PROJECTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_PROJECTS_FAIL, payload: err }))
};

// DELETE USER PROJECT
export const DELETE_PROJECT_START = "DELETE_PROJECT_START"
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS"
export const DELETE_PROJECT_FAIL = "DELETE_PROJECT_FAIL"

export const deleteProject = (projectId) => dispatch => {
  dispatch({ type: DELETE_PROJECT_START })
  axiosWithAuth()
    .delete(`/api/user/projects/${projectId}`)
    .then(res => dispatch({ type: DELETE_PROJECT_SUCCESS, payload: projectId }))
    .catch(err => dispatch({ type: DELETE_PROJECT_FAIL, payload: err }))
};