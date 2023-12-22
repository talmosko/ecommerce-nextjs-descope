import { ObjectId, Schema, model, Types, models } from "mongoose";

export interface IProduct {
  _id: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});
