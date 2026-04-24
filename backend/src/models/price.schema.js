import mongoose from "mongoose";

export const priceSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    enum: ["USD", "EUR", "GBP", "JPY", "INR"],
    default: "INR",
  },
});
