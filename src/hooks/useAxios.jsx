import axios from 'axios';
import React from 'react';


const instance = axios.create({
    baseURL: "http://https://pawmart-server-sand.vercel.app0/"
})

const useAxios = () => {

    return instance;
};

export default useAxios;