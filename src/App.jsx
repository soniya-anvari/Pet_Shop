import "./App.css";
import CatDryFood from "./Pages/CatDryFood";
import CatWetFoodPouch from "./Pages/CatWetFoodPouch";
import Mainpage from "./Pages/Mainpage";
import CatRewardFood from "./Pages/CatFoodRewards";
import WaterAndFoodContianerCat from "./Pages/CatCare/WaterAndFoodContainer";
import CatBinSoil from "./Pages/CatCare/CatBinSoil";
import CatShampoo from "./Pages/CosmeticsAndHygieneCat/ShampooCat";
import DogDryFoods from "./Pages/dog/DogFoods/DogDryFoods";
import DogWetFoods from "./Pages/dog/DogFoods/DogWetFoods";
import { Routes, Route } from "react-router-dom";
import DogRewardFoods from "./Pages/dog/DogFoods/DogRewardFoods";
import DogCollar from "./Pages/dog/DogCare/DogCollar";
import UnderlayPad from "./Pages/DogHealth/UnderlayPad";
import BirdsFood from "./Pages/Birds/BirdsFood";
import BirdsCare from "./Pages/Birds/BirdsCare";
import RodentFood from "./Pages/Rodent/RodentFood";
import AquaticFood from "./Pages/Aquatic/AquaticFood";
import AquaticCare from "./Pages/Aquatic/AquaticCare";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/shop/cat-dry-foods' element={<CatDryFood />} />
        <Route path='/shop/cat-wet-foods-pouch' element={<CatWetFoodPouch />} />
        <Route path='/shop/cat-Reward-foods' element={<CatRewardFood />} />
        <Route
          path='/shop/cat-food-and-water-container'
          element={<WaterAndFoodContianerCat />}
        />
        <Route path='/shop/cat-bil-soil' element={<CatBinSoil />} />
        <Route path='/shop/cat-shampoo' element={<CatShampoo />} />
        /////////////
        <Route path='/shop/dog-dry-foods' element={<DogDryFoods />} />
        <Route path='/shop/dog-wet-foods' element={<DogWetFoods />} />
        <Route path='/shop/dog-Reward-foods' element={<DogRewardFoods />} />
        <Route path='/shop/dog-Collar' element={<DogCollar />} />
        <Route path='/shop/dog-Underlay-pad' element={<UnderlayPad />} />
        /////////////
        <Route path='/shop/bird-food' element={<BirdsFood />} />
        <Route path='/shop/bird-care' element={<BirdsCare />} />
        ////////////
        <Route path='/shop/rodent-food' element={<RodentFood />} />
        <Route path='/shop/rodent-care' element={<RodentFood />} />
        /////////////
        <Route path='/shop/aquatic-food' element={<AquaticFood />} />
        <Route path='/shop/aquatic-care' element={<AquaticCare />} />
      </Routes>
    </>
  );
}

export default App;
