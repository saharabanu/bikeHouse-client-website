import React from 'react';
import { Link } from 'react-router-dom';

const bikers = [
    {
        id:"01",
        racingName:"Bike Athletes",
        title:"JODIE CUNNAMA",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/team1.jpg"
    },
    {
        id:"02",
        racingName:"Bike Athletes",
        title:"DAVID MCNAMEE",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/team2.jpg"
    },
    {
        id:"03",
        racingName:"Bike Athletes",
        title:"JAMES CUNNAMA",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/team3.jpg"
    },
    {
        id:"04",
        racingName:"Bike Athletes",
        title:"ANNA STHESIA",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/team4.jpg"
    },
    {
        id:"05",
        racingName:"Bike Athletes",
        title:"PAIGE TURNER",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/team5.jpg"
    },
    {
        id:"06",
        racingName:"Bike Athletes",
        title:"ANNA MULL",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/team6.jpg"
    },
    {
        id:"07",
        racingName:"Bike Athletes",
        title:"PETEY CRUISER",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/team7.jpg"
    },
    {
        id:"08",
        racingName:"Bike Athletes",
        title:"PAUL MOLIVE",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/team8.jpg"
    },
    {
        id:"09",
        racingName:"Bike Athletes",
        title:"PAUL MOLIVE",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/team9.jpg"
    },
]

const AboutUs = () => {
   
    return (
        <div>
            
            <div className="d-flex justify-content-around align-bikers-center ">
                <div className="about img">
                    <img src="https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/cycle.jpg" alt="" />
                </div>
                <div>
                    <h2>ABOUT US</h2>
                    <p className="p-5 mt-3 mb-2">Electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker popularised in the 1960s with the release of Letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker popularised in the 1960s with the release of Letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker</p>
                    
                    <Link to='/contactUs'><button className="btn btn-danger border-0 rounded-pill p-3">Contact Us</button>
                    </Link>
                </div>

            </div>

                        <h2 className="mt-5 mb-5">OUR BIKERS</h2>
            <div className="row ">
                {bikers.map(biker=><div key={biker.id} className="col-md-4 mb-3">
                    <div className="border h-100  shadow">
                        <img src={biker.img} alt="" />
                        <h2>{biker.title}</h2>
                        <h5>{biker.racingName}</h5>

                        
                    </div>

                    </div>
                    
                    
                    )}
                
            </div>
        </div>
    );
};

export default AboutUs;