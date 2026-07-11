import React from 'react';
import logo from "../assets/petmart-logo.png"
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Error = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen">
            <Helmet>
                <title>PawMart | Error</title>
            </Helmet>
            <div className='text-center space-y-2 px-4'>
                <img src={logo} alt="" className='w-50 mx-auto' />
                <p className='text-6xl font-semibold text-base-300'>404!</p>
                <p className='text-2xl font-semibold'>Oops! The page you're looking for doesn't exist.</p>
                <button className='btn bg-linear-to-r from-secondary to-base-200 mt-4 py-6 px-10 text-accent text-xl' onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
};

export default Error;