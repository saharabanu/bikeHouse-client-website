import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://glacial-fortress-22682.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="products bg-light bg-gradient">
            <h2 className="text-primary">SELECT YOUR OWN BIKE</h2>
            <p>There are a lot of bicycles in our BikeHouse. Facinate, attarctive, and flavoures bicycle are wait for You.</p>
            <div className="container">

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    
                {
                    products.slice(0,6).map(product=><Product
                    key={product._id}
                    product={product}
                    
                    ></Product> )
                }
                </div>



            </div>
            
        </div>
    );
};

export default Products;