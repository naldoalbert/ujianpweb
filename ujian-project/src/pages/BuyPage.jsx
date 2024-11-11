// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const BuyPage = () => {
//     const location = useLocation();
//     const { imgURL, title, price } = location.state || {}; // Mengambil data dari state

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleBuy = () => {
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <div className="container mx-auto p-4 max-w-sm"> {/* Set lebar medium */}
//             <h1 className="text-2xl font-bold mb-4 text-center">Order</h1>
//             <div className="border mb-4 ">
//                 <h2 className="font-bold">List Order</h2>
//                 <div className="flex justify-between  mt-2">
//                     <span className="flex items-center">
//                         <img src={imgURL} alt={title} className="w-16 h-16 mr-2" />
//                         {title}
//                     </span>
//                     <span className="flex items-center">{price}</span>
//                 </div>
//                 <div className="flex justify-between mt-2 p-1 font-[600]">
//                     <span>Total</span>
//                     <span>{price}</span> {/* Total sama dengan harga */}
//                 </div>
//             </div>
//             <div className="border rounded mb-4"> {/* Tambahkan border dan padding pada form */}
//                 <label className="block text-gray-700">Nama:</label>
//                 <input type="text" className="border rounded w-full py-2 px-2 mb-2 border-solid border-[#dad8d8]" />
//                 <label className="block text-gray-700">HP:</label>
//                 <input type="text" className="border rounded w-full py-2 px-2 mb-2 border-solid border-[#dad8d8]" />
//                 <label className="block text-gray-700">Alamat:</label>
//                 <input type="text" className="border rounded w-full py-2 px-2 mb-2 border-solid border-[#dad8d8]" />
//             </div>
//             <div className="flex justify-between">
//                 <button className="bg-red-500 text-white py-2 px-4 rounded">Cancel</button>
//                 <button onClick={handleBuy} className="bg-blue-500 text-white py-2 px-4 rounded">Buy</button>
//             </div>

//             {/* Modal */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white p-4 rounded shadow-lg">
//                         <h2 className="text-lg font-bold">Pesanan Anda Berhasil</h2>
//                         <p>Barang anda berhasil dipesan dan menunggu dikemas oleh admin.</p>
//                         <button onClick={handleCloseModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">OK</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BuyPage;


import axios from 'axios';

const handleBuy = async () => {
    const orderData = {
        product_id: location.state.id, // Pastikan Anda mengirim ID produk
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value
    };

    try {
        await axios.post('http://localhost/api/orders.php', orderData);
        setIsModalOpen(true);
    } catch (error) {
        console.error("There was an error!", error);
    }
};