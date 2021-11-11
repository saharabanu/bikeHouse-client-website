import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id,name,img}= product;
    return (
        <div className="col">
        <div className="card h-100 ">
          <img src={img}className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            
          </div>
          <div className="bg-danger">
            <Link to={`/purchase/${_id}`}><button className="btn btn-danger border-0">Buy Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Product;