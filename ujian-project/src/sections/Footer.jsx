import React from 'react'
import logo from '../assets/images/logo.png'
import footer1 from '../assets/images/footer1.jpg'
import footer2 from '../assets/images/footer2.jpg'
import footer3 from '../assets/images/footer3.jpg'
import footer4 from '../assets/images/footer4.jpg'
import footer5 from '../assets/images/footer5.jpg'
import footer6 from '../assets/images/footer6.jpg'

const Footer = () => {
    return (
        <footer id="footer" className='bg-[#222] text-white py-16'>
            <div className="container max-sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-12">
                <div>
                    <img src={logo} alt="" height={55} width={55} className='filter invert-[100]' />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis exercitationem eos, ipsam ducimus doloribus aliquid, aliquam, quae accusantium maiores repellendus libero. Eos optio iusto culpa minima aperiam dolores. Optio, dignissimos!</p>
                </div>
                <div>
                    <h4 className='font-bold mb-8 text-[1.1rem]'>Quick Links</h4>
                    <ul>
                        <li className='mb-3 capitalize' ><a href="">Home</a></li>
                        <li className='mb-3 capitalize' ><a href="features">Features</a></li>
                        <li className='mb-3 capitalize' ><a href="shop">Shop</a></li>
                        <li className='mb-3 capitalize' ><a href="testimonials">Testimonial</a></li>
                        {/* <li className='mb-3 capitalize' ><a href="">Blog</a></li> */}
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold mb-8 text-[1.1rem]'>Our Gallery</h4>
                    <ul className='flex flex-wrap gap-4'>
                        <li><a href=""><img src={footer1} alt="" height={66} width={66} /></a></li>
                        <li><a href=""><img src={footer2} alt="" height={66} width={66} /></a></li>
                        <li><a href=""><img src={footer3} alt="" height={66} width={66} /></a></li>
                        <li><a href=""><img src={footer4} alt="" height={66} width={66} /></a></li>
                        <li><a href=""><img src={footer5} alt="" height={66} width={66} /></a></li>
                        <li><a href=""><img src={footer6} alt="" height={66} width={66} /></a></li>
                    </ul>
                </div>
                <div id='contact'>
                    <h4 className='font-bold mb-8 text-[1.1rem]'>Contact us</h4>
                    <ul className='flex flex-col gap-6'>
                        <li><span className='text-red-500 pr-2' >T.</span> +62 81318380565</li>
                        <li><span className='text-red-500 pr-2' >E.</span> naldoalbert@gmail.com</li>
                        <li><span className='text-red-500 pr-2' >A.</span> Universitas Gunadarma</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
