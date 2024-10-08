import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

import "../../assets/styles/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { shorten_text } from "../../helper/helper";
function Slider({ Products }) {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        slidesOffsetAfter={30}
        modules={[Navigation, Mousewheel, Keyboard]}
        className='mySwiper '>
        {Products?.map((product) => (
          <SwiperSlide
            key={product.id}
            className='text-center  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[20px] py-5 mt-1'>
            <img src={product.images.main.url[0]} className='w-8/12 m-auto' />
            <p className='text-[0.85rem] font-Iran_Bold mt-3'>
              {shorten_text(product.title_fa)}...
            </p>

            <p className='mt-2 text-[1rem]'>
              {product.default_variant.price.rrp_price / 10} تومان
            </p>
            <button className='w-10/12 m-auto mt-5 text-[16px] rounded-3xl bg-bg_btn py-1 px-4 border border-text_orange text-text_orange'>
              افزودن
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
