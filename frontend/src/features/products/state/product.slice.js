import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    sellerProducts: [],
    products: [],
  },
  reducers: {
    setSellerProducts: (state, actions) => {
      state.sellerProducts = actions.payload;
    },
    setProducts: (state, actions) => {
      state.products = actions.payload;
    },
  },
});

export const { setSellerProducts, setProducts } = productSlice.actions;
export default productSlice.reducer;
