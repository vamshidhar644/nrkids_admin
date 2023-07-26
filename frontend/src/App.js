import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { UseAuthContext } from './hooks/useAuthContext';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';

function App() {
  const { user } = UseAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/" 
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />

          {/* <Route path="/orders" element={<Orders />} /> */}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
