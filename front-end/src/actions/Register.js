import { axiosWithAuth } from '../utils/axiosWithAuth'

//ACTIONS To FETCH ALL VALUES
export const FETCH_ALL_VALUES_START = "FETCH_ALL_VALUES_START"
export const FETCH_ALL_VALUES_SUCCESS = "FETCH_ALL_VALUES_SUCCESS"
export const FETCH_ALL_VALUES_FAIL = "FETCH_ALL_VALUES_FAIL"

//FETCH VALUES
export const FetchValues = () => dispatch => {
    dispatch({type: FETCH_ALL_VALUES_START})
    axiosWithAuth().get('/api/values')
        .then(res => {
            dispatch({ type: FETCH_ALL_VALUES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_ALL_VALUES_FAIL, payload: err })
        })
}