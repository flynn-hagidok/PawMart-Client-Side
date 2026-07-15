import React, { use, useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../context/AuthContext/AuthContext';

const MyListing = () => {

    const { user } = use(AuthContext);
    const axiosInstance = useAxiosSecure();
    const [myList, setMyList] = useState([])

    useEffect(() => {
        axiosInstance.get(`/addListing?email=${user.email}`)
            .then(res => {
                const productsList = res.data;
                setMyList(productsList);
            }).catch(err => {
                console.log(err);
            })
    }, [axiosInstance, user])

    return (
        <div className="overflow-x-auto">
            <table className="table min-w-max whitespace-nowrap mt-10">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Owner Email</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        myList.map(list =>
                            <tr>
                                <td>
                                    {list.product_name}
                                </td>
                                <td>
                                    {list.email}
                                </td>
                                <td>
                                    {list.price}
                                </td>
                                <td>
                                    {list.location}
                                </td>
                                <td>
                                    {list.date}
                                </td>
                                <td className='flex flex-col gap-2'>
                                    <button className='bg-linear-to-r from-secondary to-base-200 text-accent font-medium py-2 rounded-md cursor-pointer'>Edit</button>
                                    <button className='bg-linear-to-r from-secondary to-base-200 text-accent font-medium py-2 rounded-md cursor-pointer'>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyListing;