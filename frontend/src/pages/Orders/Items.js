import React from 'react';

const Items = ({ orderdata }) => {
  return (
    <div>
      <h4
        style={{ marginBlockStart: '1em', marginTop: '0px', fontWeight: '600' }}
      >
        Products
      </h4>
      <hr />
      <div className="items-container">
        {orderdata.items
          ? orderdata.items.map((item, i) => {
              return (
                <div>
                  <div className="item-info">
                    <p>
                      ID: <b>{item.productId}</b>
                    </p>
                    <p>Size: {item.size}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>₹ {item.price}.00</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Items;
