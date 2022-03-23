import React from 'react';

const items = [
    {
        id : "01",
        title:"HELMETS",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/imgb1.jpg",
        shortDesc: "Cycle helmets protect the head by reducing the rate at which the skull and brain are accelerated or decelerated by an impact. The helmet acts like a shock absorber. As it is impacted, the expanded polystyrene liner is intended to crush, dissipating the energy over a rapidly increasing area like a cone."
    },
    {
        id : "02",
        title:"SHOES",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/imgbox2.jpg",
        shortDesc: "Cycling shoes are shoes purpose-built for cycling. There are a variety of designs depending on the type and intensity of the cycling for which they are .."
    },
    {
        id : "03",
        title:"CLOTHING",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/imgbox3.jpg",
        shortDesc: "They generally have a full- or half-length zip on the front, a high neckline and around pockets built in that sit at the lower back. ... Long-sleeve jerseys will provide extra warmth in cool conditions. They'll sometimes have windproof panelling or a water resistant coating for added protection."
    },
    {
        id : "04",
        title:"CAMERA",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/imgbox4.jpg",
        shortDesc: "Sometimes called action cameras, helmet cameras or adventure cameras, bike cameras are small and incredibly designed cameras that can capture HD footage without weighing you down or being ungainly. ... There is however another dimension to owning a bike camera, to capture evidence for when a bike ride goes wrong."
    },
    {
        id : "05",
        title:"BATTERY",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/imgbox5.jpg",
        shortDesc: "The cycle life of batteries is the number of charge and discharge cycles that a battery can complete before losing performance. The cycle life of Li-ion batteries is affected significantly by the depth of discharge. The depth of discharge is the amount of a battery's storage capacity that is utilized."
    },
    {
        id : "06",
        title:"MAP",
        img:"https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/imgbox6.jpg",
        shortDesc: "A bicycle map or bike map is a map designed specifically for bicyclists. Bike maps often include features not on general purpose street maps such as bike lanes, bike paths, bike routes, bike shops, topographical features like major hills, etc"
    },
]

const NecessaryMaterials = () => {
    return (
        <div className="container mt-5 mb-5 bg-light bg-gradient">
            <h4 className="fw-bold pb-3">SEE WHAT THOSE NEED FOR YOUR DRIVING SECURITY</h4>
            <div className="row ">
                {items.map(item=><div key={item.id} className="col-md-4 mb-3">
                    <div className="border h-100  shadow ">
                        <img src={item.img} alt="" />
                        <h4>{item.title}</h4>
                        <p className='text-start px-3'>{item.shortDesc}</p>
                    </div>

                    </div>
                    
                    
                    )}
                
            </div>

        </div>
        
    );
};

export default NecessaryMaterials;