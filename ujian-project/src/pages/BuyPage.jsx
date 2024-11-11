import React, { useState } from 'react';

const BuyPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBuy = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto p-4 max-w-sm">
            <h1 className="text-2xl font-bold mb-4 text-center">Order</h1>
            <div className="border mb-4">
                <h2 className="font-bold">List Order</h2>
                <div className="flex justify-between mt-2">
                    <span>Nama Barang</span>
                    <span>Harga</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span>Contoh Barang</span>
                    <span>$55.00</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span>Total</span>
                    <span>$55.00</span>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Nama:</label>
                <input type="text" className="border rounded w-full py-2 px-2 mb-2 border-solid border-[#dad8d8]" />
                <label className="block text-gray-700">HP:</label>
                <input type="text" className="border rounded w-full py-2 px-2 mb-2 border-solid border-[#dad8d8]" />
                <label className="block text-gray-700">Alamat:</label>
                <input type="textarea" className="border rounded w-full py-2 px-2 mb-2 border-solid border-[#dad8d8]" />
            </div>
            <div className="flex justify-between">
                <button className="bg-red-500 text-white py-2 px-4 rounded">Cancel</button>
                <button onClick={handleBuy} className="bg-blue-500 text-white py-2 px-4 rounded">Buy</button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h2 className="text-lg font-bold">Pesanan Anda Berhasil</h2>
                        <p>Barang anda berhasil dipesan dan menunggu dikemas oleh admin.</p>
                        <button onClick={handleCloseModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BuyPage;


// import React, { useState } from 'react';

// const BuyPage = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleBuy = () => {
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <div className="container mx-auto p-4 max-w-md"> {/* Set lebar medium */}
//             <h1 className="text-2xl font-bold mb-4">Order</h1>
//             <div className="border p-4 mb-4">
//                 <h2 className="font-bold">List Order</h2>
//                 <div className="flex justify-between mt-2">
//                     <span className="flex items-center">
//                         <img src="path/to/your/image.jpg" alt="Nama Barang" className="w-16 h-16 mr-2" /> {/* Ganti dengan path gambar */}
//                         Nama Barang
//                     </span>
//                     <span>Harga</span>
//                 </div>
//                 <div className="flex justify-between mt-2">
//                     <span className="flex items-center">
//                         <img src="" alt="Contoh Barang" className="w-16 h-16 mr-2" /> {/* Ganti dengan path gambar */}
//                         Contoh Barang
//                     </span>
//                     <span>$55.00</span>
//                 </div>
//                 <div className="flex justify-between mt-2">
//                     <span>Total</span>
//                     <span>$55.00</span>
//                 </div>
//             </div>
//             <div className="border p-4 rounded mb-4"> {/* Tambahkan border dan padding pada form */}
//                 <label className="block text-gray-700">Nama:</label>
//                 <input type="text" className="border rounded w-full py-2 px-3 mb-2" />
//                 <label className="block text-gray-700">HP:</label>
//                 <input type="text" className="border rounded w-full py-2 px-3 mb-2" />
//                 <label className="block text-gray-700">Alamat:</label>
//                 <input type="text" className="border rounded w-full py-2 px-3 mb-2" />
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