import React from "react";

const PostTagline = (props) => {
  return (
    <div className="recentPostSectionTop flex justify-between items-center my-[40px] md:my-15">
      <h2 className="font-bold md:text-4xl text-[1.3rem]">{props.postValue}</h2>
      <button className="bg-purple-500 rounded-md md:px-4 px-[10px] py-1 text-white text-[0.7rem] md:text-xl">
        View All
      </button>
    </div>
  );
};

export default PostTagline;
