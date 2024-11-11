import React from 'react';

const BuyPage = () => {
    return (
        <div className="container mx-auto p-4 border-solid">
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input type="text" className="border-solid rounded w-full py-2 px-3" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input type="email" className="border-solid rounded w-full py-2 px-3" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Address:</label>
                    <input type="text" className="border-solid rounded w-full py-2 px-3" />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Buy</button>
            </form>
        </div>
    );
};

export default BuyPage;