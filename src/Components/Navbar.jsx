import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  const [num, setNum] = useState("-100%");
  const navigate = useNavigate();
  const logoRef = useRef(null);
  const navRef = useRef(null);



  // for adding animation 
  useEffect(() => {

    //logo ref
    gsap.from(logoRef.current, { opacity: 0, x: -50, duration: 1, delay: 0.1 });

    //ul ref
    gsap.from(navRef.current, { opacity: 0, y: -20, duration: 1 });

    
  


    // Navbar fade-in animation
    // gsap.from(navRef.current, {
    //   opacity: 0,
    //   y: -20,
    //   duration: 1,
    //   ease: "power2.out",
    // });

    // // Navbar scroll shrink effect
    // ScrollTrigger.create({
    //   start: "top -10px",
    //   end: "top -20px",
    //   onEnter: () => gsap.to(navRef.current, { backgroundColor: "white", height: "60px", duration: 0.3 }),
    //   onLeaveBack: () => gsap.to(navRef.current, { backgroundColor: "white", height: "80px", duration: 0.3 }),
    // });
  }, []);


  // for get path of the page
  const location = useLocation(); // ✅ Get current route
  console.log(location);

  const checkUser = () => {
    let isUser = window.localStorage.getItem("LoginUserID");

    console.log("login id", isUser);

    if (isUser) {
      console.log("login id", isUser);
      navigate("/profile");
    } else {
      alert("Kindly Signup First");
      navigate("/signup");
    }
  };

  return (
    <div  className="bg-white flex justify-between md:px-15 px-[20px] py-4 fixed top-0 left-0 z-10 w-full">
      <div className="logo" >
        <Link to="/">
          <img ref={logoRef}
            src="/assets/figma-9.jpg"
            alt="logo"
            className="w-[70px] md:w-[150px]"
          />
        </Link>

        {/* <div className="img w-[60px] h-[30px] bg-orange-500"></div> */}
      </div>

      <div className="rightNav hidden md:block" ref={navRef}>
        <ul className="flex gap-10 items-center">
          {/* <Link to="/signup">Sign Up</Link> */}
          <Link
            style={{ color: location.pathname == "/blog" ? "purple" : "black" }}
            to="/blog"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-purple-800 after:transition-all after:duration-500 hover:after:w-full text-[1.2rem] "
          >
            Blog
          </Link>
          <Link
            style={{
              color: location.pathname == "/about" ? "purple" : "black",
            }}
            to="/about"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-purple-800 after:transition-all after:duration-500 hover:after:w-full text-[1.2rem] "
          >
            About
          </Link>

          <p
            style={{
              color: location.pathname == "/profile" ? "purple" : "black",
            }}
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-purple-800 after:transition-all after:duration-500 hover:after:w-full text-[1.2rem] cursor-pointer "
            onClick={checkUser}
          >
            Profile
          </p>
          <Link to="/contact">
            <button className="bg-purple-700 cursor-pointer px-4 py-2 rounded-md font-bold text-white">
              Contact Us
            </button>
          </Link>
        </ul>
      </div>

      <div
        className="mobileNav text-purple-800 text-2xl md:hidden"
        onClick={() => (num == "-100%" ? setNum("0%") : setNum("-100%"))}
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      <div
        className="mobileMenu md:hidden bg-purple-800 fixed top-[60px] w-full transition-all duration-300"
        style={{ left: num }}
      >
        <ul className="text-center py-[30px] text-[1rem] font-bold">
          <Link
            className="py-[10px] block text-white hover:text-purple-800 hover:bg-white active:text-purple-800 active:bg-white"
            to="/"
          >
            Home
          </Link>
          <Link
            className="py-[10px] block text-white hover:text-purple-800 hover:bg-white active:text-purple-800 active:bg-white"
            to="/about"
          >
            About
          </Link>
          <Link
            className="py-[10px] block text-white hover:text-purple-800 hover:bg-white active:text-purple-800 active:bg-white"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="py-[10px] block text-white hover:text-purple-800 hover:bg-white active:text-purple-800 active:bg-white"
            to="/profile"
          >
            Profile
          </Link>
          <Link
            className="py-[10px] block text-white hover:text-purple-800 hover:bg-white active:text-purple-800 active:bg-white"
            to="/contact"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
