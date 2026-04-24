import express from "express";
import multer from "multer";
import {
  createProduct,
  getSellerProducts,
  getAllProducts,
  addProductVariants
} from "../controllers/product.controller.js";
import { validateCreateProduct } from "../validators/product.validator.js";
import { autheticateSeller } from "../middleware/auth.middleware.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});

/**
 * @route POST /api/products
 * @description Create a new product (only for authenticated sellers)
 * @access Private (Seller only)
 */

router.post(
  "/",
  autheticateSeller,
  upload.array("images", 7),
  validateCreateProduct,
  createProduct,
);

/**
 * @route GET /api/products/seller
 * @description Get all products of the authenticated seller
 * @access Private (Seller only)
 */
router.get("/seller", autheticateSeller, getSellerProducts);

/**
 * @route GET /api/products
 * @description Get all products
 * @access Public
 */
router.get("/", getAllProducts);

/**
 * @route GET /api/products/detail/:id
 * @description Get product details by ID
 * @access Public
 */
router.get("/detail/:id", getAllProducts);

/**
 * @route POST /api/products/:productId/variants
 * @description Add a new variant to a product
 * @access Private (Seller only)
 */
router.post(
  "/:productId/variants",
  autheticateSeller,
  upload.array("images", 7),
  addProductVariants,
);

export default router;
