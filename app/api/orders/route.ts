import { Order, connectDB } from "@/db/db";
import { IOrder } from "@/db/order.schema";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(req: NextRequest) {
  await connectDB();
  const order = (await req.json()) as IOrder;
  const inserted = await Order.create(order);
  if (!inserted) {
    return NextResponse.json({ message: "Order not created" }, { status: 500 });
  } else {
    return NextResponse.json(inserted, { status: 201 });
  }
}

export async function GET(req: NextRequest) {
  await connectDB();
  const orders = await Order.find({}).populate("product");
  return NextResponse.json(orders, { status: 200 });
}
