import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import PostTagline from "../../Components/PostTagline";
import ThreeCarts from "../../Components/ThreeCarts";
import Footer from "../../Components/Footer";
import Cart from '../../Components/Cart'
import { fadeDownOnScroll, fadeLeftOnScroll, fadeRightOnScroll, fadeUpOnScroll, visibleOnScroll } from "../../animations/gsap";

const About = () => {


  useEffect(()=> {

    visibleOnScroll('.visible');
    fadeLeftOnScroll('.left')
    fadeRightOnScroll('.right')
    fadeUpOnScroll('.up')
  },[])


  return (
    <div>
      <Navbar />

      <main className="bg-gray-100 p-[20px] md:p-[50px] mt-[60px] md:mt-[70px]">
        <section className="md:pl-[120px] pl-[20px] pr-[30px] md:pr-[100px]">
          <h3 className="font-black">
            Hello <span className="pl-[10px] text-gray-500">React</span>
          </h3>
          <h2 className="py-[20px] font-bold text-2xl md:text-4xl md:leading-[50px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur bl
            quisquam!
          </h2>
        </section>

        <section>
          <div className="flex justify-center my-[20px]">
            <img className="visible" src="/assets/figma-7.5.jpg" alt="" />
          </div>
        </section>

        <section className="md:px-[115px] md:p-[30px] text-[0.8rem] md:text-[1rem]">
          <p className="right pb-[25px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dignissimos quas, corporis libero nostrum odio qui
            veritatis praesentium minus voluptate, sint tempora dolorem eum
            similique. Nam magni nisi perferendis praesentium!
          </p>

          <p className="right">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dignissimos quas, corporis libero nostrum odio qui
            veritatis praesentium minus voluptate, sint tempora dolorem eum
            similique. Nam magni nisi perferendis praesentium! consectetur,
            adipisicing elit. Reprehenderit dignissimos quas, corporis libero
            nostrum odio qui veritatis praesentium minus volupati debitis, ipsa
            dolorem excepturi nesciunt earum, soluta numquam quod deserunt
            sapiente ut modi nemati debitis, ipsa dolorem excepturi nesciunt
            earum, soluta numquam quod deserunt sapiente ut modi nemtate,
            sintati debitis, ipsa dolorem excepturi nesciunt earum, soluta
            numquam quod deserunt sapiente ut modi nem
          </p>

          <div className="md:my-[50px] my-[30px] left">
            <div className="pl-[13px] pt-[3px] ml-[30px] h-[100px] border-l-[#7213df] border-l-[5px] h">
              <p className="md:text-2xl text-gray-700 italic md:leading-[45px] text-[.92rem]">
                "Lorem ipsum dolor sit amet onsectetur, adipisicing elit.
                Consequatur libero non expedita et debitis ab perspiciatis odio.
                Inci consectetur, adipisicing elit. Consequatuunt"
              </p>
            </div>
            <p className="font-bold md:text-xl pl-[50px] md:pl-[60px] pt-[10px] md:pt-[20px] text-[1rem]">
              - by Lorem Inpusm
            </p>
          </div>

          <p className="right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            alias consectetur earum aperiam, fugit, tempore debitis qui numquam
            nostrum excepturi accusantium, saepe reiciendis asperiores? Sapiente
            modi sint exercitationem dicta voluptas.l Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facilis alias, ullam obcaecati
            debitis, ipsa dolorem excepturi nesciunt earum, soluta numquam quod
            deserunt sapiente ut modi nematiati debitis, ipsa dolorem excepturi
            nesciunt earum, soluta numquam quod deserunt sapiente ut modi nemati
            debitis, ipsa dolorem excepturi nesciunt earum, soluta numquam quod
            deserunt sapiente ut modi nem debitis, ipsa dolorem excepturi
            nesciunt earum, soluta numquam quod deserunt sapiente ut modi nemo
            ipsum magni suscipit itaque!
          </p>

          <section className="flex justify-center my-[40px]">
            <div className="visible md:w-[75%] w-full md:h-[320px] h-[250px] bg-[url(assets/figma-16.jpg)] bg-cover bg-center rounded-[16px]"></div>
          </section>

          <p className="up">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
            laboriosam nihil recusandae delectus veniam voluptate esse ipsum cum
            temporibus ab, soluta error. Atque vero dignissimos incidunt error.
            Voluptatum, quis accusantium?. Atque vero dignissimos incidunt
            error. Voluptatum, quis accusantium?. Atque vero dignissimos
            incidunt error. Voluptatum, quis accusantium?
          </p>
        </section>

        <section>
          <PostTagline postValue="Popular Post" />

          <div className="flex justify-between flex-wrap gap-[40px]">
            <Cart
              authorName="Blog Website"
        postDate="May 13, 2025"
              
              heading="Train Or Bus? Journey Which One Suit"
              para="Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime."
              imgLink="/assets/figma-3.jpg"
            />

            <Cart
              authorName="Blog Website"
        postDate="May 13, 2025"
              
              heading="Best Website to reserch for your new Job"
              para="Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime."
              imgLink="/assets/figma-2.jpg"
            />

            <Cart
              authorName="Blog Website"
        postDate="May 13, 2025"
              
              heading="How to be a Dancer in 2025 With Popuar skills"
              para="Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime."
              imgLink="/assets/figma-1.jpg"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
