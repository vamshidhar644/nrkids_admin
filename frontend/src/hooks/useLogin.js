import { useState } from 'react';
import { UseAuthContext } from './useAuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useLogin = () => {
  const [loginerror, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = UseAuthContext();

  // const BACKEND_URL = process.env.BACKEND_URL;
  const BACKEND_URL = 'http://localhost:4001';

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${BACKEND_URL}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
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
      toast.success('Login Successful', {
        position: 'bottom-center',
        autoClose: 1000, // 2 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });
    }
  };
  return { login, isLoading, loginerror };
};
