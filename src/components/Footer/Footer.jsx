import React from 'react';
import logo from '../../assets/petmart-logo.png'

const Footer = () => {
    return (
        <div className='md:flex justify-around items-center bg-linear-to-r from-secondary to-base-200 mt-10 p-6 md:py-14 text-accent space-y-6'>
            <div>
                <img src={logo} alt="" className='h-14 mx-auto' />
                <h4 className='text-2xl font-semibold'>PawMart</h4>
            </div>
            <div>
                <h4 className='text-xl font-semibold border-b'>Get to know us</h4>
                <ul className='mt-2 space-y-1'>
                    <li>About Us</li>
                    <li>Privacy & Policy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h4 className='text-xl font-semibold border-b'>Social Links</h4>
                <ul className='mt-2 space-y-1'>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>LinkeIn</li>
                    <li>Github</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;