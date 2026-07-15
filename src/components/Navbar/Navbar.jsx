import React, { use, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { CiMenuBurger } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
const Navbar = () => {

    const { user, logOut } = use(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(result => {
                
            }).catch(err => {
                console.log(err);
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/pet-supplies">Pet & Supplies</NavLink></li>
        {
            user && <>
                <li><NavLink to="/addListing">Add Listing</NavLink></li>
                <li><NavLink to="/myListing">My Listing</NavLink></li>
                <li><NavLink to="/myOrders">My Orders</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm md:px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        {links}
                    </ul>
                </div>
                <a className="font-semibold text-2xl bg-linear-to-r from-secondary to-base-200 text-transparent bg-clip-text">PawMart</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="cursor-pointer">
                            {user?.photoURL ?

                                <img
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    className="w-12 h-12 rounded-full border-2 border-secondary"
                                />
                                : <CgProfile size={40} />}
                        </div>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
                        >
                            <li className="px-4 py-2 font-semibold">
                                {user.displayName}
                            </li>

                            <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                        : <NavLink to="/register" className='btn shadow-none border-0 font-semibold bg-linear-to-r from-secondary to-base-200 text-accent'>Sign Up</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;