import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: null,
    currency: null,
    items: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload?.items || [];
      state.totalPrice = action.payload?.totalPrice || 0;
      state.currency = action.payload?.currency || "INR";
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    incrementItemCart: (state, action) => {
      const { productId, variantId } = action.payload;

      state.items = state.items.map((item) => {
        const currentVariantId = typeof item.variant === 'object' ? item.variant._id : item.variant;
        if (item.product._id === productId && currentVariantId === variantId) {
          // Calculate item price to adjust total
          let variantDetail = null;
          if (item.product?.variants) {
            variantDetail = Array.isArray(item.product.variants)
              ? item.product.variants.find(v => v._id === currentVariantId)
              : item.product.variants;
          }
          const priceObj = item.price ?? variantDetail?.price ?? item.product?.price;
          const itemPrice = priceObj?.amount ?? (typeof priceObj === 'number' ? priceObj : 0);
          
          state.totalPrice = (state.totalPrice || 0) + itemPrice;

          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },
    decrementItemCart: (state, action) => {
      const { productId, variantId } = action.payload;

      state.items = state.items.map((item) => {
        const currentVariantId = typeof item.variant === 'object' ? item.variant._id : item.variant;
        if (item.product._id === productId && currentVariantId === variantId) {
          // Calculate item price to adjust total
          let variantDetail = null;
          if (item.product?.variants) {
            variantDetail = Array.isArray(item.product.variants)
              ? item.product.variants.find(v => v._id === currentVariantId)
              : item.product.variants;
          }
          const priceObj = item.price ?? variantDetail?.price ?? item.product?.price;
          const itemPrice = priceObj?.amount ?? (typeof priceObj === 'number' ? priceObj : 0);
          
          state.totalPrice = Math.max(0, (state.totalPrice || 0) - itemPrice);

          return { ...item, quantity: Math.max(1, item.quantity - 1) };
        } else {
          return item;
        }
      });
    },
  },
});

export const { items, setCart, addItem, incrementItemCart, decrementItemCart } =
  cartSlice.actions;

export default cartSlice.reducer;
