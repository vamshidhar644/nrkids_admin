import React, { useEffect, useState } from 'react';
import './Status.css';
import { HandleMongo } from '../../helpers/HandleMongo';

const Status = ({ OrderStatus, orderId, deliveryCost, onSubmit }) => {
  const { updateOrder } = HandleMongo();
  const [shippingCost, setShippingCost] = useState(0);
  const [CheckStatus, setCheck] = useState();
  const [checkedIndex, setIndex] = useState();

  const status = [
    { title: 'Yet to confirm' },
    { title: 'Confirm Order' },
    { title: 'Reject Order' },
    { title: 'Delivered' },
    { title: 'Paid' },
  ];

  useEffect(() => {
    const checkedIndex = status.findIndex((item) => item.title === OrderStatus);
    setIndex(checkedIndex);
  }, [OrderStatus]);

  const handleSubmit = async () => {
    await updateOrder(orderId, shippingCost, CheckStatus);
    onSubmit();
  };

  const handleChange = (i) => {
    setCheck(status[i].title);
    const checkedIndex = status.findIndex(
      (item) => item.title === status[i].title
    );
    setIndex(checkedIndex);
  };

  return (
    <div>
      <h4
        style={{ marginBlockStart: '1em', marginTop: '0px', fontWeight: '600' }}
      >
        Order Status
      </h4>
      <hr />
      <div className="status-box">
        <p>Shipping Cost</p>
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
              return (
                <label key={i}>
                  <input
                    className="radio-input"
                    type="radio"
                    id={status.title}
                    checked={i === checkedIndex}
                    onChange={() => handleChange(i)}
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

      <div className="status-box submit" onClick={handleSubmit}>
        <p>Submit</p>
      </div>
    </div>
  );
};

export default Status;
