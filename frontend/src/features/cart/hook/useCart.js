import { addItem, getCart } from "../services/cart.api";
import { setItems } from "../state/cart.slice";
import { useDispatch } from "react-redux";

export const useCart = () => {
  const dispatch = useDispatch();

  async function handleAddCart({ productId, variantId }) {
    const data = await addItem({ productId, variantId });

    return data;
  }

  async function handleGetCart() {
    const data = await getCart();
    dispatch(setItems(data.cart.items));
  }

  return { handleAddCart, handleGetCart };
};
