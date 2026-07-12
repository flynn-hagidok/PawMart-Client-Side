import React, { use } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../context/AuthContext/AuthContext';
import Banner from '../components/Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {

    const { user } = use(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;