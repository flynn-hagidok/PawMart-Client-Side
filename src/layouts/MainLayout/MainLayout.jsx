import React, { use, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Loader from '../../pages/Loader';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const MainLayout = () => {

    const { loading } = use(AuthContext);

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;