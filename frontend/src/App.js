import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { UseAuthContext } from './hooks/useAuthContext';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';

function App() {
  const { user } = UseAuthContext();

  return (
    <div className="App">
      <BrowserRouter basename="nrkids_admin">
        <Routes>
          <Route
            path="/"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
