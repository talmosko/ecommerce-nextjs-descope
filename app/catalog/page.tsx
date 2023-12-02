import Image from "next/image";
import React from "react";

// Example product data (replace with your actual data)
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$39.99",
    image: "https://via.placeholder.com/150",
  },
];

const ProductCatalog = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-white text-center mb-8">
        Product Catalog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
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
              href={`/product/${product.id}`} // Link to the product details page
              className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-md mt-4 block text-center"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
