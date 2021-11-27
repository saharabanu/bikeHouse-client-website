import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";

const ManageAllOrders = () => {
    
    const [orders, setOrders] = useState([]);
  

  

    
  useEffect(() => {
    fetch("https://glacial-fortress-22682.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  
 
  


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

const handleApprove =(id)=>{
  const proceed = window.confirm('Are you sure to cofirm the order?');
  if(proceed){
    const url = `https://glacial-fortress-22682.herokuapp.com/orders/${id}`
    fetch(url, {
      method: "PUT",
        headers: { "content-type": "application.json" },
        body : JSON.stringify()
        

    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount){
        alert('Shipped completed')
      }
      
      console.log(data)})
  }
}



    return (
        <div className="container">
      <h1>All orders {orders.length}</h1>
      <div className="table-responsive">
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
              <button onClick={()=>handleApprove(order._id)} className="btn btn-success p-2">{order.status}</button>
              </td>
               
 
              <button onClick={()=>handleDelete(order._id)} className="btn bg-danger p-2">Delete</button> 
              
              <td>{order?.email}</td>
              
            </tr>
          </tbody>
        ))}
      </Table>
      </div>
    </div>
    );
};

export default ManageAllOrders;