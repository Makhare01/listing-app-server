import { Schema, model } from "mongoose";

export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  category: string;
  images: Array<string>;
};

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
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: {
      type: Array<String>,
      required: true,
    },
  },
  { timestamps: true }
);

export const Products = model("Products", ProductsSchema);
