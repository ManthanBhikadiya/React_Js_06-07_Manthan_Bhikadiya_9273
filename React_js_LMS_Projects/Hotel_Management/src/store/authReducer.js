import * as types from './actionTypes';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case types.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case types.LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default authReducer;
