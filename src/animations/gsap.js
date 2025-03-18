import { select } from "@material-tailwind/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



// fadeUpOnScroll
export const fadeUpOnScroll = (selector) => {
  gsap.utils.toArray(selector).forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 50 }, // Start: Hidden & Down
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });


};



//fadeDownOnScroll
export const fadeDownOnScroll = (selector) => {
  gsap.utils.toArray(selector).forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: -50 }, // Start: Hidden & Down
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });


};



//fadeLeftOnScroll
export const fadeLeftOnScroll = (selector) => {
  gsap.utils.toArray(selector).forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -50 }, // Start: Hidden & Down
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });


};


//fadeRightOnScroll
export const fadeRightOnScroll = (selector) => {
  gsap.utils.toArray(selector).forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 50 }, // Start: Hidden & Down
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });


};


// scaleOnScroll
export const scaleOnScroll = (selector) => {
    gsap.utils.toArray(selector).forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, scale: 0.8, }, // Start: Hidden & Down
          {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    
}
