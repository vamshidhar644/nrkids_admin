import React, { useEffect } from 'react';
import { HandleMongo } from '../../helpers/HandleMongo';
import { UseAuthContext } from '../../hooks/useAuthContext';
import './Orders.css';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import Items from './Items';
import Status from './Status';

const Orders = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  const { user } = UseAuthContext();
  const { fetchOrders, orders } = HandleMongo();

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="main-container">
      <div className="orders-header">
        <h2>Orders </h2>
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
              <div className="order-card" key={i}>
                <Items items={order.items} />
                <div className="order-details">
                  <h3>#{order._id}</h3>
                  <h5>{formattedDate}</h5>
                  <h2>{order.orderedName}</h2>
                  <p>{order.orderedEmail}</p>
                  <p>{order.orderedAddress}</p>
                  <p>
                    {order.orderedLocality}-<span>{order.orderedPincode}</span>
                  </p>
                  <p>{order.orderedState}</p>
                  <p className="mt-2">Mobile {order.orderedMobile}</p>
                  <p>Shipping Cost: ₹ {order.shippingCost}/-</p>
                  <p>Subtotal: ₹ {order.totalAmount}/-</p>

                  <h2>
                    Total Amount: ₹ {order.shippingCost + order.totalAmount}/-
                  </h2>
                </div>
                <Status
                  orderId={order._id}
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
