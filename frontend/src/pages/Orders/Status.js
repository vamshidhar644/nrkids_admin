import React, { useState } from 'react';
import './Status.css';
import { HandleMongo } from '../../helpers/HandleMongo';

const Status = ({ OrderStatus, orderId, deliveryCost }) => {
  const { updateOrder } = HandleMongo();
  const [shippingCost, setShippingCost] = useState(0);
  const [CheckStatus, setCheck] = useState(OrderStatus);

  const status = [
    { title: 'Yet to confirm' },
    { title: 'Confirm Order' },
    { title: 'Cancel Order' },
    { title: 'Delivered' },
  ];

  return (
    <div className="status-container">
      <div className="status-box delivery-cost">
        <input
          type="number"
          placeholder="Shipping Cost"
          defaultValue={deliveryCost}
          onChange={(e) => setShippingCost(e.target.value)}
        />
      </div>

      <div className="radio-inputs">
        {status
          ? status.map((statuss, i) => {
              const shouldCheckRadio = true; // Replace with your condition

              const checkedIndex = status.findIndex(
                (item) => shouldCheckRadio && item.title === CheckStatus
              );

              return (
                <label key={i}>
                  <input
                    className="radio-input"
                    type="radio"
                    id={status.title}
                    checked={i === checkedIndex}
                    onChange={() => setCheck(status[i].title)}
                  />
                  <span className="radio-tile">
                    <span className="radio-icon"></span>
                    <span className="radio-label">{statuss.title}</span>
                  </span>
                </label>
              );
            })
          : null}
      </div>

      <div
        className="status-box submit"
        onClick={() => updateOrder(orderId, shippingCost, CheckStatus)}
      >
        <p>Submit</p>
      </div>
    </div>
  );
};

export default Status;
