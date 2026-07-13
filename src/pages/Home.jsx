import React, { use } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../context/AuthContext/AuthContext';
import Banner from '../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Products from '../components/Products/Products';

const Home = () => {

    const { user } = use(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;