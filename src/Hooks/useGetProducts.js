import axios from 'axios';
import { useState, useEffect } from 'react';




const useGetProducts = () => {	
    const [products, setProducts] = useState([]);

    const [offset, setOffset] = useState(0)
  
    useEffect(async () => {
      const data = await fetchProducts(10, offset)
      setOffset(10)
      setProducts(data);
    }, [])

    const fetchProducts = async (limit, offset) => {
      const response = await axios(`http://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`);
      return response.data;
    }

    const loadMoreProducts = async () => {
      const data = await fetchProducts(10, offset)
      setOffset(offValue => offValue + 10)
      setProducts(productData => [
        ...productData,
        ...data
      ])
    }

    return {products, loadMoreProducts}
}

export default useGetProducts;