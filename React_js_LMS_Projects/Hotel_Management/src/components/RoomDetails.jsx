import { useParams, Link } from 'react-router-dom';

const RoomDetails = ({ rooms }) => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === parseInt(id));

  if (!room) return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold mb-4">Room not found</h2>
      <Link to="/" className="px-4 py-2 bg-indigo-600 text-white rounded">Back to Rooms</Link>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-indigo-600 mb-4 block">← Back to Rooms</Link>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-indigo-600 text-white p-8">
          <h1 className="text-3xl font-bold">{room.name}</h1>
          <span className="bg-white/20 px-3 py-1 rounded">{room.type} Room</span>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p className="text-gray-600 mb-4">{room.description}</p>
              <p className="text-3xl font-bold text-indigo-600">₹{room.price}<span className="text-base font-normal">/night</span></p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-2">Features</h2>
              <ul className="space-y-2">
                {room.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <span className={`inline-block mt-4 px-4 py-2 rounded ${room.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {room.available ? '✓ Available' : '✕ Not Available'}
              </span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            {room.available ? (
              <Link to={`/reservations/new?roomId=${room.id}`} className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">Book This Room</Link>
            ) : (
              <button disabled className="px-6 py-3 bg-gray-300 text-gray-500 rounded">Currently Not Available</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
