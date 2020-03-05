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
