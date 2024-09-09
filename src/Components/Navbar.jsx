import React from "react";

function Navbar() {
  return (
    <div className='w-full'>
      <div className='full md:w-10/12 flex justify-around m-auto items-center'>
        <div className='w-2/12'>
          <img
            src='https://petabad.com/uploads/a936259cbb5f4a438d2f7cb1c9927ff1.svg'
            alt='petshop-Logo'
            width='200px'
            height='50px'
          />
        </div>
        <div className='w-4/12'>
          <ul className='flex justify-around font-Iran_Bold'>
            <li className='flex items-center gap-2'>
              گربه{" "}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-compact-down'
                viewBox='0 0 16 16'>
                <path
                  fill-rule='evenodd'
                  d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67'
                />
              </svg>
            </li>
            <li className='flex items-center gap-2'>
              سگ{" "}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-compact-down'
                viewBox='0 0 16 16'>
                <path
                  fill-rule='evenodd'
                  d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67'
                />
              </svg>
            </li>
            <li className='flex items-center gap-2'>
              دسته بندی ها{" "}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-compact-down'
                viewBox='0 0 16 16'>
                <path
                  fill-rule='evenodd'
                  d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67'
                />
              </svg>
            </li>
            <li className='flex items-center gap-2'>
              برند ها{" "}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-compact-down'
                viewBox='0 0 16 16'>
                <path
                  fill-rule='evenodd'
                  d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67'
                />
              </svg>
            </li>
          </ul>
        </div>
        <div className='w-4/12'>
          <div className='flex border-[3px] box-border border-solid border-blue_color justify-between rounded-[70px] '>
            <input
              placeholder='جستجو در محصولات...'
              className='p-3 outline-none px-7'
              style={{ borderRadius: "0 70px 70px 0" }}
            />
            <button
              className='border-r-[3px] border-solid hover:bg-bg_orange transition ease duration-500 p-3 px-7 text-blue_color   border-blue_color'
              style={{ borderRadius: "70px 0 0 70px" }}>
              جستجو{" "}
            </button>
          </div>
        </div>
        <div className='2/12 flex  items-center gap-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            fill='currentColor'
            class='bi bi-basket3'
            viewBox='0 0 16 16'>
            <path d='M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z' />
          </svg>
          <div>
            <p className='text-pink_text_color pt-4 font-Iran_Bold'>
              ثبت سفارش تلفنی
            </p>
            <p>0219999999</p>
            <button>ورود/ثبت نام</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
