import { Request, Response } from "express";
import { Products } from "../models";
import { StatusCodes } from "../utils";

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    // Convert page and limit to integers
    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);

    // Calculate the starting index of the products
    const startIndex = (pageNum - 1) * limitNum;

    // Get the total number of products
    const totalProducts = await Products.countDocuments();

    // Get the products for the current page
    const products = await Products.find().skip(startIndex).limit(limitNum);

    // Send paginated response
    res.json({
      total: totalProducts,
      totalPages: Math.ceil(totalProducts / limitNum),
      currentPage: pageNum,
      products,
    });
  } catch (error: any) {
    res.status(StatusCodes.BadRequest).json("Error while getting products");
  }
};

export const getProductDetailsController = async (
  req: Request,
  res: Response
) => {
  try {
    const { productId } = req.params;

    const product = await Products.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error: any) {
    res.status(500).json({ error: "An error occurred" });
  }
};

export const createProductController = async (req: Request, res: Response) => {
  const body = req.body;

  const product = new Products(body);

  try {
    await product.save();
    res.status(StatusCodes.Created).json(product);
  } catch (error: any) {
    res.status(StatusCodes.ServerError).json({ error: "An error occurred" });
  }
};
