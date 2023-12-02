"use client";
import React, { useState } from "react";

const ProductEdit = () => {
  // Sample product data (replace with actual data)
  const initialProduct = {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: "$19.99",
    stock: 100,
  };

  // State to track edited product data
  const [product, setProduct] = useState(initialProduct);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle form submission (for updating product)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement product update logic here
    alert("Product updated successfully");
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-white text-center mb-8">
        Edit Product
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-800 font-semibold">
              Product Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="text-gray-800 font-semibold"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full h-32"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="text-gray-800 font-semibold">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stock" className="text-gray-800 font-semibold">
              Stock:
            </label>
            <input
              type="text"
              id="stock"
              name="stock"
              value={product.stock}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-md text-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
