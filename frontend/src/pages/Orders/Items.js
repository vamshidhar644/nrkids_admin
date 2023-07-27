import React, { useEffect } from 'react';
import FilterSanity from '../../helpers/FilterSanity';
import { FetchSanity } from '../../helpers/FetchSanity';
import FetchImageUrl from '../../helpers/FetchImageUrl';

const Items = ({ orderdata }) => {
  const { filtersanity, filteredItems } = FilterSanity();

  const { fetchAllProducts, Products } = FetchSanity();

  const { getImageUrl } = FetchImageUrl();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (orderdata.items && Products) {
      filtersanity(orderdata.items, Products);
    }
  }, [Products]);

  return (
    <div>
      <h4
        style={{ marginBlockStart: '1em', marginTop: '0px', fontWeight: '600' }}
      >
        Products ({orderdata && orderdata.items.length} items)
      </h4>
      <hr />
      <div className="items-container">
        {filteredItems
          ? orderdata.items.map((item, i) => {
              return (
                <div>
                  <div className="item-info">
                    {/* <div className="item-image">
                      <img
                        src={getImageUrl(filteredItems[i].images[0] || null)}
                        alt=""
                      />
                    </div> */}
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
