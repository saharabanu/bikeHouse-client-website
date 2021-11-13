import React from 'react';
import { useForm } from "react-hook-form";

const ContactUs = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        
        console.log(data)
    };
    
    
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-around align-bikers-center">
                <div className="">
                    <img src="https://media.istockphoto.com/photos/portrait-of-female-biker-smiling-for-camera-in-public-park-picture-id1270401890?b=1&k=20&m=1270401890&s=170667a&w=0&h=reGiOec2FpRGg5eHs0qRqwBO9aZuMrHxAP4djcQZWq0=" alt="" />
                </div>
                <div className="bg-danger text-white ">
                <form onSubmit={handleSubmit(onSubmit)}>
    
      <input  className="w-100 p-2 rounded mb-3" placeholder="Your Name" type="text" {...register("name", { required: true })} />
      <br />
      <input className="w-100 p-2 rounded mb-3" placeholder="Your email" type="emial" {...register("email", { required: true })} />
      <br />
      <input className="w-100 p-2 rounded mb-3" placeholder="Your Phone Number"  type="number" {...register("phone", { required: true })} />
      <br />
      <input className="w-100 p-2 rounded mb-3" placeholder="Your Message" type="text" {...register("message", { required: true })} />
      <br />
      
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input classNmae="btn btn-sucsess p-3 border-0" type="submit" />
    </form>
    
                </div>
            </div>
        </div>
        
    );
};

export default ContactUs;