import React, { use } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../context/AuthContext/AuthContext';
import Banner from '../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Products from '../components/Products/Products';
import News from '../components/News/News';

const Home = () => {

    const { user } = use(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Products></Products>
            <News></News>
        </div>
    );
};

export default Home;