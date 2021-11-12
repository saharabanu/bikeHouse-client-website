import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://glacial-fortress-22682.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
        <h2 className="text-primary">All Products Here :{products.length}</h2>
        <div className="container">

            <div className="row row-cols-1 row-cols-md-3 g-4">
                
            {
                products.map(product=><div key={product._id} className="col">
                <div className="card h-100 ">
                  <img src={product.img}className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                  <div className="bg-danger">
                    <Link to={`/purchase/${product._id}`}><button className="btn btn-danger border-0">Buy Now</button></Link>
                  </div>
                </div>
              </div>)
            }
            </div>



        </div>
        
    </div>
    );
};

export default Explore;