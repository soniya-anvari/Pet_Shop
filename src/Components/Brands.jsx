import React from "react";
import brand1 from "../assets/images/brand1.png.webp";
import brand2 from "../assets/images/brand2.png.webp";
import brand3 from "../assets/images/brand3.png.webp";
import brand4 from "../assets/images/brand4.jpeg.webp";
import brand5 from "../assets/images/brand5.png.webp";
import brand6 from "../assets/images/brand6.png.webp";

function Brands() {
  return (
    <div className='w-10/12 m-auto mt-12 '>
      <h2 className='font-Iran_Bold text-clamp_des '>
        برند‌های معتبر در پت شاپ
      </h2>
      <div className='flex flex-wrap md:flex-nowrap w-full gap-2 md:gap-5 justify-center py-14 '>
        <img src={brand1} className='w-1/6  h-[40px] md:h-[80px]' />
        <img src={brand2} className='w-1/6 h-[40px] md:h-[80px]' />
        <img src={brand3} className='w-1/6 h-[40px] md:h-[80px]' />
        <img src={brand4} className='w-1/6 h-[40px] md:h-[80px]' />
        <img src={brand5} className='w-1/6 h-[40px] md:h-[80px]' />
        <img src={brand6} className='w-1/6 h-[40px] md:h-[80px]' />
      </div>
    </div>
  );
}

export default Brands;
