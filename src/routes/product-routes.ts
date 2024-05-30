import { Router } from "express";
import { createProductController, productsController } from "../controller";

export const productsRoutes = Router();

productsRoutes.get("/products", productsController);

productsRoutes.post("/products", createProductController);
