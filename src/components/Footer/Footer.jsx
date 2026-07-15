import React from 'react';
import logo from '../../assets/petmart-logo.png'

const Footer = () => {
    return (
        <div className='p-4 bg-linear-to-r from-secondary to-base-200'>
            <div className='md:flex justify-around items-center  mt-10 p-6 md:py-14 text-accent space-y-6 border-b'>
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
            <div className='mt-4 text-center text-accent'>
                <p>&copy; Copyright Reserved 2026</p>
                <p className='text-primary font-semibold'>Made by Fleming Hagidok</p>
            </div>
        </div>
    );
};

export default Footer;