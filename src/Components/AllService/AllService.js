import React, { useEffect, useState } from 'react';
import AddReview from '../AddReview/AddReview';
import ServiceCard from './ServiceCard';

const AllService = () => {

   const [services , setServices] = useState([]);

   useEffect(() =>{
    fetch('https://service-sigma.vercel.app/services')
    .then((response) => response.json())
    .then((data) => setServices(data));


   },[])



    return ( 
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
  
{

 services.map( service => <ServiceCard


    key={service._id}
    service={service}
 ></ServiceCard>)



}
<h1> Add Service</h1>
 <div className='flex justify-center'>
    
    <AddReview></AddReview>
 </div>

</div>
    );
};

export default AllService;