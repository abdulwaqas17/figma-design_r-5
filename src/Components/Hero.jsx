import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scaleOnScroll } from "../animations/gsap";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(TextPlugin); // ✅ Text animation ke liye plugin register karna zaroori hai


const Hero = () => {

  const imgRef = useRef(null)
  const headingRef = useRef(null)
  const buttonRef = useRef(null)
  const [showCursor, setShowCursor] = useState(true);


  useEffect(()=> {

    scaleOnScroll('.fadeOutImg')
    

 

    // heading gsap
    gsap.to(headingRef.current, {
      text: " How Ai Will Changed The Future", // ✅ Yahan apna text change kar sakte ho
      duration: 3, // ✅ 3 seconds me complete hoga
      ease: "power1.out",
    });

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev); // ✅ Cursor ko blink karwane ke liye toggle kar rahe hain
    }, 500);

    return () => clearInterval(cursorInterval);


  
    
  },[])

  console.log('hello');

    // handleMouseEnter img gsap
  // const handleMouseEnter = () => {
  //   gsap.to(imgRef.current, { scale: 1.05, duration: 0.4, ease: "power1.out" });
  // };

  // // handleMouseLeave img gsap
  // const handleMouseLeave = () => {
  //   gsap.to(imgRef.current, { scale: 1, duration: 0.4, ease: "power1.out" });
  // };

     
    // button gsap
   


  return (
    <div className="mt-[60px] flex justify-between flex-col md:flex-row gap-[60px] md:p-20 md:pl-25 py-[50px] px-[20px] bg-purple-500 text-white">
      <div className="heroLeft w-full">
        <h3 className="md:text-2xl font-bold">Featured Post</h3>
        <h1 className="md:text-5xl font-bold pt-10 pb-5" >
        <span ref={headingRef}></span>
      {showCursor && <span style={{ color: "white" }}>|</span>} {/* ✅ Blinking cursor */}
        </h1>
        <p className="pb-5 md:leading-[26px] md:w-[450px] text-[1.1rem]">
          Lorem ipsum dolor sit. Explicabo aspernatur dolor rem fugit fugiat, a,
          facere harum provident modi quos minima quam, culpa doloremque eaque
          molestiae et at distinctio omnis.
        </p>
        <button ref={buttonRef} className="bg-white text-black px-[25px]  transition-all cursor-pointer hover:bg-transparent hover:border   py-[8px] mt-2 rounded-md text-[1.1rem]">
          Read More
        </button>
      </div>
      <div className="heroRight">
        <img 
          src="/assets/figma-8.jpg"
          alt="figma img"
          className="md:w-[800px] fadeOutImg"
        />
        {/* <div className="img w-[400px] h-[400px] bg-orange-500"></div> */}
      </div>
    </div>
  );
};

export default Hero;
