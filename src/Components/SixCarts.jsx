import React from "react";
import Cart from "./Cart";

const SixCarts = () => {
  return (
    <div className="sixCarts flex justify-between flex-wrap gap-[40px]">
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

      <Cart
        authorName="Blog Website"
        postDate="May 13, 2025"
        heading="Who is the Best Singer on Char? KNow him?"
        para="Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime."
        imgLink="/assets/figma-6.jpg"
      />

      <Cart
        authorName="Blog Website"
        postDate="May 13, 2025"
        heading="How to Start Import Buniess from Home"
        para="Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime."
        imgLink="/assets/figma-5.jpg"
      />

      <Cart
        authorName="Blog Website"
        postDate="May 13, 2025"
        heading="Make Some Drink With Chocaltes Chocaltes with Milk"
        para="Lorem ipsum dolor sit amet consectetur labore amet incidunt numquam illum. Consequuntur aspernatur expedita repellendus asperiores maxime."
        imgLink="/assets/figma-4.jpg"
      />
    </div>
  );
};

export default SixCarts;
