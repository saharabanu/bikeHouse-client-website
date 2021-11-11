import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="banner-image">
          <div className="banner-text">
            <h1 style={{fontSize:"4rem "}}>Live Life To The
            Fullest </h1>
            <p>Our electric bikes are specifically designed to give you the
            freedom to enjoy a more active and healthier lifestyle.</p>
           <Link to='/explore'> <button type="button" class="btn btn-danger border-0 rounded-pill px-5">Explore</button></Link>
           
            
          </div>
        </div>
        </div>
    );
};

export default Banner;