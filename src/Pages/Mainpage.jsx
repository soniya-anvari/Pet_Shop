import React from "react";
import TopeBanner from "../Components/TopeBanner";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import ProductsBannerBoxs from "../Components/ProductsBannerBoxs";
import PetOff from "../Components/PetOff";
import PopularCategory from "../Components/popularCategori";
import DiscountProducts from "../Components/DiscountProducts";
import CatProducts from "../Components/CatProducts";
import DogProducts from "../Components/DogProducts";
import Veterinarian from "../Components/Veterinarian";
import Brands from "../Components/Brands";
import Recommended from "../Components/Recommended";
import ContactBox from "../Components/ContactBox";
import Footer from "../Layout/Footer";
function Mainpage() {
  return (
    <div>
      <TopeBanner />
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default Mainpage;
