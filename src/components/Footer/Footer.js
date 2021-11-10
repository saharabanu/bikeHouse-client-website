import React from 'react';
import News from '../News/News';

const Footer = () => {
    return (
        
        <div className="mt-5 footer bg-primary text-white ">
            <News></News>
      <div className="">
        <div className="row container p-5">
          <div className="col-md-3  ">
            <div className="first-cart p-2 mt-2">
              <h6>Services</h6>
              <p>E-bike repair</p>
              <p>Worldwide Shipping</p>
              <p>Free Return</p>
              <p>Member Discount</p>
              <p>24/7 Support</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="second-part">
              <h6 className="mb-3">The good stuff in your inbox</h6>
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
              <h6>Useful Links</h6>
              <p >About</p>
              <p>Features</p>
              <p>Variations</p>
              <p>Find Dealer</p>
              <p>Get in Touch</p>
              
            </div>
          </div>
          <div className="col-md-3">
            <div className="fourth-part">
              <h6>Contact Us</h6>
              <small className="mt-5">Address: <br /> 121 King Street Motijhil, 3000, Dhaka</small>
              <br />
              <small className="mt-3">Phone: <br />01754634526</small>
              <br />
              <small className="mt-3">Fax: <br /> 08) 08 4752 1499</small>
              <br />
              <small className="mt-3">Email: <br /> ebikeofficedh@gmail.com</small>
            </div>
          </div>
        </div>
        <hr />
        <div className="botton text-center">
          <small>Website by Sahara. Copyright E-bike</small>
        </div>
      </div>
    </div>
    );
};

export default Footer;