import express from "express";
import { authenticateUser } from "../middleware/auth.middleware.js";
import {
  validateAddCart,
  validateIncrementCartItemQuantity,
} from "../validators/cart.validator.js";
import {
  addToCart,
  getCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity
} from "../controllers/cart.Controller.js";

const router = express.Router();

/**
 * @route POST /api/cart/add/:productId/:variantId
 * @desc Add item to cart
 * @access Private
 * @argument productId - ID of the product to add
 * @argument variantId - ID of the variant to add
 * @argument quantity - Quantity of the item to add (optional, default: 1)
 */
router.post(
  "/add/:productId/:variantId",
  authenticateUser,
  validateAddCart,
  addToCart,
);

/**
 * @route GET /api/cart
 * @desc Get user's cart
 * @access Private
 */
router.get("/", authenticateUser, getCart);

/**
 * @route PATCH /api/cart/quantity/increment/:productId/:variantId
 * @desc Increment item quantity in cart by one
 * @access Private
 * @argument productId - ID of the product to update
 * @argument variantId - ID of the variant to update
 */
router.patch(
  "/quantity/increment/increment/:productId/:variantId",
  authenticateUser,
  validateIncrementCartItemQuantity,
  incrementCartItemQuantity,
);

/**
 * @route PATCH /api/cart/quantity/decrement/:productId/:variantId
 * @desc Decrement item quantity in cart by one
 * @access Private
 * @argument productId - ID of the product to update
 * @argument variantId - ID of the variant to update
 */
router.patch(
  "/quantity/decrement/:productId/:variantId",
  authenticateUser,
  validateIncrementCartItemQuantity,
  decrementCartItemQuantity)

export default router;
