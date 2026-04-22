import { body, validationResult } from "express-validator";

const validateRequest = async (req, res) => {
  const errors = validateRequest(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
};

export const validateCreateProduct = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("price.Amount").isNumeric().withMessage("Price must be a number"),
  body("price.currency")
    .isIn(["INR", "USD"])
    .withMessage("Currency must be either INR or USD"),
  body("Images.url").notEmpty().withMessage("Image URL is required"),
  
  validateRequest,
];
