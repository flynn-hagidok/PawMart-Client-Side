import React, { use, useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../context/AuthContext/AuthContext';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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

    const handleDownload = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text("My Order Report", 14, 15);

        autoTable(doc, {
            startY: 25,
            head: [[
                "Product",
                "Price",
                "Quantity",
                "Date"
            ]],
            body: orders.map(order => [
                order.product_name,
                order.price,
                order.quantity,
                order.date
            ])
        })
        doc.save("my-order-report.pdf");
    }

    return (
        <div className='text-end'>
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
            <button onClick={handleDownload} className='bg-linear-to-r from-secondary to-base-200 px-6 py-2 rounded my-10 mx-4 text-accent font-medium cursor-pointer'>Download</button>
        </div>
    );
};

export default MyOrders;