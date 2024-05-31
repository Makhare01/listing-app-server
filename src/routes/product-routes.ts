import { Router } from "express";
import {
  createProductController,
  getProductDetailsController,
  getProductsController,
} from "../controller";

export const productsRoutes = Router();

productsRoutes.get("/products", getProductsController);
productsRoutes.get("/products/:productId", getProductDetailsController);

productsRoutes.post("/products", createProductController);
