import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { api } from "../api/api";

function Recommended() {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const res = await api.get("/categories/Cat-food-rewards/search/");
        setRecommendedProducts(res.data.data.products);
        console.log(res.data.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCatData();
  }, []);
  return (
    <div className='md:w-10/12 m-auto text-clamp_des'>
      <div className='flex gap-1   ps-8 md:ps-0'>
        <h2 className='font-Iran_Bold '> ​​پیشنهاد شده برای شما</h2>
      </div>
      <Slider Products={recommendedProducts} />
    </div>
  );
}

export default Recommended;
