import { body, param, validationResult } from "express-validator";

const validateRequest = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  next();
};

export const validateAddCart = [
  param("productId").isMongoId().withMessage("Invalid product ID"),
  param("variantId").optional().isMongoId().withMessage("Invalid variant ID"),
  body("quantity")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Quantity must be least 1"),
  validateRequest,
];

export const validateIncrementCartItemQuantity = [
  param("productId").isMongoId().withMessage("Invalid product ID."),
  param("variandId").isMongoId().withMessage("Invalid variant ID."),
  validateRequest,
];
