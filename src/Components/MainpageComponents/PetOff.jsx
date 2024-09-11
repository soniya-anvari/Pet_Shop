import { api } from "../../api/api";

import { useEffect, useState } from "react";
import SliderOff from "./SliderOff";
function PetOff() {
  const [offProducts, setOffPeroducts] = useState([]);
  useEffect(() => {
    const fetchOffData = async () => {
      try {
        const res = await api.get("/categories/cat-dry-foods/search/");
        setOffPeroducts(res.data.data.products);
        console.log(res.data.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOffData();
  }, []);
  return (
    <div className='md:w-10/12 m-auto  text-clamp_des'>
      <div className='flex gap-1  my-10 ps-8 md:ps-0'>
        <img src='https://petabad.com/uploads/1bd90a577fd64bf09d838d60acf84a89.svg' />
        <h2 className='font-Iran_Bold '>پت اف</h2>
        <img src='https://petabad.com/uploads/1bd90a577fd64bf09d838d60acf84a89.svg' />
      </div>
      <SliderOff offProducts={offProducts} />
    </div>
  );
}

export default PetOff;
