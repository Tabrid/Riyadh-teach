import React, {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Review from '../Review/Review';

const ServiceDetail = () => {

    const {name,picture,description,price,rating} = useLoaderData();

    const [review , setReview] = useState({rating:'default',name:name,details:'default',img:picture,});
    const handleAddReview = event =>{
    event.preventDefault();
    
    console.log(picture);
    fetch('https://service-sigma.vercel.app/review', {
     method : 'POST',
     headers : {

        'content-type' : 'application/json'
     },
     body: JSON.stringify(review)
 })
 .then( res => res.json())
 .then(data => console.log(data))
    
 toast("Successfully added");
    }
   
    const handleInputBlur = event => {
       const value = event.target.value;
       const field = event.target.name;
       const newReview = {...review};
       newReview[field] = value;
       setReview(newReview);
    
   
    }
  
   

    return (
        <>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={picture} alt='' className="max-w-sm h-1/2 w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Name :{name}</h1>
            <p className="py-6">Price : {price}</p>
            <p className="py-6">Rating :{rating}</p>
            <p className="py-6">Details :{description}</p>
            
          </div>

        </div>
      </div>

     <div>

 <Review></Review>


     </div>



      <div className='flex justify-center'>
      <form onSubmit={handleAddReview}>

                <input className="mt-10 w-60" onBlur={handleInputBlur} type='text' name='rating' placeholder='rating' required/>
                <br/>
                
                <input className="mt-10 w-60" onBlur={handleInputBlur} type='text' name='details' placeholder='details' required/>
                <br/>
                

                 <div>
                 <button className="mt-10 btn" type='submit'>Submit </button>
                 <ToastContainer />
                 </div>

</form>


      </div>

      </>
    );
};

export default ServiceDetail;