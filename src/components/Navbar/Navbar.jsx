import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
const Navbar = () => {

    const { user } = use(AuthContext)

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Pet & Supplies</NavLink></li>
        {
            user && <>
                <li><NavLink to="/">Add Listing</NavLink></li>
                <li><NavLink to="/">My Listing</NavLink></li>
                <li><NavLink to="/">My Orders</NavLink></li>
            </>
        }
    </>
    return (
        <div className='flex justify-between items-center px-6 py-4 bg-accent shadow-2xs'>
            <div>
                <h2 className='font-semibold text-2xl bg-linear-to-r from-secondary to-base-200 text-transparent bg-clip-text'>PawMart</h2>
            </div>
            <div>
                <ul className='flex gap-4 text-primary'>
                    {links}
                </ul>
            </div>
            <div>
                {
                    user ? <img src={user?.photoURL} alt={user?.displayName} className='w-12 rounded-[50%] cursor-pointer' />
                        : <NavLink to="/register" className='btn shadow-none border-0 font-semibold bg-linear-to-r from-secondary to-base-200 text-accent'>Sign Up</NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;