import { Order, connectDB } from "@/db/db";
import { IOrder } from "@/db/order.schema";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Not logged in" }, { status: 401 });
  }
  await connectDB();
  const order = (await req.json()) as IOrder;
  const inserted = await Order.create(order);
  revalidatePath("/order-history", "page");

  if (!inserted) {
    return NextResponse.json({ message: "Order not created" }, { status: 500 });
  } else {
    return NextResponse.json(inserted, { status: 201 });
  }
}
