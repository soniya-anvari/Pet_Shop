import React from "react";

function Veterinarian() {
  return (
    <div className='flex flex-col md:flex md:flex-row mt-12   md:h-[460px] w-10/12 m-auto  gap-5'>
      <div className='w-full md:w-1/2  flex flex-col gap-5 order-2 md:order-1 '>
        <div
          className='h-[200px] w-full rounded-[30px] p-5 '
          style={{
            backgroundImage:
              "url(https://petabad.com/uploads/1ca1b2127a7e444498f2ed2c10554ef3.w_550,h_242,r_k.jpg.webp)",
          }}>
          <p className='text-brown_text_color'>Dental Care</p>
          <h4 className='text-brown_text_color text-clamp_super_des mt-2 font-Iran_Bold'>
            ست مسواک و خمیر دندان{" "}
          </h4>
          <button className='text-brown_text_color border-[3px] border-brown_text_color px-5 mt-4 rounded-[20px] py-1'>
            خرید
          </button>
        </div>
        <div className='flex h-[250px] gap-3   '>
          <div
            className='w-1/2  rounded-[30px] p-5'
            style={{
              backgroundImage:
                "url(https://petabad.com/uploads/47b424c922ef40e1beadbd6a4a236a1a.w_270,h_307,r_k.jpg.webp)",
            }}>
            <p className='text-brown_text_color'>Gim Cat</p>
            <h4 className='text-brown_text_color text-clamp_super_des mt-2 font-Iran_Bold'>
              گربه های خوشحال تر
            </h4>
            <p className='text-brown_text_color mt-2'>با محصولات جیم کت</p>
            <button className='text-brown_text_color border-[3px] border-brown_text_color px-5 md:mt-4 rounded-[20px] py-1'>
              خرید
            </button>
          </div>
          <div
            className='w-1/2 rounded-[30px] p-5 '
            style={{
              backgroundImage:
                "url(https://petabad.com/uploads/12a7dbf8493d4f628d79fd0f9868f5ff.w_270,h_307,r_k.jpg.webp)",
            }}>
            <p className='text-blue_text_color'>Exclusive</p>
            <h4 className='text-blue_text_color text-clamp_super_des mt-2 font-Iran_Bold'>
              باکس های مخصوص پت آباد
            </h4>
            <p className='text-blue_text_color mt-2'>پیشی و هاپو</p>
            <button className='text-blue_text_color  border-[3px] border-blue_text_color px-5 md:mt-4 rounded-[20px] py-1'>
              خرید
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            "url(https://petabad.com/uploads/938d59fbf88b44c39d783d67ce734925.w_552,h_558,r_k.jpg.webp)",
        }}
        className='w-full bg-cover bg-center order-1 md:order-2 h-[400px] md:h-[460px] mt-5 md:mt-0 md:w-1/2 rounded-[30px] p-7'>
        <h4 className='text-text_orange font-Iran_Bold text-clamp_des'>
          بر اساس وضعیت سلامتی
        </h4>
        <h3 className='text-[#242bb9] font-Iran_Bold text-clamp_intro mt-5'>
          ​برنامه اختصاصی
          <br /> سگ و گربه
        </h3>
        <h5 className='text-[#242bb9] font-Iran_Bold  mt-2'>
          اجرای برنامه تحت نظر و پایش دامپزشک
        </h5>
        <button className='text-white bg-text_orange border-blue_text_color  px-5 mt-4 md:mt-9 rounded-[20px] py-2'>
          دریافت مشاوره
        </button>
      </div>
    </div>
  );
}

export default Veterinarian;
