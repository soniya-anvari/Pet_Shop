import React, { useEffect, useState } from "react";
import {
  getDogDryFoodsBrands,
  getDogDryFoods,
} from "../../../getData/GetDataDog";
import banner from "../../../assets/images/dog_dry_food_banner.jpg.webp";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Products from "../../../Components/CatDryFood/Products";
function DogDryFoods() {
  const [dogDryFoods, setDogDryFoods] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["fetchDogDryFoods"],
    queryFn: getDogDryFoods,
    onError: (error) => {
      console.log("error", error);
    },
  });
  const {
    data: dataBrands,
    error: errorBrands,
    isLoading: loadingBrands,
  } = useQuery({
    queryKey: ["fetchBrandsWetFood"],
    queryFn: () => getDogDryFoodsBrands(),
    onError: (error) => {
      console.log("error", error);
    },
  });
  useEffect(() => {
    if (dataBrands) {
      setBrands(dataBrands);
      console.log(dataBrands);
    }
  }, [dataBrands]);
  useEffect(() => {
    if (dataProduct) {
      setDogDryFoods(dataProduct);
    }
  }, [dataProduct]);
  return (
    <div className='bg-bg_gray_pages pt-10'>
      <div className='w-11/12 md:w-10/12 m-auto '>
        <img src={banner} alt='banner' className='rounded-[30px]' />

        <div className='flex text-[gray] text-clamp mt-10'>
          <Link>پت شاپ انلاین/ </Link>
          <Link>محصولات سگ/</Link>
          <Link>غذای سگ</Link>
          <p>/ غذای خشک سگ</p>
        </div>
        <Products brands={brands} products={dogDryFoods} />
      </div>
    </div>
  );
}

export default DogDryFoods;
