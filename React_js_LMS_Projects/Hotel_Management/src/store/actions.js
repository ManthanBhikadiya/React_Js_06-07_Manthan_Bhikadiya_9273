import * as types from './actionTypes';

export const fetchRoomsRequest = () => ({
  type: types.FETCH_ROOMS_REQUEST,
});

export const fetchRoomsSuccess = (rooms) => ({
  type: types.FETCH_ROOMS_SUCCESS,
  payload: rooms,
});

export const fetchRoomsFailure = (error) => ({
  type: types.FETCH_ROOMS_FAILURE,
  payload: error,
});

export const fetchReservationsRequest = () => ({
  type: types.FETCH_RESERVATIONS_REQUEST,
});

export const fetchReservationsSuccess = (reservations) => ({
  type: types.FETCH_RESERVATIONS_SUCCESS,
  payload: reservations,
});

export const fetchReservationsFailure = (error) => ({
  type: types.FETCH_RESERVATIONS_FAILURE,
  payload: error,
});

export const addReservationRequest = () => ({
  type: types.ADD_RESERVATION_REQUEST,
});

export const addReservationSuccess = (reservation) => ({
  type: types.ADD_RESERVATION_SUCCESS,
  payload: reservation,
});

export const addReservationFailure = (error) => ({
  type: types.ADD_RESERVATION_FAILURE,
  payload: error,
});

export const updateReservationRequest = () => ({
  type: types.UPDATE_RESERVATION_REQUEST,
});

export const updateReservationSuccess = (reservation) => ({
  type: types.UPDATE_RESERVATION_SUCCESS,
  payload: reservation,
});

export const updateReservationFailure = (error) => ({
  type: types.UPDATE_RESERVATION_FAILURE,
  payload: error,
});

export const deleteReservationRequest = () => ({
  type: types.DELETE_RESERVATION_REQUEST,
});

export const deleteReservationSuccess = (id) => ({
  type: types.DELETE_RESERVATION_SUCCESS,
  payload: id,
});

export const deleteReservationFailure = (error) => ({
  type: types.DELETE_RESERVATION_FAILURE,
  payload: error,
});

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: types.LOGOUT,
});
