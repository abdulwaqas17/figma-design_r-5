import React, { useEffect } from "react";
import { scaleOnScroll,fadeUpOnScroll,fadeDownOnScroll,fadeLeftOnScroll,fadeRightOnScroll } from "../animations/gsap";

const Footer = () => {


  useEffect(()=> {

    scaleOnScroll('.scaleUp');
    fadeUpOnScroll('.myCarts');
    fadeDownOnScroll('.fadeOut');
    fadeRightOnScroll('.right');
    fadeLeftOnScroll('.left');
  },[])



  return (
    <div className="footer">
      <div className="bg-[#7213df] text-white p-[20px] md:p-20">
        <h2 className="fadeOut font-bold text-[1.3rem] md:text-[2.5rem] text-center w-full md:w-[50%] md:mx-auto">
          Get our stories delivered From  us to your inbox weekly.
        </h2>

        <div className="search flex gap-[15px] md:gap-6 justify-center py-[25px] md:p-10 p-[5px] text-[.85rem]">
          <input
            type="text"
            placeholder="Search"
            className="left bg-white text-black px-[5px] md:px-3 md:py-2 w-[150px] md:w-[250px] rounded-[4px]"
          />
          <button className="right bg-none border-1 border-white px-[10px] md:px-6 py-1 md:text-xl rounded-[4px]">
            Get Started
          </button>
        </div>

        <p className="myCarts md:w-[40%] w-full text-gray-300 text-[.8rem] md:text-[.9rem] text-center md:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          blanditiis, necessitatibus dicta distinctio maxime provident illum quo
          assum
        </p>
      </div>

      <div className="bottom px-[20px] md:px-20 pt-[36px] md:pt-15 pb-[10px] md:pb-6">
        <div className="logo mx-auto w-[100px] md:w-[200px]">
        <img className="scaleUp" src="/assets/figma-9.jpg" alt="" />

        </div>

        <ul className="flex justify-center gap-[20px] py-[20px] md:py-6 font-bold">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Help</li>
        </ul>

        <ul className="flex justify-center gap-[15px] text-[.8rem] font-bold">
          <li className="scaleUp w-[30px] h-[30px] bg-[#7213df] text-white rounded-full flex justify-center items-center">
            PK
          </li>
          <li className="scaleUp w-[30px] h-[30px] bg-[#7213df] text-white rounded-full flex justify-center items-center">
            WI
          </li>
          <li className="scaleUp w-[30px] h-[30px] bg-[#7213df] text-white rounded-full flex justify-center items-center">
            AU
          </li>
          <li className="scaleUp w-[30px] h-[30px] bg-[#7213df] text-white rounded-full flex justify-center items-center">
            EN
          </li>
        </ul>

        <hr  className="my-5 text-gray-300"/>

        <p className="text-center md:text-[1rem] text-[.9rem] text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit iusto!</p>
      </div>
    </div>
  );
};

export default Footer;
