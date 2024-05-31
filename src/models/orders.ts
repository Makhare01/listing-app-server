import { Schema, model } from "mongoose";

const OrderSchema = new Schema(
  {
    totalPrice: {
      type: Number,
      required: [true, "Product name field is required"],
    },
    products: {
      type: Array<{
        productId: String;
        count: Number;
      }>,
    },
  },
  { timestamps: true }
);

export const Order = model("Order", OrderSchema);
