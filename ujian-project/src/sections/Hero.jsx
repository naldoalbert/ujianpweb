import React from 'react'
import { RiArrowDownCircleFill, RiArrowRightCircleFill } from 'react-icons/ri'

const Hero = () => {
    return (
        <section id="hero" className='text-white min-h-screen'>
            <div className="relative md:left-10 left-2 top-24 xl:w-[45%] flex flex-col justify-center items-start max-xl:px8 sm:p-16">
                <h1 className='home-1 md:text-[3rem] text-[2rem]'>New Arrival</h1>
                <h1 className='home-2 md:text-[3.2rem] text-[2.5rem] font-[800] font-serif'>Shoes <span className='md:text-[3.2rem] text-[2.5rem] font-[600] font-serif italic'>Collection!</span></h1>
                <p className='home-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Provident, eum nobis aut velit necessitatibus</p>
                <div className="home-4 mt-10 flex">
                    <a href="#shop" className='md:px-10 px-2 md:py-3 py-2 border-solid border-2 hover:bg-white hover:border-white hover:text-black uppercase text-[.8rem] font-bold mr-1'>
                        Shop Now
                    </a>
                    <button className='bg-white text-black md:px-10 px-2 md:py3 py-2 border-solid border-2 border-white hover:bg-transparent hover:text-white hover:border-white uppercase text-[.8rem] font-bold flex items-center gap-2' >Go to cart <RiArrowRightCircleFill size={16} /> </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
