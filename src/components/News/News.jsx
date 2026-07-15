import React from 'react';
import logo from '../../assets/petmart-logo.png'

const News = () => {
    return (
        <div className='max-w-7/8 mx-auto flex flex-col-reverse lg:flex lg:flex-row gap-2 my-16 lg:justify-around p-4 bg-primary rounded-md text-accent'>
            <div className='lg:w-[50%] flex flex-col justify-center mt-4'>
                <h2 className='text-2xl font-semibold'>Why Adopt from PawMart</h2>

                <p className='mt-4 text-justify space-y-4'>
                    Adopting a pet gives a loving animal a second chance at a happy life. Many rescued pets are healthy, friendly, and waiting for a caring family. By choosing adoption, you help reduce the number of homeless animals in shelters. Adoption also discourages unethical breeding and supports responsible pet ownership. Every adopted pet brings unconditional love, loyalty, and companionship to its new home. Rescued pets can make wonderful family members with proper care and patience. Adopting saves lives while creating space for shelters to help more animals in need. At PawMart, we encourage compassionate choices that benefit both pets and people. Together, we can build a kinder community where every pet has a safe and loving home. Choose adoption today and make a lifelong difference for a pet in need.
                </p>
            </div>
            <div className=''>
                <img src={logo} alt="" className='rounded-md mx-auto' />
            </div>
        </div>
    );
};

export default News;