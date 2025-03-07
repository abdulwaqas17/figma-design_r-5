import React, { useState } from "react";
import { useNavigate } from "react-router";

const Cart = (thisAnObj) => {

  const [myPostID,setMyPostID] = useState(null);
  const navigate = useNavigate();

  const postFunc = ()=> {

    console.log('thisAnObj.id ==>',thisAnObj.id);
    window.localStorage.setItem('postID',thisAnObj.id)

    // setMyPostID(thisAnObj.id);
    if (thisAnObj.id !== null && thisAnObj.id !== undefined) {
      navigate('/post');
    } else{
      alert('This blog could not show')
    }
  // aik comp se dusry cmp m data bhjna h lekin dono aik dusray use nhe ho rhay ? contextApi Ya prop Ya kuch aur
  }

  return (
    <div className="threeBoxesBox w-full md:w-[30%]" id={thisAnObj.id}>

      <img src={thisAnObj.imgLink} alt="" className="w-full mb-4 rounded-[10px]" />
      {/* <div className="img h-[300px] bg-orange-500 mb-4 rounded-[10px]"></div> */}

      {thisAnObj.detail}

      <h2 className="font-bold text-2xl pt-4">{thisAnObj.heading}</h2>

      <p className="py-4">{thisAnObj.para}</p>

      <p className="text-purple-900 text-xl font-bold" onClick={postFunc}>View Post ...</p>

    </div>
  );
};

export default Cart;
