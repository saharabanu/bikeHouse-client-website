import React from 'react';
import './CompanyPartners.css';

const bikePartners=[
    {
        id:'01',
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/cue-clube-icon.png"
    },
    {
        id:'02',
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/rent-bike.png"
    },
    {
        id:'03',
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/bike-travel.png"
    },
    {
        id:'04',
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/city-bike.png"
    }
]


const CompanyPartners = () => {
    return (
        <div className="company-partners">
           <h3 className="text-center">OUR BIKE COMPANY PARTNERS</h3>
           <hr />
           <div className=" row container">
               {
                bikePartners.map(bikePartner=><div key={bikePartner.id} className=" col-12 col-md-3">
                <div>
                    <img src={bikePartner.img} alt="" />
                </div>

            </div>)   
               }
               
           </div>
        </div>
    );
};

export default CompanyPartners;




