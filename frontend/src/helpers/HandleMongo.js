import { useState } from 'react';
import { UseAuthContext } from '../hooks/useAuthContext';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const response = await fetch(`${BACKEND_URL}/api/admin/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ shippingCost, status }),
    });
    const json = await response.json();

    if (!response.ok) {
      toast.error(`${json.error}`, {
        position: 'bottom-center',
        autoClose: 1000, // 2 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (response.ok) {
      toast.success('Updated', {
        position: 'bottom-center',
        autoClose: 1000, // 2 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return {
    fetchOrders,
    orders,
    updateOrder,
  };
};
