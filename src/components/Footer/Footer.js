import React from 'react';
import News from '../News/News';

const Footer = () => {
    return (
        
        <div className="mt-5 footer bg-dark text-white ">
            <News></News>
      <div className="text-start">
        <div className="row container mx-auto p-5">
          <div className="col-md-3  ">
            <div className="first-cart p-2 mt-2">
              <h3 className="text-danger fw-bold"
              >Bike House Services</h3>
              <p>E-bike repair</p>
              <p>Worldwide Shipping</p>
              <p>Free Return</p>
              <p>Member Discount</p>
              <p>24/7 Support</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="second-part">
              <h3 className="text-danger fw-bold mb-3"
               >The good stuff in your inbox</h3>
                <p>News & updates from E-bike. <br />
                    No spam, we promise.</p>
              <input
                className="input-field mt-3 mb-3"
                type="email"
                placeholder="Your Email"
              />
              <br />
              
              <input
                className="input-field mb-3"
                type="password"
                placeholder="Your Password"
              />
              <br />
              <input className="input-button" type="submit" value="submit" />
              
              
            </div>
          </div>
          <div className="col-md-3">
            <div className="third-part">
              <h3 className="text-danger fw-bold"
              >Useful Links</h3>
              <p >About</p>
              <p>Features</p>
              <p>Variations</p>
              <p>Find Dealer</p>
              <p>Get in Touch</p>
              
            </div>
          </div>
          <div className="col-md-3">
            <div className="fourth-part">
              <h3 className="text-danger fw-bold"
              >Contact Us</h3>
              <p className="">Address:  121 King Street Motijhil, 3000, Dhaka</p>
             
              <p className="mt-3">Phone: 01754634526</p>
              
              <p className="mt-3">Fax:  08) 08 4752 1499</p>
              
              <p className="mt-3">Email:  ebikeofficedh@gmail.com</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="botton text-center">
          <small>Bike-House Website . Copyright by Sahara</small>
        </div>
      </div>
    </div>
    );
};

export default Footer;