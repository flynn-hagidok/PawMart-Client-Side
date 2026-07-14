import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import PetAndSuppliesCard from './PetAndSuppliesCard';
import { useLoaderData } from 'react-router';
import NotFound from './NotFound';

const PetAndSupplies = () => {

    const products = useLoaderData();
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("")
    const [text, setText] = useState("");

    //category and search
    const filterProducts = products.filter((product) => {
        const matchCategory = category === "" || product.category === category;

        const matchSearch = product.product_name.toLowerCase().includes(search.toLowerCase());

        return matchCategory && matchSearch
    })

    return (
        <div className=''>
            <div className='flex flex-col-reverse md:flex-row md:items-center gap-2 justify-between px-4 md:px-6 py-2 bg-base-300'>
                <div className='flex gap-2 items-center mt-4 md:mt-0'>
                    <label className='text-md font-semibold'>Category</label>
                    <select onChange={(e) => setCategory(e.target.value)} name="" className='rounded shadow p-2 cursor-pointer'>
                        <option value="" selected disabled>Select by category</option>
                        <option value="Pets">Pets</option>
                        <option value="Pet Food">Pet Food</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Pet Care Products">Care Products</option>
                    </select>
                </div>
                <div className='flex gap-2 md:w-md mt-2 md:mt-0'>
                    <input type="search" value={text} onChange={(e) => {
                        setText(e.target.value)
                        setSearch(e.target.value)
                    }
                    }
                        onKeyDown={(e) => { if (e.key === "Enter") { setSearch(search.trim()) } }}
                        className='input w-full text-xl' />
                    <CiSearch size={40} onClick={() => setSearch(text)} className='shadow-2xl cursor-pointer' />
                </div>
            </div>

            {
                filterProducts.length === 0 ? <div className='flex justify-center items-center mt-10 h-50'>
                    <NotFound></NotFound>
                </div> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:max-w-7/8 mx-auto mt-10'>
                        {
                            filterProducts.map(product => <PetAndSuppliesCard key={product._id} product={product}></PetAndSuppliesCard>)
                        }
                    </div>
            }


        </div>
    );
};

export default PetAndSupplies;