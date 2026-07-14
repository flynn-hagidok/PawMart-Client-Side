import React from 'react';
import logo from "../assets/petmart-logo.png"

const NotFound = () => {
    return (
        <div>
            <div className='h-30'>
                <img src={logo} alt="" className='h-full mx-auto' />
            </div>
            <div>
                <p className='text-2xl font-semibold'>Data Not Found!</p>
            </div>
        </div>
    );
};

export default NotFound;