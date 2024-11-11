import React from 'react'

const TestimoniaslCard = ({ imgURL, title, des }) => {
    return (
        <div className="testimonial-card relative flex flex-1 flex-col items-center text-center w-full max-sm:w-full bg-white p-4 shadow-xl ring-1 ring-slate-900/5 rounded-lg">
            <img src={imgURL} alt={title} height={80} width={80} className='border-solid border-4 border-[#eee] rounded-full' />
            <h4 className='mt-2 text-[1.1rem] font-bold leading-normal text-[#444]'>{title}</h4>
            <p className='mt-2 font-[500] text-[.88] text-[#777] leading-normal'>{des}</p>
        </div>
    )
}

export default TestimoniaslCard
