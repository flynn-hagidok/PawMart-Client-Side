import React from 'react';
import { CiSearch } from 'react-icons/ci';
import PetAndSuppliesCard from './PetAndSuppliesCard';
import { useLoaderData } from 'react-router';

const PetAndSupplies = () => {

    const products = useLoaderData();
    console.log(products);

    return (
        <div className=''>
            <div className='flex flex-col-reverse md:flex-row md:items-center gap-2 justify-between px-4 md:px-6 py-2 bg-base-300'>
                <div className='flex gap-2 items-center mt-4 md:mt-0'>
                    <label className='text-md font-semibold'>Category</label>
                    <select name="" className='rounded shadow p-2 cursor-pointer'>
                        <option value="" selected disabled>Select by category</option>
                        <option value="">Dogs</option>
                        <option value="">Pet Food</option>
                        <option value="">Dogs</option>
                    </select>
                </div>
                <div className='flex gap-2 md:w-md mt-2 md:mt-0'>
                    <input type="search" name="" className='input w-full text-xl' />
                    <CiSearch size={40} className='shadow-2xl cursor-pointer' />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:max-w-7/8 mx-auto mt-10'>
                {
                    products.map(product => <PetAndSuppliesCard key={product._id} product={product}></PetAndSuppliesCard>)
                }
            </div>
        </div>
    );
};

export default PetAndSupplies;