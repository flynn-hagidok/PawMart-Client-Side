import React, { useEffect, useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Loading from '../../pages/Loading';
import useAxios from '../../hooks/useAxios';

const Banner = () => {

    const [current, setCurrent] = useState(0)
    const [banners, setBanners] = useState([])
    const axiosInstance = useAxios();

    useEffect(() => {
        axiosInstance.get("/banner")
            .then(data => {
                const banner = data.data;
                setBanners(banner);
            })
    }, [useAxios])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % banners.length);
        }, 3000)
        return () => clearInterval(interval);
    }, [banners.length])

    if (!banners || banners.length === 0) {
        return <Loading></Loading>
    }

    const nextSlide = () => {
        setCurrent(prev => (prev + 1) % banners.length);
    }

    const prevSlide = () => {
        setCurrent(prev => prev === 0 ? banners.length - 1 : prev - 1)
    }

    const banner = banners[current]

    return (
        <div className='h-64 lg:h-[560px] relative'>
            <div className='h-full'>
                <img src={banner.image} alt="" className='h-full w-full object-fill' />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-primary via-black/5 to-transparent"></div>

            <div className='absolute md:text-2xl font-semibold top-5/6 md:top-4/5 text-accent left-6 lg:left-18'>
                <p>{banner.description}</p>
            </div>

            <button onClick={prevSlide} className='absolute top-1/2 -translate-y-1/2 left-6 text-accent cursor-pointer'>
                <GrFormPrevious size={40} />
            </button>
            <button onClick={nextSlide} className='absolute top-1/2 -translate-y-1/2 right-6 text-accent cursor-pointer'>
                <GrFormNext size={40} />
            </button>
        </div>
    );
};

export default Banner;