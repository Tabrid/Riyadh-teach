import React from 'react';
import { Link } from 'react-router-dom';
import ServiceHome from '../ServiceHome/ServiceHome';

import Slider from '../Slider/Slider'
const Home = () => {
    return (
        <div>
            <Slider> </Slider>
            <ServiceHome></ServiceHome>
            <Link to='/allservice' className="btn">SEE ALL</Link>
        </div>
    );
};

export default Home;