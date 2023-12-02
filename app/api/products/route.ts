import products, { Product } from "@data/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(products, { status: 200 });
}

export async function POST(req: NextRequest) {
  const newProduct: Product = { ...(req.body as any), id: products.length + 1 };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
