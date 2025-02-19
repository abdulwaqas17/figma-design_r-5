import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-100">
        <header className="md:pt-[80px] pt-[40px] md:pb-[70px] pb-[50px] md:px-[150px] px-[30px]">
          <div className="md:w-[400px] w-full text-center md:mx-auto ">
            <h2 className="font-black md:text-5xl text-2xl pb-[20px]">Get in touch</h2>
            <p className="leading-[25px]">
              Lorem rere fefe ipsum dolor sde ewit, amet consectetur
              adipisicing. dhdfi ewkjeiw{" "}
            </p>
          </div>

          <div className="flex justify-between pt-[50px] gap-[30px] flex-col md:flex-row">
            <div className="box md:w-[31%] w-full bg-white rounded-[10px] py-[30px] pb-[40px] flex  flex-col items-center">
              <div className="cir w-[60px] h-[60px] rounded-full bg-purple-700 text-white flex justify-center items-center">
                A
              </div>
              <h3 className="font-black py-3 text-xl">Office</h3>
              <p>In to the bussiness</p>
            </div>

            <div className="box md:w-[31%] w-full bg-white rounded-[10px] py-[40px]  pb-[50px] flex  flex-col items-center">
              <div className="cir w-[60px] h-[60px] rounded-full bg-purple-700 text-white flex justify-center items-center">
                A
              </div>
              <h3 className="font-black py-3 text-xl">Office</h3>
              <p>In to the bussiness</p>
            </div>
            <div className="box md:w-[31%] w-full bg-white rounded-[10px] py-[30px]  pb-[40px] flex  flex-col items-center">
              <div className="cir w-[60px] h-[60px] rounded-full bg-purple-700 text-white flex justify-center items-center">
                A
              </div>
              <h3 className="font-black py-3 text-xl">Office</h3>
              <p>In to the bussiness</p>
            </div>
          </div>
        </header>

        <section className="bg-[url(assets/figma-17.jpg)] bg-cover bg-center h-[400px] md:h-[500px] relative">
          <div className="form md:w-[40%] w-[84%] p-[20px] md:p-[40px] bg-white rounded-[20px] absolute top-[100px] md:top-[300px] md:left-[30%] left-[7%]">
            <div className="div flex justify-between gap-[20px] my-[13px]">
              <div>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="md:p-[5px] p-[2px] rounded-[4px] w-full border-1 border-black"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="md:p-[5px] p-[2px] rounded-[4px] w-full border-1 border-black"
                />
              </div>
            </div>

            <div className="div flex justify-between gap-[20px] my-[13px]">
              <div>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="md:p-[5px] p-[2px] rounded-[4px] w-full border-1 border-black"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="md:p-[5px] p-[2px] rounded-[4px] w-full border-1 border-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="">Message</label>
              <textarea
                rows="5"
                className="w-full p-[5px] rounded-[4px] border-1 border-black"
              ></textarea>
            </div>

            <div className="flex justify-center mt-[20px]">
              <button className="px-[30px] py-[10px] font-bold text-white bg-purple-700 ">
                Message
              </button>
            </div>
          </div>
        </section>

        <section className="h-[230px]"></section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
