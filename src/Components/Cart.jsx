import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fadeUpOnScroll } from "../animations/gsap";

const Cart = (thisAnObj) => {
  const [myPostID, setMyPostID] = useState(null);
  const navigate = useNavigate();

  useEffect(()=> {

    fadeUpOnScroll('.myCarts')

  },[])

  const postFunc = (param) => {
    // console.log('thisAnObj.id ==>',thisAnObj.id);

    // setMyPostID(thisAnObj.id);
    if (param !== null && param !== undefined) {
      window.localStorage.setItem("postID", param);
      console.log("switch");
      navigate("/post");
    } else {
      alert("This blog could not show");
    }
    // aik comp se dusry cmp m data bhjna h lekin dono aik dusray use nhe ho rhay ? contextApi Ya prop Ya kuch aur
  };

  return (
    <div
      className="myCarts w-full md:w-[30%] bg-white rounded-[10px]"
      id={thisAnObj.id}
    >
      <img
        src={thisAnObj.imgLink}
        alt=""
        className="w-full mb-4 rounded-[10px] h-[260px] md:h-[330px]"
      />
      {/* <div className="img h-[300px] bg-orange-500 mb-4 rounded-[10px]"></div> */}

      <div className="px-[15px] pb-[15px]">

        <p className="font-bold">
          By {thisAnObj.authorName}
          <span className="font-normal pl-[17px] text-gray-700">
            {thisAnObj.postDate}
          </span>
        </p>

        <h2 className="font-bold text-2xl pt-4">{thisAnObj.heading}</h2>

        <p className="py-4">{thisAnObj.para}</p>

        <p
          className="text-[#7213df] text-xl font-bold cursor-pointer"
          onClick={() => postFunc(thisAnObj.id)}
        >
          View Blog ...
        </p>
      </div>
    </div>
  );
};

export default Cart;
