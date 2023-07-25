import React, { useEffect } from 'react';
import { HandleMongo } from '../../helpers/HandleMongo';
import { UseAuthContext } from '../../hooks/useAuthContext';
import './Home.css';

const Home = () => {
  const { user } = UseAuthContext();
  const { fetchOrders, orders } = HandleMongo();

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  function countStatusElements(orders) {
    const statusCounts = {};
    if (orders) {
      orders.forEach((element) => {
        const status = element.status;
        statusCounts[status] = (statusCounts[status] || 0) + 1;
      });
    }

    return statusCounts;
  }

  const result = countStatusElements(orders);

  return (
    <div className="home__main">
      <div className="home_content__main" style={{ width: '50%' }}>
        <div className="orders__header">
          <strong>Orders Data</strong>
        </div>
        <hr />
        <div className="order__row">
          <b>Orders Placed</b>
          <b>32</b>
        </div>
        <hr />
        <div className="order__row">
          <h4>Yet to Confirm</h4>
          <h5>{result['Yet to confirm']}</h5>
        </div>
        <hr />
        <div className="order__row">
          <h4>Orders Confirmed</h4>
          <h5>{result['Confirm Order']}</h5>
        </div>
        <hr />
        <div className="order__row">
          <h4>Orders Rejected</h4>
          <h5>{result['Reject Order']}</h5>
        </div>
        <hr />
        <div className="order__row">
          <h4>Orders Delivered</h4>
          <h5>{result['Delivered']}</h5>
        </div>
        <hr />
        <div className="order__row">
          <h4>Orders Paid</h4>
          <h5>{result['Paid']}</h5>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
