import React from "react"
const CategoryCard = ({ imgURL, title, des }) => {
    return (
        <div className="category-card relative flex flex-1 flex-col items-center text-center w-full max-sm:w-full overflow-hidden">
            <img src={imgURL} alt={title} className="border-solid border-slate-900/5" />
            <h4 className="mt-2 text-[1.5rem] font-extrabold leading-normal absolute top-7 left-6 z-20">{title}</h4>
            <p className="heading mt-2 font-[500] text-[.88rem] text-[#777] leading-normal absolute top-20 left-6 z-20">{des}</p>
            <button className="category-btn text-[.88rem] font-bold absolute bottom-6 left-6 uppercase z-20">Shop Now</button>
        </div>
    )
}
export default CategoryCard;