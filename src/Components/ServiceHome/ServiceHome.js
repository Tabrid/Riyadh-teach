import React, { useEffect, useState } from 'react';
import HomeServiceCard from './HomeServiceCard';

const ServiceHome = () => {
    const [Homeservices , setHomeServices] = useState([]);

   useEffect(() =>{
    fetch('https://service-sigma.vercel.app/services/home')
    .then((response) => response.json())
    .then((data) => setHomeServices(data));


   },[])



    return ( 
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
  
{

Homeservices.map( Homeservice => <HomeServiceCard


    key={Homeservice._id}
    Homeservice={Homeservice}
 ></HomeServiceCard>)



}



</div>
    );
};

export default ServiceHome;