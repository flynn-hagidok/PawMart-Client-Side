import React, { use, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext/AuthContext';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Details = () => {

    const products = useLoaderData();
    const modalRef = useRef(null);
    const { user } = use(AuthContext)
    const axiosInstance = useAxiosSecure()

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const buyer_name = form.buyer_name.value;
        const email = form.email.value;
        const product_id = form.product_id.value;
        const product_name = form.product_name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const address = form.address.value;
        const date = form.date.value;
        const phone = form.phone.value;

        const newOrder = { buyer_name, email, product_id, product_name, quantity, price, address, date, phone }

        axiosInstance.post("/orders", newOrder)
            .then(res => {
                const data = res.data;
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Order placed successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                modalRef.current.close();
                form.reset();
            }).catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                });
            })
    }

    return (
        <div className='p-4 md:p-0'>
            <div className='md:flex gap-6 md:mt-10 md:max-w-6/8 mx-auto p-6 shadow-2xl rounded-md'>
                <div className='h-50 md:h-100 md:w-7xl rounded-md p-2 shadow-2xl'>
                    <img src={products.image} alt="" className='h-full w-full object-fill rounded-md' />
                </div>
                <div className='space-y-4 md:space-y-6 flex justify-center flex-col mt-6 md:mt-0'>
                    <p className='text-2xl font-semibold'>{products.product_name}</p>
                    <div className='flex gap-20 font-semibold'>
                        <p>Price: {products.price}</p>
                    </div>
                    <div>
                        <p className='font-semibold'>Description : </p>
                        <p>{products.description}</p>
                    </div>
                    <button onClick={() => modalRef.current.showModal()} className='bg-linear-to-r from-secondary to-base-200 p-2 rounded text-accent text-xl font-semibold cursor-pointer mt-4'> Order Now </button>
                </div>
            </div>


            <dialog id="my_modal_5" ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleOrder} className="space-y-2 p-6">
                        <label className='block mb-2 font-medium'>Buyer Name</label>
                        <input type="text" name="buyer_name" value={user.displayName} className='input input-bordered w-full' readOnly />

                        <label className='block mb-2 font-medium'>Email</label>
                        <input type="text" name="email" value={user.email} className='input input-bordered w-full' readOnly />

                        <label className='block mb-2 font-medium'>Product ID</label>
                        <input type="text" name="product_id" value={products._id} className='input input-bordered w-full' readOnly />

                        <label className='block mb-2 font-medium'>Product Name</label>
                        <input type="text" name="product_name" value={products.product_name} className='input input-bordered w-full' readOnly />

                        <label className='block mb-2 font-medium'>Quantity</label>
                        <input type="number" name="quantity" className='input input-bordered w-full' required />

                        <label className='block mb-2 font-medium'>Price</label>
                        <input type="number" value={products.price} name="price" className='input input-bordered w-full' readOnly />

                        <label className='block mb-2 font-medium'>Address</label>
                        <input type="text" name="address" className='input input-bordered w-full' required />

                        <label className='block mb-2 font-medium'>Date</label>
                        <input type="date" name="date" className='input input-bordered w-full' required />

                        <label className='block mb-2 font-medium'>Phone</label>
                        <input type="number" name="phone" className='input input-bordered w-full' required />

                        <div className='flex justify-between mt-2'>
                            <button className='border-2 px-6 py-2 font-semibold bg-linear-to-r from-secondary to-base-200 text-accent rounded-md cursor-pointer'>Order</button>

                            <button type='button' onClick={() => modalRef.current.close()} className='border-2 px-6 py-2 font-semibold bg-linear-to-r from-secondary to-base-200 text-accent rounded-md cursor-pointer'>Cancel</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Details;