import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';


const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/"
})

const useAxiosSecure = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const request = axiosInstance.interceptors.request.use(config => {
            const token = user.accessToken;
            if (token) {
                config.headers.authorization = `Bearer ${token}`
            }
            return config;
        })

        const response = axiosInstance.interceptors.response.use(res => {
            return res;
        }, err => {
            const status = err.status;
            if (status === 401 || status === 403) {
                logout()
                    .then(() => {
                        navigate("/login")
                    })
            }
        })
        return () => {
            axiosInstance.interceptors.request.eject(request);
            axiosInstance.interceptors.request.eject(response);
        }
    }, [user, logout, navigate])
    return axiosInstance;
};

export default useAxiosSecure;