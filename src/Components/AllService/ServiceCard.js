import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {_id,details} = service;
 console.log(service);

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title"> </h2>
    <p>services :{details}</p>
    <div className="card-actions justify-end">
      <Link to={`/services/${_id}`}><button className="btn btn-primary">Listen</button></Link>
    </div>
  </div>
        </div>
    );
};

export default ServiceCard;