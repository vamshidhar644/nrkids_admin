import React, { useEffect, useState } from 'react';
import { HandleMongo } from '../../helpers/HandleMongo';
import { UseAuthContext } from '../../hooks/useAuthContext';
import './Orders.css';
import Status from './Status';
import Items from './Items';
import OrderDetails from './OrderDetails';

const Orders = () => {
  const { user } = UseAuthContext();
  const { fetchOrders, orders } = HandleMongo();
  const [statusss, setStatus] = useState();
  const [filteredOrders, setFilteredOrder] = useState([]);
  const buttons = [
    { title: 'Yet to confirm' },
    { title: 'Confirm Order' },
    { title: 'Reject Order' },
    { title: 'Delivered' },
    { title: 'Paid' },
  ];

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [statusss]);

  const filter = (stat) => {
    setStatus(stat);
    if (orders) {
      const filteredorders = orders.filter((order) => order.status === stat);

      setFilteredOrder(filteredorders);
    }
  };

  const handlefetch = () => {
    fetchOrders();
  };

  return (
    <div className="main-container">
      <div className="orders__header">
        <h2>Orders </h2>
        <div className="filter__buttons">
          {buttons.map((buttons, i) => {
            return (
              <button
                onClick={() => filter(buttons.title)}
                key={i}
                className={`${statusss === buttons.title ? 'active' : ''}`}
              >
                {buttons.title}
              </button>
            );
          })}
          <input type="text" placeholder="Order ID" />
          <input type="date" className="custom-date-input" />
        </div>
      </div>
      <div className="orders__container">
        {filteredOrders &&
          filteredOrders.map((order, i) => {
            return (
              <div className="order-card" key={i}>
                <Items items={order.items} />
                <OrderDetails order={order} />
                <Status
                  orderId={order._id}
                  onSubmit={handlefetch}
                  OrderStatus={order.status}
                  deliveryCost={order.shippingCost}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Orders;
