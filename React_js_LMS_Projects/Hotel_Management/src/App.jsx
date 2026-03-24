import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import RoomList from './components/RoomList';
import RoomDetails from './components/RoomDetails';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const { rooms } = useSelector((state) => state.rooms);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<RoomList />} />
          <Route path="/rooms/:id" element={<RoomDetails rooms={rooms} />} />
          <Route path="/reservations/new" element={<ReservationForm />} />
          <Route
            path="/reservations"
            element={
              <PrivateRoute>
                <ReservationList />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
