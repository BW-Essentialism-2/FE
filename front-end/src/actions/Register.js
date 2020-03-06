import { axiosWithAuth } from '../utils/axiosWithAuth'


//ACTIONS To FETCH USER VALUES
export const FETCH_USER_VALUES_START = "FETCH_USER_VALUES_START"
export const FETCH_USER_VALUES_SUCCESS = "FETCH_USER_VALUES_SUCCESS"
export const FETCH_USER_VALUES_FAIL = "FETCH_USER_VALUES_FAIL"


//FETCH USER VALUES
export const FetchValues = () => dispatch => {
    const user_id = localStorage.getItem('user_id')
    dispatch({type: FETCH_USER_VALUES_START})
    axiosWithAuth().get(`/api/user/${user_id}/values`)
        .then(res => {
            dispatch({ type: FETCH_USER_VALUES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_USER_VALUES_FAIL, payload: err })
        })
}

//ACTIONS TO UPDATE VALUES
export const UPDATE_VALUES_START = "UPDATE_VALUES_START"
export const UPDATE_VALUES_SUCCESS = "UPDATE_VALUES_SUCCESS"
export const UPDATE_VALUES_FAIL = "UPDATE_VALUES_FAIL"

//UPDATE VALUE
export const updateValue = (value) => dispatch => {
    const user_id = localStorage.getItem('user_id')
    dispatch({type: UPDATE_VALUES_START})
    axiosWithAuth().put(`/api/user/${user_id}/values`, value)
        .then(res => {
            dispatch({ type: UPDATE_VALUES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: UPDATE_VALUES_FAIL, payload: err })
        })
}


//FETCH USERS GOALS
export const FETCH_GOALS_START = "FETCH_GOALS_START"
export const FETCH_GOALS_SUCCESS = "FETCH_GOALS_SUCCESS"
export const FETCH_GOALS_FAIL = "FETCH_GOALS_FAIL"

export const fetchGoals = () => dispatch => {
    const user_id = localStorage.getItem('user_id')
    dispatch({type: FETCH_GOALS_START})
    axiosWithAuth().get(`/api/user/${user_id}/projects`)
        .then(res => {
            dispatch({ type: FETCH_GOALS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_GOALS_FAIL, payload: err })
        })
}

//ADD GOAL TO USER
export const ADD_GOAL_START = "ADD_GOAL_START"
export const ADD_GOAL_SUCCESS = "ADD_GOAL_SUCCESS"
export const ADD_GOAL_FAIL = "ADD_GOAL_FAIL"

export const addGoal = (goal) => dispatch => {
    const user_id = localStorage.getItem('user_id')
    dispatch({ type: ADD_GOAL_START })
    axiosWithAuth().post(`/api/user/${user_id}/projects`, goal)
        .then(res => {
            dispatch({ type: ADD_GOAL_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_GOAL_FAIL, payload: err })
        })
}

//UPDATE GOAL TO USER
export const UPDATE_GOAL_START = "UPDATE_GOAL_START"
export const UPDATE_GOAL_SUCCESS = "UPDATE_GOAL_SUCCESS"
export const UPDATE_GOAL_FAIL = "UPDATE_GOAL_FAIL"

export const updateGoal = (goal) => dispatch => {
    const user_id = localStorage.getItem('user_id')
    dispatch({ type: UPDATE_GOAL_START })
    axiosWithAuth().put(`/api/user/${user_id}/projects`, goal)
        .then(res => {
            dispatch({ type: UPDATE_GOAL_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: UPDATE_GOAL_FAIL, payload: err })
        })
}

//DELETE GOAL
export const DELETE_GOAL_START = "DELETE_GOAL_START"
export const DELETE_GOAL_SUCCESS = "DELETE_GOAL_SUCCESS"
export const DELETE_GOAL_FAIL = "DELETE_GOAL_FAIL"

export const deleteGoal = (id) => dispatch => {
    // const user_id = localStorage.getItem('user_id')
    dispatch({ type: DELETE_GOAL_START })
    axiosWithAuth().delete(`/api/user/projects/${id}`)
        .then(dispatch({ type: DELETE_GOAL_SUCCESS, payload: id }))
        .catch(err => {
            dispatch({ type: DELETE_GOAL_FAIL, payload: err })
        })
}