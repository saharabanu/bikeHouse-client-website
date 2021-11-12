import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);


    // Delete Order
   const handleProductDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if(proceed){
    const url = `http://localhost:5000/products${id}`
    fetch(url, {
        method: "DELETE",
        headers: { "content-type": "application.json" }
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                alert('DELETE successfully')
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            }
        })
    }
}
    return (
        <div>
        <h2 className="text-primary">All Products Here :{products.length}</h2>
        <div className="container">

            <div className="row row-cols-1 row-cols-md-4 g-4">
                
            {
                products.map(product=><div className="col">
                <div className="card h-100 ">
                  <img src={product.img}className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                  <div className="bg-danger">
                    <button onClick={()=> handleProductDelete(product._id)} className="btn btn-danger border-0">Delete</button>
                  </div>
                </div>
              </div>)
            }
            </div>



        </div>
        
    </div>
    );
};

export default ManageProducts;
