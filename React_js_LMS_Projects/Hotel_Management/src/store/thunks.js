import { loginRequest, loginSuccess, loginFailure, logout as logoutAction, fetchRoomsSuccess, fetchReservationsSuccess } from './actions';

const DEMO_USER = { email: 'demo@hotel.com', uid: 'demo-123' };

export const initAuthListener = () => (dispatch) => {
  dispatch(loginRequest());
  
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    dispatch(loginSuccess(JSON.parse(storedUser)));
  } else {
    dispatch(loginFailure(null));
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  
  try {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email);
    
    if (user && user.password === password) {
      const userData = { email: user.email, uid: user.id };
      localStorage.setItem('currentUser', JSON.stringify(userData));
      dispatch(loginSuccess(userData));
    } else if (!user && email && password) {
      const newUser = { id: 'user-' + Date.now(), email, password, name: email.split('@')[0] };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      const userData = { email: newUser.email, uid: newUser.id };
      localStorage.setItem('currentUser', JSON.stringify(userData));
      dispatch(loginSuccess(userData));
    } else {
      dispatch(loginFailure('Invalid email or password'));
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('currentUser');
  dispatch(logoutAction());
};

export const checkDemoSession = () => (dispatch) => {
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    dispatch(loginSuccess(JSON.parse(currentUser)));
  }
};

export const fetchRooms = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/rooms');
    if (!response.ok) throw new Error('Network response was not ok');
    const rooms = await response.json();
    dispatch(fetchRoomsSuccess(rooms));
  } catch (error) {
    console.error('Error fetching rooms:', error);
    const mockRooms = [
      { id: 1, name: 'Deluxe Ocean View', type: 'deluxe', price: 350, available: true, features: ['Ocean View', 'King Bed', 'Balcony', 'WiFi', 'Mini Bar'], description: 'Spacious room with stunning ocean views and premium amenities' },
      { id: 2, name: 'Standard Garden Room', type: 'standard', price: 100, available: true, features: ['Garden View', 'Queen Bed', 'WiFi', 'TV'], description: 'Comfortable room with garden views' },
      { id: 3, name: 'Executive Suite', type: 'suite', price: 400, available: true, features: ['City View', 'King Bed', 'Living Room', 'Jacuzzi', 'WiFi', 'Mini Bar', 'Room Service'], description: 'Luxurious suite with separate living area and premium services' },
      { id: 4, name: 'Family Room', type: 'family', price: 200, available: true, features: ['Pool View', '2 Queen Beds', 'WiFi', 'TV', 'Kitchenette'], description: 'Spacious room perfect for families' },
      { id: 5, name: 'Economy Single Room', type: 'standard', price: 800, available: true, features: ['City View', 'Single Bed', 'WiFi'], description: 'Affordable room for solo travelers' },
      { id: 6, name: 'Presidential Suite', type: 'suite', price: 1800, available: true, features: ['Panoramic View', 'King Bed', 'Living Room', 'Jacuzzi', 'Butler Service', 'WiFi', 'Mini Bar', 'Private Pool'], description: 'Ultimate luxury experience with exclusive amenities' }
    ];
    dispatch(fetchRoomsSuccess(mockRooms));
  }
};

export const fetchReservations = () => async (dispatch, getState) => {
  const { user } = getState().auth;
  const userId = user?.uid || 'demo';
  
  try {
    const response = await fetch(`http://localhost:3001/reservations?userId=${userId}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const reservations = await response.json();
    dispatch(fetchReservationsSuccess(reservations));
  } catch (error) {
    console.error('Error fetching reservations:', error);
    const storedReservations = localStorage.getItem('reservations');
    if (storedReservations) {
      const reservations = JSON.parse(storedReservations);
      dispatch(fetchReservationsSuccess(reservations));
    } else {
      const mockReservations = [
        { id: 1, roomId: 1, guestName: 'John Smith', email: 'john.smith@email.com', checkIn: '2026-04-01', checkOut: '2026-04-05', status: 'confirmed', totalPrice: 1000, userId: 'demo' },
        { id: 2, roomId: 3, guestName: 'Sarah Johnson', email: 'sarah.j@email.com', checkIn: '2026-04-10', checkOut: '2026-04-15', status: 'confirmed', totalPrice: 2250, userId: 'demo' }
      ];
      dispatch(fetchReservationsSuccess(mockReservations));
    }
  }
};

export const addReservation = (reservation) => async (dispatch, getState) => {
  const { user } = getState().auth;
  const reservationData = { 
    ...reservation, 
    userId: user?.uid || 'demo',
    createdAt: new Date().toISOString()
  };
  
  try {
    const response = await fetch('http://localhost:3001/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservationData),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    dispatch(fetchReservations());
  } catch (error) {
    console.error('Error adding reservation:', error);
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    reservationData.id = Date.now();
    reservationData.status = 'confirmed';
    reservations.push(reservationData);
    localStorage.setItem('reservations', JSON.stringify(reservations));
    dispatch(fetchReservations());
  }
};

export const updateReservation = (id, data) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/reservations/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    dispatch(fetchReservations());
  } catch (error) {
    console.error('Error updating reservation:', error);
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    const index = reservations.findIndex(r => r.id === id);
    if (index !== -1) {
      reservations[index] = { ...reservations[index], ...data };
      localStorage.setItem('reservations', JSON.stringify(reservations));
      dispatch(fetchReservations());
    }
  }
};

export const cancelReservation = (id, roomId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/reservations/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Network response was not ok');
    
    if (roomId) {
      await fetch(`http://localhost:3001/rooms/${roomId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ available: true }),
      });
    }
    
    dispatch(fetchReservations());
    dispatch(fetchRooms());
  } catch (error) {
    console.error('Error cancelling reservation:', error);
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    const index = reservations.findIndex(r => r.id === id);
    if (index !== -1) {
      reservations[index].status = 'cancelled';
      localStorage.setItem('reservations', JSON.stringify(reservations));
      dispatch(fetchReservations());
      dispatch(fetchRooms());
    }
  }
};
