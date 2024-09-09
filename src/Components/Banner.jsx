import React from "react";

function Banner() {
  return (
    <>
      <div className=' mt-10 p-28 hidden lg:flex flex-col bg-cover rounded-2xl lg:h-[400px] bg-no-repeat w-10/12 m-auto bg-[url(https://petabad.com/uploads/7809d86232eb42baaf7d9b57cc19daa1.w_1115,h_409,r_k.jpg.webp)]'>
        <h3 className='font-Iran_Bold text-text_orange  text-clamp_des'>
          تشویقی خوشمزه
        </h3>
        <h3 className='text-clamp_intro font-Iran_Bold text-blue_color mt-5'>
          {" "}
          برای سگ خوب
        </h3>
        <button className='text-right mt-7 bg-text_orange text-white py-3 px-12 rounded-[30px] w-fit'>
          خرید
        </button>
      </div>
      <div className='flex flex-col lg:hidden w-full  md:w-10/12 m-auto mt-10'>
        <img
          className='rounded-2xl h-[210px] md:h-fit'
          src='https://petabad.com/uploads/7809d86232eb42baaf7d9b57cc19daa1.w_1115,h_409,r_k.jpg.webp '
          alt='Banner'
        />
        <div>
          <div className='flex gap-6'>
            <h3 className='font-Iran_Bold text-text_orange mt-10  text-[1.3rem] md:text-[2rem]'>
              تشویقی خوشمزه
            </h3>
            <h3 className='text-[2rem] md:text-[3rem] pt-12 font-Iran_Bold text-blue_color mt-5'>
              {" "}
              برای سگ خوب
            </h3>
          </div>
          <button className='text-center  mt-7 bg-text_orange text-white py-3 px-12 rounded-[30px] w-fit'>
            خرید
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
