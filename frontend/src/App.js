import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { UseAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Orders from './pages/Orders/Orders';

function App() {
  const { user } = UseAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />

          <Route
            path="/orders"
            element={user ? <Orders /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
