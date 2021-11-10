import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/products',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('product added successfully')
            }
            console.log(data)
            reset();
        })
    }
    return (
        <div className="add-product">
            <h2>Please Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
             <input {...register("name")} placeholder="name" />
            <textarea {...register("description")} placeholder="description"/>
            <input type="number" {...register("price")} placeholder="price"/>
            <input {...register("img")} placeholder="img url" />
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;