import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row gap-[60px] md:p-20 md:pl-25 py-[50px] px-[20px] bg-purple-500 text-white">
      <div className="heroLeft w-full">
        <h3 className="md:text-2xl font-bold">Featured Post</h3>
        <h1 className="md:text-5xl font-bold pt-10 pb-5">
          How Ai Will Changed The Future
        </h1>
        <p className="pb-5 md:leading-[26px] md:w-[450px] text-[1.1rem]">
          Lorem ipsum dolor sit. Explicabo aspernatur dolor rem fugit fugiat, a,
          facere harum provident modi quos minima quam, culpa doloremque eaque
          molestiae et at distinctio omnis.
        </p>
        <button className="bg-white text-black px-[25px] py-[8px] mt-2 rounded-md text-[1rem]">
          Read More
        </button>
      </div>
      <div className="heroRight">
        <img
          src="/assets/figma-8.jpg"
          alt="figma img"
          className="md:w-[800px] "
        />
        {/* <div className="img w-[400px] h-[400px] bg-orange-500"></div> */}
      </div>
    </div>
  );
};

export default Hero;
