import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Purchase = () => {
    const {user} = useAuth();
    const {productId} = useParams();
    const [product,setProduct]= useState({})
    const { register, handleSubmit, reset } = useForm({ defaultValues: { email: user.email} });


    const [person, setPerson] = useState({});
   
    
    useEffect(()=>{
        fetch(`https://glacial-fortress-22682.herokuapp.com/products/${productId}`)
        .then(res=>res.json())
        .then(data=>{setProduct(data)})

    },[])
    
    const onSubmit = data => {
        
        data.status ='pending';

	let orders = { name:product.name,img:product.img,price:product.price,description:product.description };
        data = { ...data, ...orders};
        console.log(data)



        fetch('https://glacial-fortress-22682.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        )
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('your order has done successfuly')
                }
                
                setPerson(data)
            })

        data.image = person?.img;
        console.log(data);
        reset()
    };
    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-7 col">
                        <div className="card h-100">
            <img src={product?.img} className="card-img-top h-50 " alt="..."/>
            <div className="card-body">
                
                <h5 className="card-title">{product?.name}</h5>
                <h5>Price: ${product?.price}</h5>
                <p className="card-text">{product?.description}</p>
            </div>
            </div>
            </div>
            <div className="col-md-5 col">
            <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input className="mb-3" required placeholder="Email" {...register("userEmail")} defaultValue={user.email} />

                            <br />
                        <input className="mb-3" required placeholder="address" {...register("userAddress")} />
                        <br />
                        <input className="mb-3" required placeholder="phone number" type="number" {...register("phone")} />
                        <br />
                        
                        <input className="mb-3" required placeholder="Name" {...register("serviceName")} defaultValue={product.name} />
                        <br />
                        <input className="mb-3" required placeholder="img" {...register("img")} defaultValue={product.img} />
                        <br />
                        <input className="mb-3" required placeholder="price" {...register("price")} defaultValue={product.price} />
                        <br />
                        <input className="mb-3" required placeholder="description" {...register("description")} defaultValue={product.description} />
                        <br />
                       <input type="submit" value="Purchase" />
                    </form>
            </div>

        </div>
        

    </div>
    );
};

export default Purchase;