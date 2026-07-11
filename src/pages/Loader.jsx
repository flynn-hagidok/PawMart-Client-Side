import React from 'react';
import logo from "../assets/petmart-logo.png"

const Loader = () => {
    return (
        <div className='flex items-center h-screen justify-center'>
            <img src={logo} alt="" className='w-40 animate-logo' />
        </div>
    );
};

export default Loader;