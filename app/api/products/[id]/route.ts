// pages/api/products/[productId].ts

import { Product, connectDB } from "@/db/db";
import { IProduct } from "@/db/product.schema";
import products from "@data/products";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

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
  const { id: productId } = params;
  const existingProductIndex = products.findIndex(
    (p) => p.id === parseInt(productId)
  );
  if (existingProductIndex === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  } else {
    products.splice(existingProductIndex, 1);
    return NextResponse.json({ message: "Product deleted successfully" });
  }
}
