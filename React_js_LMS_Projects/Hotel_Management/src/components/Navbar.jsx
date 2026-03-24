import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login, logout, initAuthListener, checkDemoSession } from '../store/thunks';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);

  const [showLogin, setShowLogin] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  useEffect(() => { 
    dispatch(initAuthListener()); 
    dispatch(checkDemoSession());
  }, [dispatch]);
  
  useEffect(() => { if (isAuthenticated) setShowLogin(false); }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginData.email, loginData.password));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-white shadow border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between h-16 items-center">
        <Link to="/" className="text-xl font-bold text-indigo-600">Hotel Booking</Link>
        
        <div className="flex gap-2">
          <Link to="/" className="px-4 py-2 text-gray-600 hover:text-indigo-600">Rooms</Link>
          <Link to="/reservations/new" className="px-4 py-2 text-gray-600 hover:text-indigo-600">Book Now</Link>
          {isAuthenticated && <Link to="/reservations" className="px-4 py-2 text-gray-600 hover:text-indigo-600">My Reservations</Link>}
        </div>

        <div>
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700">{user?.email}</span>
              <button onClick={handleLogout} className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded">Sign Out</button>
            </div>
          ) : (
            <button onClick={() => setShowLogin(true)} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Sign In</button>
          )}
        </div>
      </div>

      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowLogin(false)}>
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-4 p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-4">Sign In</h2>
            <p className="text-sm text-gray-500 mb-3">Use demo@hotel.com / demo123 for demo</p>
            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
            <form onSubmit={handleLogin} className="space-y-3">
              <input type="email" value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})} placeholder="Email" required className="w-full p-2 border rounded" />
              <input type="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} placeholder="Password" required className="w-full p-2 border rounded" />
              <button type="submit" disabled={loading} className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">{loading ? 'Signing in...' : 'Sign In'}</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
