import {  useState } from 'react';

const FilterSanity = () => {
  const [filteredItems, setFilteredItems] = useState();
  const filtersanity = (items, Products) => {
    const sanitycart = [];
    items.forEach((Mitem) => {
      if (Products) {
        Products.forEach((Sitem) => {
          if (Mitem.productId === Sitem.productId) {
            sanitycart.push(Sitem);
          }
        });
      }
    });
    setFilteredItems(sanitycart);
  };
  return { filtersanity, filteredItems };
};

export default FilterSanity;
