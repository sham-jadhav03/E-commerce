import express from "express";
import multer from "multer";
import { createProduct } from "../controllers/product.controller.js";
import { validateCreateProduct } from "../validators/product.validator.js";
import { autheticateSeller } from "../middleware/auth.middleware.js";


const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});

/*
    @route POST /api/products
    discription: Create a new product (only for authenticated sellers)
    @access Private (Seller)
*/

router.post(
  "/",
  autheticateSeller,
  validateCreateProduct,
  upload.array("image", 7),
  createProduct,
);

export default router;
