import React from 'react';


const Reviewcard = ({service}) => {

    const {rating,details,name,img} = service;
 
    
    return (
      <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className='w-72 h-72'><img src={img} alt="Album"/></figure>
      <div className="card-body">
        <h2 className="card-title">Name:{name}</h2>
        <p>Rating:{rating}</p>
        <p>Details:{details}</p>
        
      </div>
    </div>
    );
};

export default Reviewcard;