import React, { use, useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const MyListing = () => {

    const { user } = use(AuthContext);
    const axiosInstance = useAxiosSecure();
    const [myList, setMyList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.get(`/addListing?email=${user.email}`)
            .then(res => {
                const productsList = res.data;
                setMyList(productsList);
            }).catch(err => {
                console.log(err);
            })
    }, [axiosInstance, user])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/products/${id}`)
                    .then(res => {
                        const remove = res.data.deletedCount;
                        if (remove === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            });
                            setMyList(myList.filter(product => product._id !== id))
                        }
                    })
            }
        });
    }

    const handleUpdate = (id) => {
        axiosInstance.patch(`/products/${id}`)
            .then(res => {
                navigate(`/update/${id}`)
            })
    }

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
                                    <button onClick={() => handleUpdate(list._id)} className='bg-linear-to-r from-secondary to-base-200 text-accent font-medium py-2 rounded-md cursor-pointer'>Edit</button>
                                    <button onClick={() => handleDelete(list._id)} className='bg-linear-to-r from-secondary to-base-200 text-accent font-medium py-2 rounded-md cursor-pointer'>Delete</button>
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