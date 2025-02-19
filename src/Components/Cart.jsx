import React from "react";

const Cart = (props) => {
  return (
    <div className="threeBoxesBox w-full md:w-[30%]">

      <img src={props.imgLink} alt="" className="w-full mb-4 rounded-[10px]" />
      {/* <div className="img h-[300px] bg-orange-500 mb-4 rounded-[10px]"></div> */}

      {props.detail}

      <h2 className="font-bold text-2xl pt-4">{props.heading}</h2>

      <p className="py-4">{props.para}</p>

      <p className="text-purple-900 text-xl font-bold">Read More ...</p>

    </div>
  );
};

export default Cart;
