import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations, fetchRooms, updateReservation, cancelReservation } from '../store/thunks';

const ReservationList = () => {
  const dispatch = useDispatch();
  const { reservations, loading, error } = useSelector((state) => state.reservations);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { rooms } = useSelector((state) => state.rooms);
  
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    dispatch(fetchReservations());
    dispatch(fetchRooms());
  }, [dispatch]);

  const filteredReservations = reservations.filter((res) => {
    const statusMatch = filterStatus === 'all' || res.status === filterStatus;
    const userMatch = !res.userId || res.userId === user?.uid || res.userId === 'demo';
    return statusMatch && userMatch;
  });
  const getRoomName = (roomId) => rooms.find((r) => r.id === roomId)?.name || 'Unknown';
  const getStatusClass = (status) => ({ confirmed: 'bg-green-100 text-green-800', cancelled: 'bg-red-100 text-red-800', pending: 'bg-yellow-100 text-yellow-800' }[status] || 'bg-gray-100');

  if (loading) return <div className="flex justify-center items-center min-h-screen"><div className="w-10 h-10 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div></div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white p-6 shadow mb-6">
        <h1 className="text-2xl font-bold">My Reservations</h1>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="mt-2 p-2 border rounded">
          <option value="all">All</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {filteredReservations.length === 0 ? (
          <p className="text-center text-gray-500">No reservations found</p>
        ) : (
          filteredReservations.map((reservation) => (
            <div key={reservation.id} className="bg-white rounded-lg shadow p-6 mb-4">
              {editingId === reservation.id ? (
                <div className="grid grid-cols-5 gap-2">
                  <input type="text" value={editData.guestName} onChange={(e) => setEditData({...editData, guestName: e.target.value})} className="p-2 border rounded" />
                  <input type="email" value={editData.email} onChange={(e) => setEditData({...editData, email: e.target.value})} className="p-2 border rounded" />
                  <input type="date" value={editData.checkIn} onChange={(e) => setEditData({...editData, checkIn: e.target.value})} className="p-2 border rounded" />
                  <input type="date" value={editData.checkOut} onChange={(e) => setEditData({...editData, checkOut: e.target.value})} className="p-2 border rounded" />
                  <div className="flex gap-2">
                    <button onClick={() => { dispatch(updateReservation(reservation.id, editData)); setEditingId(null); }} className="px-3 py-1 bg-green-500 text-white rounded">Save</button>
                    <button onClick={() => setEditingId(null)} className="px-3 py-1 bg-gray-200 rounded">Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">{reservation.guestName}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusClass(reservation.status)}`}>{reservation.status}</span>
                    <p className="text-gray-600">{reservation.email}</p>
                    <p className="text-gray-600">Room: {getRoomName(reservation.roomId)}</p>
                    <p className="text-gray-600">{reservation.checkIn} to {reservation.checkOut}</p>
                    <p className="text-indigo-600 font-bold">Total: ₹{reservation.totalPrice}</p>
                  </div>
                  {isAuthenticated && reservation.status !== 'cancelled' && (
                    <div className="flex gap-2">
                      <button onClick={() => { setEditingId(reservation.id); setEditData(reservation); }} className="px-3 py-1 border rounded hover:bg-gray-50">Edit</button>
                      <button onClick={() => { if (confirm('Cancel this reservation?')) dispatch(cancelReservation(reservation.id, reservation.roomId)); }} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Cancel</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReservationList;
