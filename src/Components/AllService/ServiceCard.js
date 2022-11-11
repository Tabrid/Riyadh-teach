import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({service}) => {

    const {_id,description,picture,name,rating,price} = service;
 console.log(service);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <PhotoProvider>
             <PhotoView src={picture} >
                        <img src={picture} alt='' />
                    </PhotoView>
                </PhotoProvider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name:{name}</h2>
          <p>Details:{description}</p>
          <p>Details:{rating}</p>
          <p>Details:${price}</p>
          <div className="card-actions">
          <Link to={`/services/${_id}`}><button className="btn btn-primary">details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;


           
                