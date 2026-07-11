import React, { use } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../context/AuthContext/AuthContext';

const Home = () => {

    const { user } = use(AuthContext)
    console.log(user);

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;