import React from 'react';

const Invoice = ({ order }) => {
  const dateStr = order.orderedDate;
  const dateObj = new Date(dateStr);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  // Convert the date to the desired format
  const formattedDate = dateObj.toLocaleDateString(undefined, options);
  return (
    <div>
      <h4
        style={{ marginBlockStart: '1em', marginTop: '0px', fontWeight: '600' }}
      >
        Invoice
      </h4>
      <hr />
      <h5>{formattedDate}</h5>
      <h2 style={{ margin: '0px' }}>{order.orderedName}</h2>
      <p className="userid">{order.userId}</p>
      <p>{order.orderedEmail}</p>
      <p>{order.orderedAddress}</p>
      <p>
        {order.orderedLocality}-<b>{order.orderedPincode}</b>
      </p>
      <p>{order.orderedState}</p>
      <p className="mt-2">Mobile {order.orderedMobile}</p>
      <div className="order__summary">
        <p>
          Sub Total: <span>₹ {order.totalAmount}.00</span>
        </p>
        <p>
          Delivery cost: <span>₹ {order.shippingCost}.00</span>
        </p>
        <hr />
        <p>
          <b>Total Amount</b>
          <b>₹ {order.totalAmount + order.shippingCost}.00</b>
        </p>
      </div>
    </div>
  );
};

export default Invoice;
