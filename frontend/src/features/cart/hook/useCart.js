import { addItem, getCart, incrementItemCartApi, decrementItemCartApi } from "../services/cart.api";
import { incrementItemCart, setItems, decrementItemCart } from "../state/cart.slice";
import { useDispatch } from "react-redux";

export const useCart = () => {
  const dispatch = useDispatch();

  async function handleAddItem({ productId, variantId }) {
    const data = await addItem({ productId, variantId });

    return data;
  }

  async function handleGetCart() {
    const data = await getCart();
    dispatch(setItems(data.cart.items));
  }

  async function handleIncrementCartItem({ productId, variantId }) {
    const data = await incrementItemCartApi({ productId, variantId });
    dispatch(incrementItemCart(data.cart.items));
  }

  async function handleDecrementCartItem({productId, variantId}) {
    const data = await decrementItemCartApi({productId, variantId})
    dispatch(decrementItemCart(data.cart.items));
    
  }

  return { handleAddItem, handleGetCart, handleIncrementCartItem, handleDecrementCartItem };
};
