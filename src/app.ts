import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { productsRoutes } from "./routes";
import { connectDB } from "./db";
import { orderRoutes } from "./routes/order-routes";

dotenv.config();

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("Error");
    console.dir();
  });

app.use(productsRoutes);
app.use(orderRoutes);
