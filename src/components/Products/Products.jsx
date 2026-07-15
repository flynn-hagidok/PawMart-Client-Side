import React, { use, useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import ProductsCard from './ProductsCard';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Products = () => {

    const categories = ["Pet Food", "Pets", "Accessories", "Pet Care Products"];
    const [active, setActive] = useState("Pet Food");
    const [products, setProducts] = useState([]);
    const axios = useAxios();


    useEffect(() => {
        axios.get(`/products/${active}`)
            .then(data => {
                setProducts(data.data);
            })
    }, [active])

    const handleCategory = (category) => {

        setActive(category);

        axios.get(`/products/${category}`)
            .then(data => {
                setProducts(data.data);
            })
    }

    return (
        <div className='md:max-w-7/8 mx-auto px-4'>
            <div className={`flex flex-wrap gap-4 md:border-b-2 border-b-secondary mt-20 md:px-4`}>
                {
                    categories.map((category) => <div className='border-2 lg:border-0 rounded-md border-secondary bg-linear-to-r from-secondary to-base-200 bg-clip-text text-transparent'>
                        <button className={`md:px-6 md:py-1 md:text-xl font-semibold px-4 cursor-pointer
                            ${active === category ?
                                "md:border-t-2 md:border-l-2 md:border-b-4 md:-mb-1 md:border-b-accent md:border-r-2 md:rounded-t-md md:border-secondary md:bg-none md:text-secondary bg-linear-to-r from-secondary to-base-200 text-accent" :
                                "border-transparent"}`} key={category} onClick={() => handleCategory(category)}>
                            {category}
                        </button>
                    </div>)
                }
            </div>

            {/* products Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-10'>
                {
                    products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;