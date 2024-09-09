import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { api } from "../api/api";

function DogProducts() {
  const [dogProducts, setDogPeroducts] = useState([]);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const res = await api.get("/categories/dog-dry-food/search/");
        setDogPeroducts(res.data.data.products);
        console.log(res.data.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCatData();
  }, []);
  return (
    <div className='md:w-10/12 m-auto text-clamp_des'>
      <div className='flex gap-1  mt-10 ps-8 md:ps-0'>
        <h2 className='font-Iran_Bold '> محصولات سگ</h2>
      </div>
      <Slider Products={dogProducts} />
    </div>
  );
}

export default DogProducts;
