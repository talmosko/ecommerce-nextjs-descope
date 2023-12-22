import { Mongoose, connect, models, model } from "mongoose";
import { IProduct, ProductSchema } from "./product.schema";
import { IOrder, OrderSchema } from "./order.schema";

let db: Mongoose;
export const connectDB = async () => {
  if (db) {
    return db;
  }
  const client = await connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/nextjs-ecommerce"
  );
  console.log("DB Connected Successfully");

  db = client;
  return db;
};

export const Product =
  models.Product || model<IProduct>("Product", ProductSchema);
export const Order = models.Order || model<IOrder>("Order", OrderSchema);
