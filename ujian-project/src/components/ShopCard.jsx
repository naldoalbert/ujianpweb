// import React from 'react';
// import { RiStarFill, RiStarLine } from 'react-icons/ri';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const ShopCard = ({ imgURL, title, price }) => {
//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleBuyNow = () => {
//         navigate('/buy'); // Navigate to the buyer data page
//     };

//     return (
//         <div className="shop-card relative flex flex-col w-full max-sm:w-full">
//             <img src={imgURL} alt={title} />
//             <h4 className='mt-2 text-[1rem] font-[600] capitalize'>{title}</h4>
//             <p className='mt-2 font-[500] text-[.88rem] text-[#777] leading-normal'>{price}</p>
//             <div className="rating flex text-[#717fe0] mt-1">
//                 <RiStarFill />
//                 <RiStarFill />
//                 <RiStarFill />
//                 <RiStarFill />
//                 <RiStarLine />
//             </div>
//             <div className="flex gap-2 mt-4">
//                 <button onClick={handleBuyNow} className="text-[.7rem] uppercase border-solid border-[#777] text-black p-2 hover:bg-black hover:border-black hover:text-white mr-1">Buy Now</button>
//                 <button className="text-[.7rem] uppercase border-solid border-[#777] text-black p-2 hover:bg-black hover:border-black hover:text-white">Add to Cart</button>
//             </div>
//         </div>
//     );
// };

// export default ShopCard;


import React from 'react';
import { RiStarFill, RiStarLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const ShopCard = ({ imgURL, title, price }) => {
    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate('/buy', { state: { imgURL, title, price } }); // Mengirimkan data barang ke BuyPage
    };

    return (
        <div className="shop-card relative flex flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={title} />
            <h4 className='mt-2 text-[1rem] font-[600] capitalize'>{title}</h4>
            <p className='mt-2 font-[500] text-[.88rem] text-[#777] leading-normal'>{price}</p>
            <div className="rating flex text-[#717fe0] mt-1">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
            </div>
            <div className="flex gap-2 mt-4">
                <button onClick={handleBuyNow} className="text-[.7rem] uppercase border-solid border-[#777] text-black p-2 hover:bg-black hover:border-black hover:text-white mr-1">Buy Now</button>
                <button className="text-[.7rem] uppercase border-solid border-[#777] text-black p-2 hover:bg-black hover:border-black hover:text-white">Add to Cart</button>
            </div>
        </div>
    );
};

export default ShopCard;