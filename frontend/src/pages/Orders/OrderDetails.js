import React from 'react';

import './OrderDetails.css';
import Invoice from './Invoice';
import Status from './Status';
import Items from './Items';

const OrderDetails = ({ filteredOrders, handlefetch }) => {
  return (
    <div className="orders__container">
      {filteredOrders ? (
        <div className="accordion">
          {filteredOrders.map((order, index) => (
            <div className="accordion-item">
              <div className="accordion-title">
                <p className="m-0 small">order ID - {order._id}</p>
                <p className="m-0">{order.status}</p>
              </div>
              <div className="accordion-content">
                <Items orderdata={order} />
                <Invoice order={order} />
                <Status
                  orderId={order._id}
                  OrderStatus={order.status}
                  onSubmit={handlefetch}
                  deliveryCost={order.shippingCost}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default OrderDetails;
