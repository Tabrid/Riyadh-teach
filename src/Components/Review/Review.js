import React, { useEffect, useState } from 'react';

import Reviewcard from './Reviewcard';


const Review = () => {

   const [services , setServices] = useState([]);

   useEffect(() =>{
    fetch('https://service-sigma.vercel.app/review')
    .then((response) => response.json())
    .then((data) => setServices(data));


   },[])



    return ( 
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
  
{

 services.map( service => <Reviewcard


    key={service._id}
    service={service}
 ></Reviewcard>)



}


</div>
    );
};

export default Review;