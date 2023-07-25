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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="menu-icon" onClick={handleToggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="list-unstyled">
          <li
            onClick={() => {
              setPath('home');
              setIsSidebarOpen(false);
            }}
            className={`li ${path === 'home' ? 'active' : ''}`}
          >
            <p>Home</p>
          </li>
          <li
            onClick={() => {
              setPath('orders');
              setIsSidebarOpen(false);
            }}
            className={`li ${path === 'orders' ? 'active' : ''}`}
          >
            <p>Orders</p>
          </li>
          <li
            onClick={() => {
              setPath('profile');
              setIsSidebarOpen(false);
            }}
            className={`li ${path === 'profile' ? 'active' : ''}`}
          >
            <p>Change Password</p>
          </li>
          <li
            onClick={() => {
              setIsSidebarOpen(false);
              handleClick(); // Assuming handleClick is the function for Logout
            }}
            className="li"
          >
            <p>Logout</p>
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
