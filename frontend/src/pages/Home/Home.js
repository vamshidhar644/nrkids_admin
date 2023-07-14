import React from 'react';
import { useLogout } from '../../hooks/useLogout';
const Home = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <p onClick={handleClick}>logout</p>
    </div>
  );
};

export default Home;
