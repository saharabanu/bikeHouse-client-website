import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const ManageAllOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
  const { register, handleSubmit } = useForm();

  const [status, setStatus] = useState("");
  const [orderId, setOrderId] = useState("");

  

    
  useEffect(() => {
    fetch("https://glacial-fortress-22682.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  
  const handleOrderId = (id) => {
    setOrderId(id);
    
  };
  


   // Delete Order
   const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if(proceed){
    const url = `https://glacial-fortress-22682.herokuapp.com/deleteOrder/${id}`
    fetch(url, {
        method: "DELETE",
        headers: { "content-type": "application.json" }
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                alert('DELETE successfully')
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            }
        })
    }
}



const onSubmit = (data) => {
   
    fetch(`https://glacial-fortress-22682.herokuapp.com/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setStatus(result));
  };
    return (
        <div className="container">
      <h1>All orders {orders.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Title</th>
            <th>Product Price</th>
            {/* <th>Image Link</th> */}
            <th>Status</th>
            <th>Action</th>
            <th>Email</th>
          </tr>
        </thead>
        {orders?.map((order, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{order.name}</td>
              <td>{order.price}</td>
              {/* <td>{order.img}</td> */}
             
              <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(order?._id)}
                    {...register("status")}
                  >
                    <option value={order?.status}>{order?.status}</option>
                    <option value="approve">approved</option>
                    <option value="done">Done</option>
                  </select>
                  <input type="submit" />
                </form>
              </td>
               

              <button onClick={()=>handleDelete(order._id)} className="btn bg-danger p-2">Delete</button>
              
              <td>{order?.email}</td>
              
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
    );
};

export default ManageAllOrders;