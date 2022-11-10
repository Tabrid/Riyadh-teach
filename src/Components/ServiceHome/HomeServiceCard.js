import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const HomeServiceCard = ({Homeservice}) => {

    const {_id,picture} = Homeservice;









    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure> 

                <PhotoProvider>
                    <PhotoView src={picture} >


                        <img src={picture} alt='' />




                    </PhotoView>




                </PhotoProvider>



            </figure>
  <div className="card-body">
    <h2 className="card-title"> </h2>
    <p>services :</p>
    <div className="card-actions justify-end">
      <Link to={`/services/${_id}`}><button className="btn btn-primary">Listen</button></Link>
    </div>
  </div>
        </div>
    );
};

export default HomeServiceCard;