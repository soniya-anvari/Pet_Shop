import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../constant/MyLinks";
import "ionicons/icons";
const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const location = useLocation();
  useEffect(() => {
    setSubHeading("");
    setHeading("");
  }, [location.pathname]);

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className='px-3 text-left md:cursor-pointer group'>
            <h3
              className='py-7 flex gap-2 justify-between items-center md:pr-0 pr-5 group'
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}>
              {link.name}
              <span className='text-xl md:hidden inline'>
                {heading === link.name ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-chevron-up'
                    viewBox='0 0 16 16'>
                    <path
                      fill-rule='evenodd'
                      d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-chevron-down'
                    viewBox='0 0 16 16'>
                    <path
                      fill-rule='evenodd'
                      d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                    />
                  </svg>
                )}
              </span>
              <span className='text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-chevron-down'
                  viewBox='0 0 16 16'>
                  <path
                    fill-rule='evenodd'
                    d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                  />
                </svg>
              </span>
            </h3>
            {link.submenu && (
              <div>
                <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                  <div className='py-3'>
                    <div
                      className='w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45'></div>
                  </div>
                  <div className='bg-white p-5 grid grid-cols-3 gap-10'>
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h3 className='text-lg font-semibold'>
                          {mysublinks.Head}
                        </h3>
                        {mysublinks.sublink.map((slink) => (
                          <li className='text-sm text-gray-600 my-2.5'>
                            <Link
                              to={slink.link}
                              className='hover:text-primary'>
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}>
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h3
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className='py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5'>
                    {slinks.Head}

                    <span className='text-xl md:mt-1 md:ml-2 inline'>
                      {subHeading === slinks.Head ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          class='bi bi-chevron-up'
                          viewBox='0 0 16 16'>
                          <path
                            fill-rule='evenodd'
                            d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          class='bi bi-chevron-down'
                          viewBox='0 0 16 16'>
                          <path
                            fill-rule='evenodd'
                            d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                          />
                        </svg>
                      )}
                    </span>
                  </h3>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}>
                    {slinks.sublink.map((slink) => (
                      <li className='py-3 pl-14'>
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
