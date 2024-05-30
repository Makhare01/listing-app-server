import { Request, Response } from "express";
import { Products } from "../models";
import { ErrorCodes } from "../utils";

export const productsController = async (req: Request, res: Response) => {
  try {
    const product = await Products.find();
    // console.log(product);
    res.send(product);
  } catch (error: any) {
    res.status(ErrorCodes.BadRequest).json("Error while getting products");
  }

  // res.send("test");
};

export const createProductController = async (req: Request, res: Response) => {
  const body = req.body;

  const product = new Products(body);

  try {
    await product.save();
    res.send("Saved");
  } catch (error: any) {
    res.status(ErrorCodes.BadRequest).json("Error while getting products");
  }

  // res.send("test");
};
