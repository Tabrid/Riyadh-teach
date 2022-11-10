import React, { useState } from 'react';

const AddReview = () => {

const [service , setService] = useState({name:'default',description:'default',picture:'default',rating:'default',price:'default',});
 const handleAddService = event =>{
 event.preventDefault();
 console.log(service);

 fetch('https://service-sigma.vercel.app/services', {
     method : 'POST',
     headers : {

        'content-type' : 'application/json'
     },
     body: JSON.stringify(service)
 })
 .then( res => res.json())
 .then(data => console.log(data))

 }

 const handleInputBlur = event => {
    const value = event.target.value;
    const field = event.target.name;
    const newService = {...service};
    newService[field] = value;
    setService(newService);
 

 }




    return (
        <div className="flex justify-center ">
            
            

            <form onSubmit={handleAddService}>

                <input className="mt-5 " onBlur={handleInputBlur} type='text' name='name' placeholder='name'/>
                <br/>
                <input className="mt-5 " onBlur={handleInputBlur} type='text' name='description' placeholder='description'/>
                <br/>
                <input className="mt-5 " onBlur={handleInputBlur} type='text' name='picture' placeholder='picture'/>
                <br/>
                <input className="mt-5 " onBlur={handleInputBlur} type='text' name='rating' placeholder='rating'/>
                <br/>
                <input className="mt-5 " onBlur={handleInputBlur} type='text' name='price' placeholder='price'/>
                <br/>

                <button className="mt-5 btn" type='submit'>Submit </button>



            </form>





        </div>
    );
};

export default AddReview;