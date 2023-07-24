import { useState } from 'react';
import { UseAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';

export const HandleMongo = () => {
  const { user } = UseAuthContext();
  const [orders, setOrders] = useState();
  const BACKEND_URL = 'http://localhost:4001';
  // O R D E R S  D A T A . . . . . . .
  const fetchOrders = async () => {
    if (user) {
      const response = await fetch(`${BACKEND_URL}/api/admin/orders`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (!response.ok) {
        console.log('something wrong');
      }
      if (response.ok) {
        setOrders(json);
      }
    }
  };

  const updateOrder = async (orderId, shippingCost, status) => {
    console.log(orderId, shippingCost, status);
    const response = await fetch(`${BACKEND_URL}/api/admin/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ shippingCost, status }),
    });
    // const json = await response.json();

    if (!response.ok) {
      console.log('something wrong');
    }
    if (response.ok) {
      // save the user to local storage
      // navigate('/your-bag');
      // alert('Updated');
    }
  };

  return {
    fetchOrders,
    orders,
    updateOrder,
  };
};
