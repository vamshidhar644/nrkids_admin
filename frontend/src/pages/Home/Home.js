import React from 'react';
import { useLogout } from '../../hooks/useLogout';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <div className="Main-Container">
      <div className="Home-container">
        <Link to="/orders" className="Home-box">
          Orders
        </Link>
        <div className="logout-container">
          <p className="logout" onClick={handleClick}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
