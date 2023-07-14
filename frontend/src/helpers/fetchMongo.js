import { useState } from 'react';
import { UseAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';

export const FetchMongo = () => {
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

  return {
    fetchOrders,
    orders,
  };
};
