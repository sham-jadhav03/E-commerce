import express from "express";
import { autheticateUser } from "../middleware/auth.middleware.js"
import { validateAddCart } from "../validators/cart.validator.js"
import { addToCart, getCart } from "../controllers/cart.Controller.js"

const router = express.Router()

/**
 * @route POST /api/cart/add/:productId/:variantId
 * @desc Add item to cart
 * @access Private
 * @argument productId - ID of the product to add
 * @argument variantId - ID of the variant to add
 * @argument quantity - Quantity of the item to add (optional, default: 1)
 */
router.post("/add/:productId/:variantId", autheticateUser, validateAddCart, addToCart)

/**
 * @route GET /api/cart
 * @desc Get user's cart
 * @access Private
 */
router.get("/", autheticateUser,  getCart)


export default router