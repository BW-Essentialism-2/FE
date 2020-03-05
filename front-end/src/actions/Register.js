import { axiosWithAuth } from '../utils/axiosWithAuth'

//ACTIONS To FETCH ALL VALUES
export const FETCH_ALL_VALUES_START = "FETCH_ALL_VALUES_START"
export const FETCH_ALL_VALUES_SUCCESS = "FETCH_ALL_VALUES_SUCCESS"
export const FETCH_ALL_VALUES_FAIL = "FETCH_ALL_VALUES_FAIL"


//FETCH USER VALUES
export const FetchValues = () => dispatch => {
    const user_id = localStorage.getItem('user_id')
    dispatch({type: FETCH_ALL_VALUES_START})
    axiosWithAuth().get(`/api/user/${user_id}/values`)
        .then(res => {
            dispatch({ type: FETCH_ALL_VALUES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_ALL_VALUES_FAIL, payload: err })
        })
}

//ACTIONS TO TOGGLE IMPORTANT VALUES
export const TOGGLE_IMPORTANT_VALUES_START = "TOGGLE_IMPORTANT_VALUES_START"
export const TOGGLE_IMPORTANT_VALUES_SUCCESS = "TOGGLE_IMPORTANT_VALUES_SUCCESS"
export const TOGGLE_IMPORTANT_VALUES_FAIL = "TOGGLE_IMPORTANT_VALUES_FAIL"

//UPDATE VALUE TO BE IMPORTANT
export const updateValue = (value) => dispatch => {
    const user_id = localStorage.getItem('user_id')
    dispatch({type: TOGGLE_IMPORTANT_VALUES_START})
    axiosWithAuth().put(`/api/user/${user_id}/values`, value)
        .then(res => {
            dispatch({ type: TOGGLE_IMPORTANT_VALUES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: TOGGLE_IMPORTANT_VALUES_FAIL, payload: err })
        })
}

//FETCH USER PROJECTS
