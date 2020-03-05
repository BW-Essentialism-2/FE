
import {
    FETCH_ALL_VALUES_FAIL, FETCH_ALL_VALUES_SUCCESS, FETCH_ALL_VALUES_START,
    TOGGLE_IMPORTANT_VALUES_START, TOGGLE_IMPORTANT_VALUES_SUCCESS, TOGGLE_IMPORTANT_VALUES_FAIL
} from '../actions/Register'
const initialState =  {
        allValues: [],
        importantValues: [],
        top3: [],
        isSending: false,
        isUpdating: false,
        error: ""
    }

export const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALL_VALUES_START:
            return {
                ...state,
                isSending: true,
                error: ""
            }
        case FETCH_ALL_VALUES_SUCCESS:
            return {
                ...state,
                allValues: action.payload,
                isSending: false,
                error: ""
            }
        case FETCH_ALL_VALUES_FAIL:
            return {
                ...state,
                isSending: false,
                error: action.payload
            }
        case TOGGLE_IMPORTANT_VALUES_START:
            return {
                ...state,
                isUpdating: true
            }
        case TOGGLE_IMPORTANT_VALUES_SUCCESS:
            let newValues = state.allValues.map(value => {
                if(value.value_id === action.payload.value_id) {
                    return value = action.payload
                }
                return value
            })
            console.log(newValues)
            return {
                ...state,
                isUpdating: false,
                allValues: newValues
            }
        case TOGGLE_IMPORTANT_VALUES_FAIL:
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