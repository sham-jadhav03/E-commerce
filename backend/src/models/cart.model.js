import mongoose, { mongo } from "mongoose";
import { priceSchema } from "./price.schema";

const cartSchema = new mongoose.Schema({
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      variant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product.variant",
        required: true,
      },
      quantity: {
        type:Number,
        default:  1
      },
      price: {
        type: priceSchema,
        required: true
      }
    },
  ],
});

const cartModel = mongoose.model("Cart", cartSchema)

export default cartModel;
