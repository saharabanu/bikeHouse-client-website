import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Reviews = () => {
    

    const { register, handleSubmit,reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
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
        <div>
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field w-50 mb-2"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field w-50 mb-2"
          name="name"
          value={user?.displayName}
          type="text"
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="input-field w-50 "
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3 w-50"
          type="submit"
          value="Register"
        />
      </form>

     
    </div>
    );
};

export default Reviews;