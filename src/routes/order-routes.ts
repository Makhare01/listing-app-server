import { Router } from "express";
import { createOrderController, getOrdersController } from "../controller";

export const orderRoutes = Router();

orderRoutes.get("/orders", getOrdersController);
orderRoutes.post("/order/create", createOrderController);
