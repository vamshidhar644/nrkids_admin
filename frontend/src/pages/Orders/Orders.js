import React, { useEffect } from 'react';
import { FetchMongo } from '../../helpers/fetchMongo';
import { UseAuthContext } from '../../hooks/useAuthContext';
import './Orders.css';
import { Link } from 'react-router-dom';
import Items from './Items';

const Orders = () => {
  const { user } = UseAuthContext();
  const { fetchOrders, orders } = FetchMongo();

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);
  return (
    <div className="main-container">
      <div className="orders-header">
        <h2>Orders </h2>
        <div className="menu">
          <Link to="/">Home</Link>
          <p>Logout</p>
        </div>
      </div>
      <div className="order-container">
        {orders &&
          orders.map((order, i) => {
            const dateStr = order.orderedDate;
            const dateObj = new Date(dateStr);

            // Options for the date format
            const options = {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            };

            // Convert the date to the desired format
            const formattedDate = dateObj.toLocaleDateString(
              undefined,
              options
            );
            return (
              <>
                <div className="order-card" key={i}>
                  <div className="order-details">
                    <h5>{formattedDate}</h5>
                    <h2>{order.orderedName}</h2>
                    <p>{order.orderedEmail}</p>
                    <p>{order.orderedAddress}</p>
                    <p>
                      {order.orderedLocality}-
                      <span>{order.orderedPincode}</span>
                    </p>
                    <p>{order.orderedState}</p>
                    <p>Total amount: {order.totalAmount}</p>
                    <p className="mt-2">Mobile {order.orderedMobile}</p>
                  </div>
                  <Items items={order.items} />
                  
                </div>
                <hr />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Orders;
