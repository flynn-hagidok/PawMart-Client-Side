import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const ProductsCard = ({ product }) => {

    const { image, product_name, price, stock } = product;

    return (
        <div className="p-6 rounded-md shadow-2xl">
            <img src={image} alt="" className='w-full h-70 object-cover rounded-md' />
            <div className='space-y-2 mt-2'>
                <p className='text-xl font-semibold'>{product_name}</p>
                <div className='flex justify-between items-center font-semibold'>
                    <p className='flex items-center'>Price: {price} <FaBangladeshiTakaSign size={14} /></p>
                    <p>In-Stock: {stock}</p>
                </div>
            </div>
            <button className='border-2 w-full py-2 bg-linear-to-r from-secondary to-base-200 text-accent rounded-md font-semibold mt-2'>View Details</button>
        </div>
    );
};

export default ProductsCard;