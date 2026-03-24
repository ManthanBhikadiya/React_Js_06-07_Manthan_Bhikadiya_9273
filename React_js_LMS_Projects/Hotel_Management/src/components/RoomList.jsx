import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRooms } from '../store/thunks';

const RoomList = () => {
  const dispatch = useDispatch();
  const { rooms, loading, error } = useSelector((state) => state.rooms);

  const [sortBy, setSortBy] = useState('type');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterType, setFilterType] = useState('all');
  const [filterAvailability, setFilterAvailability] = useState('all');
  const [filterFeature, setFilterFeature] = useState('');

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const filteredAndSortedRooms = useMemo(() => {
    let result = [...rooms];

    if (filterType !== 'all') result = result.filter((r) => r.type === filterType);
    if (filterAvailability !== 'all') result = result.filter((r) => filterAvailability === 'available' ? r.available : !r.available);
    if (filterFeature) result = result.filter((r) => r.features.some((f) => f.toLowerCase().includes(filterFeature.toLowerCase())));

    result.sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'type') comparison = a.type.localeCompare(b.type);
      else if (sortBy === 'price') comparison = a.price - b.price;
      else if (sortBy === 'name') comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [rooms, sortBy, sortOrder, filterType, filterAvailability, filterFeature]);

  if (loading) return <div className="flex justify-center items-center min-h-screen"><div className="w-10 h-10 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div></div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div>
      <div className="bg-indigo-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Room</h1>
        <p className="text-xl">Discover comfortable and affordable accommodations</p>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-4 gap-4">
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="p-2 border rounded">
              <option value="all">All Types</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
              <option value="family">Family</option>
            </select>
            <select value={filterAvailability} onChange={(e) => setFilterAvailability(e.target.value)} className="p-2 border rounded">
              <option value="all">All</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
            <input type="text" value={filterFeature} onChange={(e) => setFilterFeature(e.target.value)} placeholder="Search feature..." className="p-2 border rounded" />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="p-2 border rounded">
              <option value="type">Room Type</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
          <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            {sortOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {filteredAndSortedRooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow hover:shadow-lg">
              <div className={`p-2 ${room.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {room.available ? '✓ Available' : '✕ Booked'}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                <span className="px-2 py-1 bg-gray-200 rounded text-sm">{room.type}</span>
                <p className="text-2xl font-bold text-indigo-600 mt-2">₹{room.price}/night</p>
                <p className="text-gray-600 mt-2">{room.description}</p>
                <div className="flex gap-2 mt-3">
                  <Link to={`/rooms/${room.id}`} className="flex-1 text-center py-2 border rounded hover:bg-gray-50">View</Link>
                  <Link to={`/reservations/new?roomId=${room.id}`} className={`flex-1 text-center py-2 rounded ${room.available ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-300'}`}>
                    {room.available ? 'Book' : 'Unavailable'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAndSortedRooms.length === 0 && <p className="text-center text-gray-500 mt-8">No rooms match your filters</p>}
      </div>
    </div>
  );
};

export default RoomList;
