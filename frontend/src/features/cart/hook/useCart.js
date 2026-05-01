import {
  addItem,
  getCart,
  incrementItemCartApi,
  decrementItemCartApi,
} from "../services/cart.api";
import {
  incrementItemCart,
  setCart,
  decrementItemCart,
} from "../state/cart.slice";
import { useDispatch } from "react-redux";

export const useCart = () => {
  const dispatch = useDispatch();

  async function handleAddItem({ productId, variantId }) {
    const data = await addItem({ productId, variantId });

    return data;
  }

  async function handleGetCart() {
    const data = await getCart();
    dispatch(setCart(data.cart));
  }

  async function handleIncrementCartItem({ productId, variantId }) {
    try {
      const data = await incrementItemCartApi({ productId, variantId });
      if (data.success) {
        dispatch(incrementItemCart({ productId, variantId }));
      }
    } catch (error) {
      console.error("Increment error:", error.response?.data || error.message);
      throw error;
    }
  }

  async function handleDecrementCartItem({ productId, variantId }) {
    try {
      const data = await decrementItemCartApi({ productId, variantId });
      if (data.success) {
        dispatch(decrementItemCart({ productId, variantId }));
      }
    } catch (error) {
      console.error("Decrement error:", error.response?.data || error.message);
      throw error;
    }
  }

  return {
    handleAddItem,
    handleGetCart,
    handleIncrementCartItem,
    handleDecrementCartItem,
  };
};
