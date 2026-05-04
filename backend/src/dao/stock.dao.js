import productModel from "../models/product.model.js";

export const deductStockForOrderItems = async (orderItems) => {
  const deductedItems = [];

  for (const item of orderItems) {
    const result = await productModel.updateOne(
      {
        _id: item.productId,
        variants: {
          $elemMatch: {
            _id: item.variantId,
            stock: { $gte: item.quantity },
          },
        },
      },
      {
        $inc: {
          "variants.$.stock": -item.quantity,
        },
      },
    );

    if (result.modifiedCount !== 1) {
      await Promise.all(
        deductedItems.map((deductedItem) =>
          productModel.updateOne(
            {
              _id: deductedItem.productId,
              "variants._id": deductedItem.variantId,
            },
            {
              $inc: {
                "variants.$.stock": deductedItem.quantity,
              },
            },
          ),
        ),
      );

      return false;
    }

    deductedItems.push(item);
  }

  return true;
};