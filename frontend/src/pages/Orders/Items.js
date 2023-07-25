import React from 'react';

const Items = ({ items }) => {
  return (
    <div className="items-container">
      {items &&
        items.map((item, i) => {
          console.log(item);
          return (
            <div className="ordered-item" key={i}>
              <div className="item-info">
                <p>
                  id - <b>{item.productId}</b>
                </p>
                <p>Quantity: {items[i].quantity}</p>
                <p>Size: {items[i].size}</p>
                <p>Price: ₹ {items[i].price}.00</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Items;
