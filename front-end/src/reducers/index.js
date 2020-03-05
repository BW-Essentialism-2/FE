import { combineReducers } from 'redux'
import RegisterReducer from './RegisterReducer'
import DashboardReducer from './DashboardReducer';

export default combineReducers({
    register: RegisterReducer,
    dashboard: DashboardReducer
})