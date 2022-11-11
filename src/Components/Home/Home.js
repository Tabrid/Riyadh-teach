import React from 'react';
import { Link } from 'react-router-dom';
import Aboutus from '../Aboutus/Aboutus';
import ConnectUs from '../ConnectUs/ConnectUs';
import ServiceHome from '../ServiceHome/ServiceHome';

import Slider from '../Slider/Slider'
const Home = () => {
    return (
        <div>
            <Slider className='mt-5'> </Slider>
            <ServiceHome className='mt-5'></ServiceHome>
            <Link to='/allservice' className="btn flex justify-center mt-9 mb-10">SEE ALL</Link>
                <h1 className=" flex justify-center mt-9 mb-10"> About Us</h1>
            <Aboutus className=' flex justify-center mt-10'></Aboutus>

            <ConnectUs></ConnectUs>
        </div>
    );
};

export default Home;