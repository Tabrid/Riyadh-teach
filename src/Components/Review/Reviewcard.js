import React from 'react';
import { Link } from 'react-router-dom';

const Reviewcard = ({service}) => {

    const {rating,details} = service;
 console.log(service);

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
    
  <div className="card-body">
    <h2 className="card-title"> </h2>
    <p>services :{details}</p>
    <p>rating :{rating}</p>
    
  </div>
        </div>
    );
};

export default Reviewcard;