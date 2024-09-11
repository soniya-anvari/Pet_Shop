import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  loading: false,
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.brands = action.payload;
    },
  },
});
export default brandsSlice.reducer;
export const { setData } = brandsSlice.actions;
