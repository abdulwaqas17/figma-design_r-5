import React, { useEffect, useRef } from "react";
import Cart from "./Cart";
import PostTagline from "./PostTagline";
import ThreeCarts from "./ThreeCarts";
import SixCarts from "./SixCarts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeRightOnScroll } from "../animations/gsap";

gsap.registerPlugin(ScrollTrigger);

const MainSection = () => {

    const sectionRef = useRef(null);
    const imageRef = useRef(null);


    useEffect(()=> {

        fadeRightOnScroll('.right');

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 }, // Start: Invisible + Slightly Down
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%", // Jab section viewport ke 80% tak aaye, tab start ho
                end: "top 50%",
                toggleActions: "play none none reverse", // Jab wapas scroll ho, fade out ho
              },
            }
          );

        //   img ref 
        gsap.fromTo(
            imageRef.current,
            { x: -200, opacity: 0 }, // Start position (left side + fade)
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: imageRef.current,
                start: "top 80%", // Jab image viewport ke 80% tak aaye
                end: "top 50%",
                toggleActions: "play none none reverse",
              },
            }
          );
    },[])
  return (
    <div className="md:py-22 md:px-20 px-[20px] py-[40px] bg-gray-100">
      {/*  on mobile  */}
      <div className="absoluteText text-black  rounded-[10px] w-full p-[20px] bg-white block md:hidden mb-[50px]">
        <p>
          <b>Development</b> <span className="text-gray-800">10 feb 2025</span>
        </p>
        <h2 className="pt-5 md:text-2xl text-xl font-bold">
          How to make a Game Look More Attractive with New Vr & Al Technology
        </h2>
        <p className="py-4 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          obcaecati molestiae nesciunt! Eaque sed architecto vero iure at quia
          voluptatem aliquam! At optio facere deserunt.
        </p>
        <button className="px-3 py-1 border-1 rounded-md">Read More</button>
      </div>

      {/* textOnImg is here */}
      <div ref={sectionRef} className="textOnImg w-full  md:h-[500px] h-[300px] bg-[url(/assets/figma-7.5.jpg)] bg-center bg-cover rounded-[10px] relative md:mb-40">
        {/* absoluteText is here  */}
        <div className="absoluteText text-black md:p-6 p-[20px] rounded-[10px] md:w-[70%] w-full  bg-white md:absolute hidden md:block right-0 bottom-[-120px]">
          <p>
            <b>Development</b>{" "}
            <span className="text-gray-800">10 feb 2025</span>
          </p>
          <h2 className="pt-5 text-2xl font-bold">
            How to make a Game Look More Attractive with New Vr & Al Technology
          </h2>
          <p className="py-4 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            obcaecati molestiae nesciunt! Eaque sed architecto vero iure at quia
            voluptatem aliquam! At optio facere deserunt.
          </p>
          <button className="px-3 py-1 border-1 rounded-md  hover:bg-black hover:text-white translate-all cursor-pointer">Read More</button>
        </div>
      </div>

      {/* recentPostSection is here*/}
      <div className="recentPostSection">
        {/* recentPostSectionTop is here  */}
        <PostTagline postValue="Our Recent Post" />

        {/* LR-ImgText is here  */}
        <div className="LR-ImgText md:flex justify-between gap-[50px] pb-15 hidden">
          {/* LR-Img is here  */}
          {/* <div className="LR-Img w-[150%] h-[400px] bg-orange-500"></div> */}
          <img ref={imageRef} src="/assets/figma-7.jpg" alt="" srcset="" />

          {/* LR-Text is here  */}
          <div className="LR-Text right">
            <p>
              <b>Development</b>{" "}
              <span className="text-gray-800">10 feb 2025</span>
            </p>
            <h2 className="pt-5 text-3xl font-bold">
              How to make a Game Look More Attractive with New Vr & Al
              Technology
            </h2>
            <p className="py-4 text-[1.1rem] mb-[35px]">
              Lorem ipsum dolor sit consectetur adipisicing elit. Dolore
              obcaecati molestiae nesciunt! Eaque sed architecto vero iure
              eseruntamet consectetur adipisicing elit. Dolore obcaecati
              molestiae nesciunt! Eaque sed architecto vero iure at quia
              voluptatem aliquam! At optio facere deserunt.
            </p>
            <button className="px-3 py-1 border-1 rounded-md hover:bg-black hover:text-white translate-all cursor-pointer">Read More</button>
          </div>
        </div>

        {/* threeBoxes is here  */}
        <ThreeCarts />

        <PostTagline postValue="Our Popular Post" />

        {/* threeBoxes is here  */}
        <SixCarts />
      </div>
    </div>
  );
};

export default MainSection;
