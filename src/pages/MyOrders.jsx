import React, { use, useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../context/AuthContext/AuthContext';

const MyOrders = () => {

    const axiosInstance = useAxiosSecure();
    const [orders, setOrders] = useState([]);
    const { user } = use(AuthContext);

    useEffect(() => {
        axiosInstance.get(`/orders?email=${user.email}`)
            .then(res => {
                const orders = res.data;
                setOrders(orders)
            })
    }, [axiosInstance])

    return (
        <div className="overflow-x-auto">
            <table className="table min-w-max whitespace-nowrap mt-10">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Buyer Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Phone</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        orders.map(order =>
                            <tr>
                                <td>
                                    {order.product_name}
                                </td>
                                <td>
                                    {order.buyer_name}
                                </td>
                                <td>
                                    {order.price}
                                </td>
                                <td>
                                    {order.quantity}
                                </td>
                                <td>
                                    {order.address}
                                </td>
                                <td>
                                    {order.date}
                                </td>
                                <td>
                                    {order.phone}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;