import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";

export const FETCH_USER_VALUES = "FETCH_USER_VALUES";
export const USER_VALUES_SUCCESS = "USER_VALUES_SUCCESS";
export const USER_VALUES_FAILURE = "USER_VALUES_FAILURE";

export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const PROJECTS_SUCCESS = "PROJECTS_SUCCESS";
export const PROJECTS_FAILURE = "PROJECTS_FAILURE";

// export const ADD_PROJECT_START = "ADD_PROJECT_START";
// export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
// export const ADD_PROJECT_FAILURE = "ADD_PROJECT_FAILURE";

// export const UPDATE_PROJECT_START = "UPDATE_PROJECT_START";
// export const UPDATE_PROJECT_DOING = "UPDATE_PROJECT_DOING";
// export const UPDATE_PROJECT_SUCCESS = "UPDATE_PROJECT_SUCCESS";

// export const DEL_PROJECT_START = "DEL_PROJECT_START";
// export const DEL_PROJECT_DOING = "DEL_PROJECT_DOING";
// export const DEL_PROJECT_SUCCESS = "DEL_PROJECT_SUCCESS";

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axiosWithAuth
    .get("/api/user/")
    .then(res => dispatch({ type: DATA_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DATA_FAILURE, payload: err.response }));
};

export const fetchUserValues = () => dispatch => {
  dispatch({ type: FETCH_USER_VALUES });
  axiosWithAuth
    .get("/api/user/:id/values")
    .then(res => dispatch({ type: USER_VALUES_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: USER_VALUES_FAILURE, payload: err.response }));
};

export const fetchProjects = () => dispatch => {
  dispatch({ type: FETCH_PROJECTS });
  axiosWithAuth
    .get("/api/user/:id/projects")
    .then(res => dispatch({ type: PROJECTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: PROJECTS_FAILURE, payload: err.response }));
};

// export const addProject = (project) => dispatch => {
//   dispatch({type: ADD_PROJECT_START})
//   axiosWithAuth
//     .post("/api/user/:id/projects", project)
//     .then(res => {
//       console.log(res)
//       dispatch({
//         type: ADD_PROJECT_SUCCESS,
//         payload: res
//       })
//     })
//     .catch(err => console.log(err))
// };

// export const updateProject = (project) => dispatch => {
//   dispatch({type: UPDATE_PROJECT_START})
//   axiosWithAuth
//     .put(`/api/user/:id/projects/${project.id}`, project)
//     .then(res => {
//       console.log(res)
//       dispatch({
//         type: UPDATE_PROJECT_SUCCESS,
//         payload: res
//       })
//     })
//     .catch(err => console.log(err))
// };

// export const deleteProject = (project) => dispatch => {
//   console.log(project);
//   dispatch({type: DEL_PROJECT_START})
//   axiosWithAuth
//   .delete(`/api/user/:id/projects/${project.id}`)
//     console.log('Delete project')
//   .then(res=> {
//     console.log("doing", res)
//     dispatch({
//       type: DEL_PROJECT_DOING,
//       payload: res.data
//     })
//   })
//   .then(res=> {
//     console.log(res)
//     dispatch({
//       type: DEL_PROJECT_SUCCESS,
//       payload: res
//     })
//   })
//   .catch(err => console.log(err))
// };