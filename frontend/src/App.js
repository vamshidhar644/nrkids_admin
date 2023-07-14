import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { UseAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  const { user } = UseAuthContext();
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
