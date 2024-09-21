import React from "react";
import TopeBanner from "../Components/MainpageComponents/TopeBanner";
import Banner from "../Components/MainpageComponents/Banner";
import ProductsBannerBoxs from "../Components/MainpageComponents/ProductsBannerBoxs";
import PetOff from "../Components/MainpageComponents/PetOff";
import PopularCategory from "../Components/MainpageComponents/popularCategori";
import DiscountProducts from "../Components/MainpageComponents/DiscountProducts";
import CatProducts from "../Components/MainpageComponents/CatProducts";
import DogProducts from "../Components/MainpageComponents/DogProducts";
import Veterinarian from "../Components/MainpageComponents/Veterinarian";
import Brands from "../Components/MainpageComponents/Brands";
import Recommended from "../Components/MainpageComponents/Recommended";
import ContactBox from "../Components/MainpageComponents/ContactBox";
function Mainpage() {
  return (
    <div>
      <Banner />
      <ProductsBannerBoxs />
      <PetOff />
      <PopularCategory />
      <DiscountProducts />
      <CatProducts />
      <DogProducts />
      <Veterinarian />
      <Brands />
      <Recommended />
      <ContactBox />
    </div>
  );
}

export default Mainpage;
