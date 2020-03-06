import { FETCH_USER_VALUES_START, FETCH_USER_VALUES_SUCCESS, FETCH_USER_VALUES_FAIL,
  UPDATE_USER_VALUES_START, UPDATE_USER_VALUES_SUCCESS, UPDATE_USER_VALUES_FAIL,
  FETCH_PROJECTS_START, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAIL, 
  ADD_PROJECT_START, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL,
  UPDATE_PROJECTS_START, UPDATE_PROJECTS_SUCCESS, UPDATE_PROJECTS_FAIL, 
  DELETE_PROJECT_START, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAIL
      } from '../actions/Dashboard';

const initialState = {
  allValues: [],
  importantValues: [],
  top3: [],
  projects: [],
  isFetching: false,
  isUpdating: false,
  err: ''
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    
  // FETCH USER VALUES
    case FETCH_USER_VALUES_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_USER_VALUES_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case FETCH_USER_VALUES_FAIL:
      return {
        ...state,
        err: action.payload,
        isFetching: false
      };

  // UPDATE USER VALUES
    case UPDATE_USER_VALUES_START:
      return {
        ...state,
        isUpdating: true
      };
    case UPDATE_USER_VALUES_SUCCESS:
      return {
      ...state,
      isUpdating: false,
      importantValues: state.importantValues.map(value => {
        if(value.value_id === action.payload.value_id) {
            return value = action.payload
        }
        return value
      })
    };
    case UPDATE_USER_VALUES_FAIL:
      return {
        ...state,
        isUpdating: false,
        err: action.payload
      };

  // FETCH USER PROJECTS
    case FETCH_PROJECTS_START:
      return {
        ...state,
        isUpdating: true
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        isUpdating: false
      };
    case FETCH_PROJECTS_FAIL:
      return {
        ...state,
        isUpdating: false,
        err: action.payload
      };

  // ADD USER PROJECT
    case ADD_PROJECT_START:
      return {
        ...state,
        isUpdating: true
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        isUpdating: false
      };
    case ADD_PROJECT_FAIL:
      return {
        ...state,
        isUpdating: false,
        err: action.payload
      };

  // UPDATE USER PROJECTS
    case UPDATE_PROJECTS_START:
      return {
        ...state,
        isUpdating: true
      };
    case UPDATE_PROJECTS_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        projects: state.projects.map(project => {
          if(project.project_id === action.payload.project_id) {
              return project = action.payload
          }
          return project
        })};
    case UPDATE_PROJECTS_FAIL:
      return {
        ...state,
        isUpdating: false,
        err: action.payload
      };

  // DELETE USER PROJECT
    case DELETE_PROJECT_START:
      return {
        ...state,
        isUpdating: true
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.filter(project => project.project_id !== action.payload),
        isUpdating: false
      };
    case DELETE_PROJECT_FAIL:
      return {
        ...state,
        isUpdating: false,
        err: action.payload
      };

    default:
      return state;
  }
};

export default DashboardReducer;