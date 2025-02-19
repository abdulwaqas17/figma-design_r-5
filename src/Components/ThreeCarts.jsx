import React from "react";
import Cart from "./Cart";

const ThreeCarts = () => {
  return (
    <div className="threeBoxes flex justify-between flex-wrap gap-[40px]">
      <Cart
        detail={
          <p className="font-bold">
            Travel10 <span className="font-normal text-gray-700">jan 2025</span>
          </p>
        }
        heading="8 Rules of Travlling in Sea You Need To Know"
        para="Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime."

        imgLink = '/assets/figma-14.jpg'
      />

      <Cart
        detail={
          <p className="font-bold">
            Travel10 <span className="font-normal text-gray-700">jan 2025</span>
          </p>
        }
        heading="How to get a Strong Portfolio and get a Job in UI/UX"
        para="Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime."

        imgLink = '/assets/figma-11.jpg'
      />

      <Cart
        detail={
          <p className="font-bold">
            Travel10 <span className="font-normal text-gray-700">jan 2025</span>
          </p>
        }
        heading="How to be Professinal Fottballer in 2025"
        para="Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime."

        imgLink = '/assets/figma-12.jpg'
      />

      {/* <img src="" alt="" />
                        <div className="img w-[300px] h-[300px] bg-orange-500"></div>
                        <p className="font-bold">Travel10 <span className="font-normal text-gray-700">jan 2025</span></p>

                        <h2 className="font-bold text-2xl">8 Rules of Travlling in Sea You Need To Know</h2>

                        <p>
                        Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime.
                        </p>

                        <a href="">Read More...</a> */}
    </div>
  );
};

export default ThreeCarts;
