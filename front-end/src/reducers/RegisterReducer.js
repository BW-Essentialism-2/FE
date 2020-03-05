
import {
    FETCH_USER_VALUES_FAIL, FETCH_USER_VALUES_SUCCESS, FETCH_USER_VALUES_START,
    UPDATE_VALUES_START, UPDATE_VALUES_SUCCESS, UPDATE_VALUES_FAIL
} from '../actions/Register'
const initialState =  {
        userValues: [],
        isSending: false,
        isUpdating: false,
        error: ""
    }

export const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_VALUES_START:
            return {
                ...state,
                isSending: true,
                error: ""
            }
        case FETCH_USER_VALUES_SUCCESS:
            return {
                ...state,
                userValues: action.payload,
                isSending: false,
                error: ""
            }
        case FETCH_USER_VALUES_FAIL:
            return {
                ...state,
                isSending: false,
                error: action.payload
            }
        case UPDATE_VALUES_START:
            return {
                ...state,
                isUpdating: true
            }
        case UPDATE_VALUES_SUCCESS:
            let newValues = state.userValues.map(value => {
                if(value.value_id === action.payload.value_id) {
                    return value = action.payload
                }
                return value
            })
            return {
                ...state,
                isUpdating: false,
                userValues: newValues
            }
        case UPDATE_VALUES_FAIL:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            }
        default:
            return initialState
    }
}

export default registerReducer