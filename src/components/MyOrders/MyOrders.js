import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth()
    const [orders, setOrders] = useState([]);
    
    const email = user?.email;
    useEffect(() => {
        fetch(`https://glacial-fortress-22682.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [email]);

// Delete Order

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
        const url = `https://glacial-fortress-22682.herokuapp.com/${id}`
        fetch(url, {
            method: "DELETE",
            headers: { "content-type": "application.json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are You Sure To DELETE')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
        }
    }
    return (
        <div>
            <h1 className="pt-4">My Orders Are Here:{orders.length}</h1>
            <div className="row container text-center">
                {
                    orders?.map(order =><div key={order._id} className="col-md-6 col-lg-4">
                        
                    <div className=" bg-light bg-gradient  mb-3">
                        <img  className="w-50 h-50"src={order?.img} alt="" />
                        <h4>Address : {order?.userAddress}</h4>
                        <h4>Phone : {order?.phone}</h4>
                        <p >{order?.email}</p>
                        <h5>{order?.name}</h5>
                        
                        <h5>${order?.price}</h5>
                        
                        <br />
                      <button className="btn btn-danger mb-2" onClick={()=>handleDelete(order._id)}>Delete</button>
                      <Link to="/"><button className="btn btn-success px-4 mb-2">Go Back</button></Link>
                    </div>
                  </div>
                       
                    )
                }
            </div>

        </div>
    );
};




export default MyOrders;