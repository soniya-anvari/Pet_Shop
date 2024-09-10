import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hiddn";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <nav className='bg-white'>
      <div className='flex flex-col md:flex-row w-full md:w-10/12 m-auto items-center font-medium justify-around'>
        <div className=' w-10/12 md:w-1/2  m-auto mt-10 flex gap-5 '>
          <div className='flex w-full md:w-4/12 items-center  justify-between'>
            <div className='order-2 md:order-1'>
              <img src={logo} alt='petshop-Logo' width='200px' height='50px' />
            </div>

            <div
              className='text-3xl w-full  md:hidden order-1'
              onClick={() => setOpen(!open)}>
              {!open && (
                <svg
                  style={{ cursor: "pointer" }}
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='26'
                  fill='currentColor'
                  class='bi bi-list'
                  viewBox='0 0 16 16'>
                  <path
                    fill-rule='evenodd'
                    d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5'
                  />
                </svg>
              )}
            </div>
          </div>
          <ul className='md:flex w-8/12 hidden  items-center  '>
            <NavLinks />
          </ul>
          <div className='md:block hidden'></div>
          {/* Mobile nav */}
          <ul
            className={`
md:hidden bg-white fixed inset-0 z-50 w-3/4 top-0 overflow-y-auto bottom-0 py-24 pl-4
duration-500 ${open ? "right-0" : "right-[-100%]"}
`}>
            <li
              className='py-7 px-4 z-50  text-black inline-block cursor-pointer'
              onClick={() => setOpen(!open)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-x-lg'
                viewBox='0 0 16 16'>
                <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z' />
              </svg>
            </li>
            <li>
              <Link to='/' className='py-7 px-3 text-black inline-block'>
                Home
              </Link>
            </li>
            <NavLinks />
            <div className='py-5'></div>
          </ul>
        </div>
        <div className='w-10/12 m-auto md:w-1/2 flex flex-col md:flex-row gap-4 '>
          <div className='w-full md:w-8/12 mt-10'>
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
          <div className='w-full md:w-4/12 flex items-center  gap-3 md:mt-5 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='currentColor'
              class='bi bi-basket3'
              viewBox='0 0 16 16'>
              <path d='M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z' />
            </svg>
            <div className='flex flex-row md:flex-col justify-between   w-full md:w-3/4 md:gap-0 items-center  md:items-start mt-5 md:mt-0'>
              <div className='flex flex-col'>
                <p className='text-pink_text_color  pt-4 font-Iran_Bold'>
                  ثبت سفارش تلفنی
                </p>
                <p>0219999999</p>
              </div>
              <Link className='text-text_orange md:text-black'>
                ورود/ثبت نام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
