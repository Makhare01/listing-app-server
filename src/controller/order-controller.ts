import { Request, Response } from "express";
import { Order, Product, Products } from "../models";
import { StatusCodes } from "../utils";

type CreateOrderInput = {
  totalPrice: number;
  products: Array<{
    product: Product;
    count: number;
  }>;
};

export const getOrdersController = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();

    res.status(StatusCodes.Created).json(orders);
  } catch (error: any) {
    res.status(StatusCodes.ServerError).json({ error: "An error occurred" });
  }
};

export const createOrderController = async (req: Request, res: Response) => {
  const body = req.body as CreateOrderInput;

  const order = new Order(body);

  try {
    const updatePromises = body.products.map(async (item) => {
      return Products.findByIdAndUpdate(
        item.product._id,
        { stock: item.product.stock - item.count },
        { new: true, runValidators: true }
      );
    });

    const updatedProducts = await Promise.all(updatePromises);

    await order.save();
    res.status(StatusCodes.Created).json({ order, updatedProducts });
  } catch (error: any) {
    res.status(StatusCodes.ServerError).json({ error: "An error occurred" });
  }
};
