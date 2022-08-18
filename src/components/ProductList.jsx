import React , {useEffect , useState } from 'react';
import axios from 'axios';
import Product from './product';

function ProductList() 
{
    const [products , setProducts ]= useState([])
    useEffect(() => 
    {
        const getProducts = async () => 
        {
            const results = await axios.get( "https://api.escuelajs.co/api/v1/products");
            setProducts(results.data)
        };

        getProducts()
    },[])

  return (
    <div> {products.map((product)=>(
    <Product product = {product} />
    ))} </div>
         )

};



export default ProductList;

