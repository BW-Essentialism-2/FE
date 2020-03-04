
import {
    FETCH_ALL_VALUES_FAIL, FETCH_ALL_VALUES_SUCCESS, FETCH_ALL_VALUES_START
} from '../actions/Register'
const initialState =  {
        allValues: [],
        importantValues: [],
        top3: [],
        isFetching: false,
        error: ""
    }

export const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALL_VALUES_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCH_ALL_VALUES_SUCCESS:
            return {
                ...state,
                allValues: action.payload,
                isFetching: false,
                error: ""
            }
        case FETCH_ALL_VALUES_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return initialState
    }
}

export default registerReducer