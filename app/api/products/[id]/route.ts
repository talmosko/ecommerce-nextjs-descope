// pages/api/products/[productId].ts

import products, { type Product } from "@data/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id: productId } = params;
  const product = products.find((p) => p.id === parseInt(productId));
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
  const { id: productId } = params;
  const updatedProduct: Product = req.body;
  const existingProductIndex = products.findIndex(
    (p) => p.id === parseInt(productId)
  );
  if (existingProductIndex === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  } else {
    products[existingProductIndex] = updatedProduct;
    return NextResponse.json({ message: "Product updated successfully" });
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
