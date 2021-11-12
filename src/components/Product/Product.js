import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';

const Product = ({product}) => {
    const {_id,name,img,description}= product;
    return (
        <div className="col">
        <div className="card h-100 product">
          <img src={img}className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="p-3">{description}</p>
          </div>
          <div className="bg-danger">
            <Link to={`/purchase/${_id}`}><button className="btn btn-danger border-0">Buy Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Product;