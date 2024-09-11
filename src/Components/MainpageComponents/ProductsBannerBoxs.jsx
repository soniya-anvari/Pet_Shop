import React from "react";
import { products } from "../../constant/Product";
import ProductBox from "./ProductBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/styles/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

function BannerBoxs() {
  return (
    <>
      <div className='hidden md:flex  md:w-10/12 m-auto mt-10 gap-10'>
        {products.map((product) => (
          <div key={product.id} className='w-1/3'>
            <ProductBox product={product} discount={false} />
          </div>
        ))}
      </div>

      <div className='md:hidden mt-10'>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className='mySwiper md:hidden'>
          {products.map((product) => (
            <SwiperSlide
              className='md:hidden py-20 px-5 bg-no-repeat bg-cover'
              key={product.id}
              style={{ backgroundImage: `url(${product.backGround})` }}>
              <h3
                className='w-1/2 font-Iran_Bold text-[1.5rem]'
                style={{ color: `${product.color}` }}>
                {product.title}
              </h3>
              <button
                style={{
                  color: `${product.color} `,
                  border: `3px solid ${product.color}`,
                }}
                className='px-9 py-1 rounded-[20px] mt-5'>
                خرید
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default BannerBoxs;
