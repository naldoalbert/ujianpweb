import React, { useState } from "react";
import logo from '../assets/images/logo.png'
import { RiCloseFill, RiMenu3Fill, RiShoppingCartFill } from "react-icons/ri";

const Nav = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <nav className="z-30">
      {/* Desktop Verision */}
      <div className="container mx-auto justify-between md:flex hidden">
        <a href="" className="my-2 flex items-end gap-3">
          <img src={logo} alt="logo" height={71} width={71} />
        </a>
        <ul className="flex gap-8 lg:gap items-center capitalize font-[500] text-black">
          <li className="hover:scale-105 transition-all"><a href="#home">home</a></li>
          <li className="hover:scale-105 transition-all"><a href="#features">features</a></li>
          <li className="hover:scale-105 transition-all"><a href="#shop">shop</a></li>
          <li className="hover:scale-105 transition-all"><a href="#testimonials">testimonials</a></li>
          {/* <li className="hover:scale-105 transition-all"><a href="#blog">blog</a></li> */}
          <li className="hover:scale-105 transition-all"><a href="#contact">contact</a></li>
          <li className="hover:scale-105 transition-all"><a href=""><RiShoppingCartFill size={22} /></a></li>
        </ul>
      </div>

      {/* mobile version */}
      <div className="container mx-auto md:hidden flex justify-between items-center">
        <a href="" className="my-2 flex items-end gap-3">
          <img src={logo} alt="logo" height={36} width={36} />
        </a>
        {!menuOpened ?
          <RiMenu3Fill size={25} onClick={() => setMenuOpened(true)} className="cursor-pointer hover:text-red-500" /> :
          <RiCloseFill size={25} onClick={() => setMenuOpened(false)} className="cursor-pointer hover:text-red-500" />
        }

        <ul className="flex gap-4 flex-col shadow-xl p-6 rin-1 ring-slate-900/5 absolute top-12 left-0 right-0 text-center capitalize font-[500] text-slate-500 bg-white translate-y-[-150%] transition-all duration-700 z-20" style={{ transform: menuOpened && "translateY(0%)" }}>
          <li className="hover:scale-105 transition-all"><a href="#home">home</a></li>
          <li className="hover:scale-105 transition-all"><a href="#features">features</a></li>
          <li className="hover:scale-105 transition-all"><a href="#shop">shop</a></li>
          <li className="hover:scale-105 transition-all"><a href="#testimonials">testimonials</a></li>
          {/* <li className="hover:scale-105 transition-all"><a href="#blog">blog</a></li> */}
          <li className="hover:scale-105 transition-all"><a href="#contact">contact</a></li>
          <li className="hover:scale-105 transition-all"><a href=""><RiShoppingCartFill size={22} /></a></li>
        </ul>
      </div>
    </nav>
  )
};

export default Nav;
