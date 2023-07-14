import React, { useEffect } from 'react';
import { FetchSanity } from '../../helpers/FetchSanity';
import FilterSanity from '../../helpers/FilterSanity';
import FetchImageUrl from '../../helpers/FetchImageUrl';

const Items = ({ items }) => {
  const { fetchAllProducts, Products } = FetchSanity();
  const { filtersanity, filteredItems } = FilterSanity();
  const { getImageUrl } = FetchImageUrl();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (items && Products) {
      filtersanity(items, Products);
    }
  }, [Products]);

  if (filteredItems) {
    console.log(filteredItems);
  }
  return (
    <div>
      <div className="items-container">
        {items && filteredItems
          ? items.map((item, i) => {
              return (
                <div className="ordered-item" key={i}>
                  <div className="item-image">
                    <img src={getImageUrl(filteredItems[i].images[0])} alt="" />
                  </div>
                  <div className="item-info">
                    <p>{filteredItems && filteredItems[i].title}</p>
                    <p>Description</p>
                    <p>Quantity - {item.quantity}</p>
                    <p>Size - {item.size}</p>
                    <p>Price - {item.price}</p>
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
