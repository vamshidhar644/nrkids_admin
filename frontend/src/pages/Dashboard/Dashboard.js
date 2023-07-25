import React, { useState } from 'react';
import './Dashboard.css';
import { useLogout } from '../../hooks/useLogout';
import Orders from '../Orders/Orders';
import './Sidenavbar.css';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';

const Dashboard = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  const [path, setPath] = useState('home');

  return (
    <div className="app-container">
      <div className="sidebar">
        <ul className="list-unstyled">
          <li
            onClick={() => setPath('home')}
            className={`li ${path === 'home' ? 'active' : ''}`}
          >
            <p>Home</p>
          </li>
          <li
            onClick={() => setPath('orders')}
            className={`li ${path === 'orders' ? 'active' : ''}`}
          >
            <p>Orders</p>
          </li>
          <li
            onClick={() => setPath('profile')}
            className={`li ${path === 'profile' ? 'active' : ''}`}
          >
            <p>Change Password</p>
          </li>
          <li onClick={handleClick} className="li">
            <p to="/login">Logout</p>
          </li>
        </ul>
      </div>
      <div className="main-content">
        {path === 'home' ? <Home /> : null}
        {path === 'orders' ? <Orders /> : null}
        {path === 'profile' ? <Profile /> : null}
      </div>
    </div>
  );
};

export default Dashboard;
