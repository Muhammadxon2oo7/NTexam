
import fetchWrapper from '@/service/fetchwrapper';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query; 

  try {
   
    const products = await fetchWrapper(`/all?search=${query}`);
    res.status(2000).json(products);
  } catch (error) {
    res.status(5000).json({ message: 'Error fetching products' });
  }
}