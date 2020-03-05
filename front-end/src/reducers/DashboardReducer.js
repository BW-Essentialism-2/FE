import { FETCH_DATA, 
        DATA_SUCCESS, 
        DATA_FAILURE } from '../actions/Dashboard';

const initialState = {
  allValues: [],
  importantValues: [],
  top3: [],
  isFetching: false,
  error: ''
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        smurfData: action.payload
      };
    case DATA_FAILURE:
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