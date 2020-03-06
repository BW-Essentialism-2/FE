
import {
    FETCH_USER_VALUES_FAIL, FETCH_USER_VALUES_SUCCESS, FETCH_USER_VALUES_START,
    UPDATE_VALUES_START, UPDATE_VALUES_SUCCESS, UPDATE_VALUES_FAIL,
    FETCH_GOALS_START, FETCH_GOALS_SUCCESS, FETCH_GOALS_FAIL,
    ADD_GOAL_START, ADD_GOAL_SUCCESS, ADD_GOAL_FAIL,
    DELETE_GOAL_START, DELETE_GOAL_SUCCESS, DELETE_GOAL_FAIL
} from '../actions/Register'
const initialState =  {
        userValues: [],
        currentGoals: [],
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
        case FETCH_GOALS_START:
            return {
                ...state,
                isUpdating: true
            }
        case FETCH_GOALS_SUCCESS:
            return {
                ...state,
                currentGoals: action.payload,
                isUpdating: false
            }
        case FETCH_GOALS_FAIL:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            }
        case ADD_GOAL_START:
            return {
                ...state,
                isUpdating: true
            }
        case ADD_GOAL_SUCCESS:
            return {
                ...state,
                currentGoals: [...state.currentGoals, action.payload],
                isUpdating: false
            }
        case ADD_GOAL_FAIL:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            }
        case DELETE_GOAL_START:
            return {
                ...state,
                isUpdating: true
            }
        case DELETE_GOAL_SUCCESS:
            return {
                ...state,
                currentGoals: state.currentGoals.filter(goal => goal.project_id !== action.payload),
                isUpdating: false
            }
        case DELETE_GOAL_FAIL:
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