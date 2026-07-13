import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {

    const products = useLoaderData();
    console.log(products);

    return (
        <div className='p-4 md:p-0'>
            <div className='md:flex gap-10 md:mt-10 md:max-w-6/8 mx-auto p-6 shadow-2xl rounded-md'>
                <div className='h-50 md:h-100 md:w-100 rounded-md p-2 shadow-2xl'>
                    <img src={products.image} alt="" className='h-full w-full object-cover rounded-md' />
                </div>
                <div className='space-y-4 flex justify-center flex-col mt-6 md:mt-0'>
                    <p className='text-2xl font-semibold'>{products.product_name}</p>
                    <div className='flex gap-10 font-semibold'>
                        <p>Price: {products.price}</p>
                        <p>{products.availability}</p>
                    </div>
                    <p className='font-semibold'>Description : </p>
                    <p>{products.description}</p>
                    <div className='flex gap-10'>
                        <p className='font-semibold'>Ratings: {products.rating}</p>
                        <p className='font-semibold'>Reviews: {products.reviews}</p>
                    </div>
                    <button className='bg-linear-to-r from-secondary to-base-200 p-2 rounded text-accent text-xl font-semibold cursor-pointer mt-4'> Order Now </button>
                </div>
            </div>
        </div>
    );
};

export default Details;