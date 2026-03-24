import * as types from './actionTypes';

const initialState = {
  reservations: [],
  loading: false,
  error: null,
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RESERVATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_RESERVATIONS_SUCCESS:
      return {
        ...state,
        reservations: action.payload,
        loading: false,
      };
    case types.FETCH_RESERVATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_RESERVATION_SUCCESS:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case types.UPDATE_RESERVATION_SUCCESS:
      return {
        ...state,
        reservations: state.reservations.map((res) =>
          res.id === action.payload.id ? action.payload : res
        ),
      };
    case types.DELETE_RESERVATION_SUCCESS:
      return {
        ...state,
        reservations: state.reservations.filter(
          (res) => res.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reservationReducer;
