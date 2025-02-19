import React, { useState } from "react";
import { Link } from "react-router";


const Navbar = () => {

  const [num,setNum] = useState('-100%');


  return (
    <div className="flex justify-between md:px-15 px-[20px] py-4">
      <div className="logo">
        <Link to="/">
          <img src="/assets/figma-9.jpg" alt="logo" className="w-[70px] md:w-[150px]"/>
        </Link>

        {/* <div className="img w-[60px] h-[30px] bg-orange-500"></div> */}
      </div>

      <div className="rightNav hidden md:block">
        <ul className="flex gap-10 items-center">
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <li>Icon</li>
          <Link to="/contact">
            <button className="bg-purple-700 cursor-pointer px-4 py-2 rounded-md font-bold text-white">
              Contact Us
            </button>
          </Link>
        </ul>
      </div>

      <div className="mobileNav text-purple-800 text-2xl md:hidden" onClick={ ()=> num == '-100%' ? setNum('0%') : setNum('-100%')}>
      <i class="fa-solid fa-bars"></i>
      </div>

      <div className ="mobileMenu md:hidden bg-purple-800 fixed top-[60px] w-full transition-all duration-300" style={{left:num}}>
        <ul className="text-center py-[30px] text-[1rem] font-bold">
        <Link className="py-[10px] block text-white hover:text-purple-800 hover:bg-white active:text-purple-800 active:bg-white"  to="/">Home</Link>
        <Link className="py-[10px] block text-white hover:text-purple-800 hover:bg-white active:text-purple-800 active:bg-white"  to="/about">About</Link>
        <Link className="py-[10px] block text-white hover:text-purple-800 hover:bg-white active:text-purple-800 active:bg-white"  to="/blog">Blog</Link>
        <Link className="py-[10px] block text-white hover:text-purple-800 hover:bg-white active:text-purple-800 active:bg-white"  to="/contact">Contact</Link>
         
         
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
