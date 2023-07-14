import { useState } from 'react';
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'dkv2w16f',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-20',
});

export const FetchSanity = () => {
  const [Products, setProducts] = useState();

  const fetchAllProducts = async () => {
    try {
      const AllProducts = await client.fetch('*[_type == "categories"]');
      setProducts(AllProducts);
    } catch (error) {
      console.error('Error fetching first image:', error);
    }
  };

  return { fetchAllProducts, Products };
};
