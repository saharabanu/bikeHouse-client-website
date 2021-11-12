import { Rating } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Reviews = () => {
    

    const { register, handleSubmit,reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    if (data.count > 5) {
      alert('Please give a number under equal 5')
      return
  }
       data.img = user?.photoURL || 'https://res.cloudinary.com/teepublic/image/private/s--SC6WBeLv--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-201,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-312,y_-215/b_rgb:000000/c_limit,f_jpg,h_630,q_90,w_630/v1591166209/production/designs/10929272_0.jpg'



    fetch("https://glacial-fortress-22682.herokuapp.com/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.insertedId){
          alert('Added Successfully')
          
        }
        
        
      });
        
    
    reset()
  };
 
    return (
      <Container>
      <small className="text-light">#rating</small>
      <div style={{height:'60vh'}} className="w-100 d-flex align-items-center justify-content-center">
      <div className="w-75">
      <h1 className="text-center">Rate our service <br /><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></h1>
          <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
          <input className="w-100" type="text" value={user?.displayName} placeholder="Your Name" {...register("name",{ required: true })} /><br/><br/>
          <input className="w-100" type="number" placeholder="Your Rating out of 5" {...register("count")} /><br/><br/>
          <input className="w-100" type="text" placeholder="Write Your Comment" {...register("message")} /><br/><br/>
          <input className="w-100" type="submit" /><br/>
          </form>
      </div>
  </div>
  </Container>
    );
};

export default Reviews;