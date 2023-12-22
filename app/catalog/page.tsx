import React from "react";
import { connectDB } from "../../db/db";
import { Product as DbProduct } from "../../db/db";
import Product from "@/components/Product";

//Get products from the API

const ProductCatalog = async () => {
  const db = await connectDB();
  const products = await DbProduct.find({});

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-white text-center mb-8">
        Product Catalog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 m-auto">
        {products.map((product) => {
          return <Product key={String(product._id)} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductCatalog;
