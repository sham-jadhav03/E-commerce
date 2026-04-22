import productModel from "../models/product.model.js";
import { uploadFiles } from "../services/storage.services.js";

export const createProduct = async (req, res) => {
  const { title, description, priceAmount, priceCurrency } = req.body;
  const seller = req.user;

  console.log(req.body);

  const images = await Promise.all(
    req.files.map(async (file) => {
      return await uploadFiles({
        buffer: file.buffer,
        filename: file.originalname,
      });
    }),
  );

  console.log(images);

  const product = await productModel.create({
    title,
    description,
    price: {
      amount: priceAmount,
      currency: priceCurrency || "INR",
    },
    images,
    seller: seller._id,
  });

  return res.status(201).json({
    message: "Product created successfully",
    success: true,
    product,
  });
};
