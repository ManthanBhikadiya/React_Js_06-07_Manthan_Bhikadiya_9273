import * as types from './actionTypes';

const initialState = {
  rooms: [],
  loading: false,
  error: null,
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ROOMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.payload,
        loading: false,
      };
    case types.FETCH_ROOMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default roomReducer;
