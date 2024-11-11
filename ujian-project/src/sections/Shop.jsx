import React from 'react'
import { ShopData } from '../constans'
import ShopCard from '../components/ShopCard'

const Shop = () => {
    return (
        <section id="shop">
            <div className="title">
                <h2 className="text-[1.7rem] md:[2.2rem]">Our Products</h2>
                <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dicta sint in ipsa aspernatur hic minima</p>
            </div>
            <div className="container max-sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-12">
                {
                    ShopData.map((shop) => (
                        <ShopCard key={Shop.title} {...shop} />
                    ))
                }
            </div>
            <div className="flex items-center justify-center mt-16">
                <div className="pagination">
                    <ul className="flex gap-2">
                        <li className='border-solid border-[#ccc] text-center text-[#000] font-[600] bg-[#7180e077]'><a href="" className='px-4 py-2'>Prev</a></li>
                        <li className='border-solid border-[#ccc] text-center text-[#777] hover:bg-[#7180e077] hover:text-[#000]'><a href="" className='px-4 py-2'>1</a></li>
                        <li className='border-solid border-[#ccc] text-center text-[#777] hover:bg-[#7180e077] hover:text-[#000]'><a href="" className='px-4 py-2'>2</a></li>
                        <li className='border-solid border-[#ccc] text-center text-[#777] hover:bg-[#7180e077] hover:text-[#000]'><a href="" className='px-4 py-2'>3</a></li>
                        <li className='border-solid border-[#ccc] text-center text-[#000] font-[600] bg-[#7180e077]'><a href="" className='px-4 py-2'>Next</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Shop
