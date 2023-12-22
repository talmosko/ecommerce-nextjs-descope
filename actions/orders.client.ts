import { IProduct } from "@/db/product.schema";

export const orderProduct = async (product: IProduct, userId: string) => {
  const response = await fetch("/api/orders", {
    method: "POST",
    body: JSON.stringify({ product: product._id, userId, date: new Date() }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
