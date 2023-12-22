import { ObjectId, Schema, model, models } from "mongoose";
import { IProduct } from "./product.schema";

export interface IOrder {
  _id: ObjectId;
  userId: string;
  product: IProduct;
  date: Date;
}

export const OrderSchema = new Schema<IOrder>({
  userId: { type: String, required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  date: { type: Date, required: true },
});
