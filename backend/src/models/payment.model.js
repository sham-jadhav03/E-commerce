import mongoose from "mongoose";
import { priceSchema } from "./price.schema";

const paymentSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending"
    },
    price: {
        type: priceSchema,
        require: true
    },
    razorpay: {
        orderId: String,
        paymentId: String,
        signature: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    orderItems: [
        {
            title: String,
            productId: mongoose.Schema.Types.ObjectId,
            variantId: mongoose.Schema.Types.ObjectId,
            quantity: Number,
            images: [{ url: String}],
            description: String,
            price: priceSchema
        }
    ]
})

const paymentModel = mongoose.model("Payment", paymentSchema);

export default paymentModel;

