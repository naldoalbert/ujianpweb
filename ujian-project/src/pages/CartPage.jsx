import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Ambil data keranjang dari backend
        const fetchCartItems = async () => {
            const response = await axios.get('/api/cart');
            setCartItems(response.data);
            calculateTotal(response.data);
        };

        fetchCartItems();
    }, []);

    const calculateTotal = (items) => {
        const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(totalPrice);
    };

    const handleBuy = () => {
        // Logika untuk melakukan pembelian
        alert("Pembelian berhasil!");
        // Kembali ke halaman utama
        window.location.href = '/';
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Keranjang Belanja</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id} className="flex justify-between">
                        <img src={item.image} alt={item.name} className="w-20 h-20" />
                        <span>{item.name}</span>
                        <span>{item.price} x {item.quantity}</span>
                    </li>
                ))}
            </ul>
            <h2 className="mt-4">Total: {total}</h2>
            <button onClick={handleBuy} className="mt-2 bg-blue-500 text-white p-2 rounded">Beli</button>
            <button onClick={() => window.location.href = '/orders'} className="mt-2 bg-green-500 text-white p-2 rounded">Orders</button>
        </div>
    );
};

export default CartPage;