import { cartModel } from "../models/cart.model.js";

export const addToCart = async (req, res) => {

  const { productId, variantId } = req.params;
  const { quantity = 1 } = req.body;

  
};
