// pages/api/products/[productId].ts

import { Product, connectDB } from "@/db/db";
import { IProduct } from "@/db/product.schema";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const db = await connectDB();
  const { id: productId } = params;
  const product = await Product.findById(productId);
  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  } else {
    return NextResponse.json(product, { status: 200 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Not logged in" }, { status: 401 });
  }

  if (!session.user.roles.includes("Admin")) {
    return NextResponse.json({ message: "Not authorized" }, { status: 403 });
  }

  await connectDB();
  const { id: productId } = params;
  const product = (await req.json()) as IProduct;
  const updated = await Product.findOneAndUpdate({ _id: productId }, product, {
    new: true,
  });
  if (!updated) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  } else {
    return redirect("/catalog");
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Not logged in" }, { status: 401 });
  }

  if (!session.user.roles.includes("Admin")) {
    return NextResponse.json({ message: "Not authorized" }, { status: 403 });
  }

  await connectDB();
  const { id: productId } = params;
  const deleted = await Product.findOneAndDelete({ _id: productId });
  if (!deleted) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  } else {
    return redirect("/catalog");
  }
}
