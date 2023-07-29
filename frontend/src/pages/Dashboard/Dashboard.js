import React, { useState } from 'react';
import './Dashboard.css';
import { useLogout } from '../../hooks/useLogout';
import Orders from '../Orders/Orders';
import './Sidenavbar.css';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';
import { HiMenu, HiOutlineMenuAlt2 } from 'react-icons/hi';
import { UseAuthContext } from '../../hooks/useAuthContext';

const Dashboard = () => {
  const { user } = UseAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  const [isActive, setIsActive] = useState(false);
  const [disableScrolling, setDisableScrolling] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
    setDisableScrolling(!disableScrolling);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [path, setPath] = useState('home');

  return (
    <div className="app-container">
      <div className="app__header">
        {isActive ? (
          <HiMenu className="nav__icon" id="ham-menu" onClick={toggleNavbar} />
        ) : (
          <HiOutlineMenuAlt2
            className="nav__icon"
            id="ham-menu"
            onClick={toggleNavbar}
          />
        )}
        <div className="user__name">
          <p>{user.firstName}</p>
        </div>
      </div>
      <div className={`sidebar  ${isActive ? 'active_nav' : ''}`}>
        <div className="app__header">
          {isActive ? (
            <HiMenu
              className="nav__icon"
              id="ham-menu"
              onClick={toggleNavbar}
            />
          ) : (
            <HiOutlineMenuAlt2
              className="nav__icon"
              id="ham-menu"
              onClick={toggleNavbar}
            />
          )}
          <div className="user__name">
            <p>{user.firstName}</p>
          </div>
        </div>
        <ul className="list-unstyled">
          <li className="user__name">
            <p>{user.firstName}</p>
          </li>
          <li
            onClick={() => setPath('home')}
            className={`li ${path === 'home' ? 'active' : ''}`}
          >
            <p onClick={toggleNavbar}>Home</p>
          </li>
          <li
            onClick={() => setPath('orders')}
            className={`li ${path === 'orders' ? 'active' : ''}`}
          >
            <p onClick={toggleNavbar}>Orders</p>
          </li>
          <li
            onClick={() => setPath('profile')}
            className={`li ${path === 'profile' ? 'active' : ''}`}
          >
            <p onClick={toggleNavbar}>Change Password</p>
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
