import React, { useEffect } from 'react';
import { HandleMongo } from '../../helpers/HandleMongo';
import { UseAuthContext } from '../../hooks/useAuthContext';
import './Home.css';

const Home = () => {
  const { user } = UseAuthContext();
  const { fetchOrders, orders } = HandleMongo();

  console.log(orders);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="home__main">
      <div className="home_content__main">
        <div className='orders__header'>
          <strong>Orders Data</strong>
        </div>
        <hr />
        <div className="order__row">
          <b>Orders Placed</b>
          <b>32</b>
        </div>
        <hr />
        <div className="order__row">
          <h4>Orders Confirmed</h4>
          <h5>12</h5>
        </div>
        <hr />
        <div className="order__row">
          <h4>Orders Rejected</h4>
          <h5>4</h5>
        </div>
        <hr />
        <div className="order__row">
          <h4>Orders Delivered</h4>
          <h5>10</h5>
        </div>
        <hr />
        <div className="order__row">
          <h4>Orders Paid</h4>
          <h5>6</h5>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
