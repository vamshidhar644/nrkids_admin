import { useState } from 'react';
import { UseAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';

export const HandleMongo = () => {
  const { user } = UseAuthContext();
  const [orders, setOrders] = useState();

  // O R D E R S  D A T A . . . . . . .
  const fetchOrders = async () => {
    if (user) {
      axios
        .get(`/api/admin/orders`)
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.error('Error fetching document:', error);
        });
    }
  };

  const updateOrder = async (orderId, shippingCost, status) => {
    console.log(orderId, shippingCost, status);
    const response = await fetch(`/api/admin/orders/${orderId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ shippingCost, status }),
    });
    // const json = await response.json();

    if (!response.ok) {
      console.log('something wrong');
    }
    if (response.ok) {
      // save the user to local storage
      // navigate('/your-bag');
      console.log('Success');
    }
  };

  return {
    fetchOrders,
    orders,
    updateOrder,
  };
};
