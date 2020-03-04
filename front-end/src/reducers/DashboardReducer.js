import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/Dashboard';

const initialState = {
  userData: [],
  isFetching: false,
  error: ''
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        smurfData: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default DashboardReducer;