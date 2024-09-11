import { configureStore } from "@reduxjs/toolkit";
import BrandsReducer from "../features/BrandsSlice";
const store = configureStore({
  reducer: {
    brands: BrandsReducer,
  },
});
export default store;
