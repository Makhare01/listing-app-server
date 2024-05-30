import { Schema, model } from "mongoose";

const ProductsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name field is required"],
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Product price field is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image is required"],
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Products = model("Products", ProductsSchema);
