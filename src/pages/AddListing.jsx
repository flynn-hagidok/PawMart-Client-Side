import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddListing = () => {

    const { user } = use(AuthContext);
    const [category, setCategory] = useState("");
    const axiosInstance = useAxiosSecure();

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const product_name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image_url.value;
        const date = form.date.value;
        const email = form.email.value;

        const newProduct = { product_name, category, price, location, description, image, date, email }
        console.log(newProduct);
        axiosInstance.post("/addListing", newProduct)
            .then(res => {
                const product = res.data;
                if (product.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Order placed successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                };
                form.reset();
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="w-full max-w-xl shadow-2xl rounded-xl p-8 mt-10 mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">
                Add Your Product
            </h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                    <label className="block mb-2 font-medium">
                        Product Name
                    </label>
                    <input
                        type="text" name="name" placeholder="Enter product name" className="input input-bordered w-full" required
                    />
                </div>
                <div className='flex gap-2'>
                    <label className='mb-2 font-medium'>Category: </label>
                    <select name='category' onChange={(e) => setCategory(e.target.value)} value={category} className='border rounded-md w-full'>
                        <option value="Pet Food">Pet Food</option>
                        <option value="Pets">Pet</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Pet Care Products">Pet Care Products</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 font-medium">
                        Price
                    </label>
                    <input
                        type="number" name="price" value={category === "Pets" ? 0 : undefined} readOnly={category === "Pets"} placeholder="Enter your price" className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">
                        Location
                    </label>
                    <input
                        type="text" name="location" placeholder="Enter your password" className="input input-bordered w-full" required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">
                        Description
                    </label>
                    <input
                        type="text" name="description" placeholder="Enter your description" className="input input-bordered w-full" required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">
                        Image URL
                    </label>
                    <input
                        type="text" name="image_url" placeholder="Enter image url" className="input input-bordered w-full" required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">
                        Date
                    </label>
                    <input
                        type="date" name="date" placeholder="Enter the date" className="input input-bordered w-full" required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium">
                        Email
                    </label>
                    <input
                        type="email" value={user.email} name="email" placeholder="Enter your password" className="input input-bordered w-full" readOnly
                    />
                </div>
                <button
                    type="submit"
                    className="btn bg-linear-to-r from-secondary to-base-200 w-full mt-2"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddListing;