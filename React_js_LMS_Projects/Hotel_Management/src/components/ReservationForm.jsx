import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { fetchRooms, addReservation } from '../store/thunks';

const ReservationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roomIdParam = searchParams.get('roomId');

  const { rooms, loading } = useSelector((state) => state.rooms);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    roomId: roomIdParam ? parseInt(roomIdParam) : '',
    guestName: '',
    email: '',
    checkIn: '',
    checkOut: '',
  });
  const [error, setError] = useState('');

  useEffect(() => { 
    dispatch(fetchRooms()); 
  }, [dispatch]);

  const calculateTotal = () => {
    if (!formData.roomId || !formData.checkIn || !formData.checkOut) return 0;
    const room = rooms.find((r) => r.id === parseInt(formData.roomId));
    if (!room) return 0;
    const nights = Math.ceil((new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights * room.price : 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!isAuthenticated) return setError('Please sign in to make a reservation');
    if (!formData.roomId || !formData.guestName || !formData.email || !formData.checkIn || !formData.checkOut) return setError('Please fill in all fields');
    if (new Date(formData.checkIn) >= new Date(formData.checkOut)) return setError('Check-out must be after check-in');

    dispatch(addReservation({ ...formData, status: 'confirmed', totalPrice: calculateTotal() }));
    navigate('/reservations');
  };

  const availableRooms = loading ? [] : rooms.filter((r) => r.available);

  return (
    <div>
      <div className="bg-indigo-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Make a Reservation</h1>
        <p className="text-xl">Book your perfect stay in just a few steps</p>
      </div>

      <div className="max-w-lg mx-auto p-6">
        {!isAuthenticated && <div className="bg-yellow-100 p-4 rounded mb-4">Please <Link to="/" className="text-indigo-600 underline">sign in</Link> to make a reservation.</div>}
        {error && <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <label className="block mb-1">Select Room *</label>
            {loading ? (
              <p className="text-gray-500">Loading rooms...</p>
            ) : (
            <select name="roomId" value={formData.roomId} onChange={(e) => setFormData({ ...formData, roomId: parseInt(e.target.value) })} className="w-full p-2 border rounded">
              <option value="">Choose a room</option>
              {availableRooms.map((room) => <option key={room.id} value={room.id}>{room.name} - ₹{room.price}/night</option>)}
            </select>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Guest Name *</label>
            <input type="text" name="guestName" value={formData.guestName} onChange={(e) => setFormData({ ...formData, guestName: e.target.value })} className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email *</label>
            <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Check-in Date *</label>
            <input type="date" name="checkIn" value={formData.checkIn} onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })} min={new Date().toISOString().split('T')[0]} className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Check-out Date *</label>
            <input type="date" name="checkOut" value={formData.checkOut} onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })} className="w-full p-2 border rounded" />
          </div>
          {calculateTotal() > 0 && <div className="bg-gray-100 p-4 rounded mb-4"><p className="text-xl font-bold text-indigo-600">Total: ₹{calculateTotal()}</p></div>}
          <button type="submit" disabled={!isAuthenticated || availableRooms.length === 0 || loading} className="w-full py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:bg-gray-400">
            {loading ? 'Loading...' : (isAuthenticated ? 'Confirm Reservation' : 'Sign in to Reserve')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
