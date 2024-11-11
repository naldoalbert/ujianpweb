import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await axios.get('/api/orders');
            setOrders(response.data);
        };

        fetchOrders();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Orders</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id} className="flex justify-between">
                        <span>{order.itemName}</span>
                        <span>{order.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrdersPage;