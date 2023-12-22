"use client";

import { orderProduct } from "@/actions/orders.client";
import { IProduct } from "@/db/product.schema";
import { redirect } from "next/navigation";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function Product({ product }: { product: IProduct }) {
  const router = useRouter();
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Image
        src={product.image}
        alt={product.name}
        width={150}
        height={150}
        className="mx-auto w-40 h-40 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold text-gray-800 mt-4">
        {product.name}
      </h2>
      <p className="text-gray-600 mt-2">{product.price}</p>
      <a
        href={`/product/${product._id}`} // Link to the product details page
        className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-md mt-4 block text-center"
      >
        View Details
      </a>
      <button
        onClick={async () => {
          await orderProduct(product, "1111");
          router.push("/order-history");
        }}
        className="bg-blue-500 text-white hover:bg-blue-700 w-full py-2 px-4 rounded-md mt-4 block text-center"
      >
        Buy Now
      </button>
    </div>
  );
}

export default Product;
