"use client";
import { orderProduct } from "@/actions/orders.client";
import { IProduct } from "@/db/product.schema";
import { Types } from "mongoose";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

const ProductEdit = () => {
  const { id } = useParams();
  const router = useRouter();
  const session = useSession();
  const [product, setProduct] = useState<IProduct>({
    _id: new Types.ObjectId(),
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  const canEdit = session?.data?.user?.roles.includes("Admin");

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      const product = await res.json();
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  // Handle form input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle form submission (for updating product)
  const saveProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canEdit) {
      return;
    }
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
    });

    if (res.ok) {
      router.push("/catalog");
    }
  };

  if (!session || !session.data?.user) {
    return <div>Not logged in</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-white text-center mb-8">
        {canEdit ? "Edit Product" : "View Product"}
      </h1>
      <Image
        src={product.image}
        alt={product.name}
        width={150}
        height={150}
        className="mx-auto w-40 h-40 object-cover rounded-md mb-8"
      />
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={saveProduct}>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-800 font-semibold">
              Product Name:
            </label>
            <input
              type="text"
              disabled={!canEdit}
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
              disabled={!canEdit}
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
              disabled={!canEdit}
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="text-center flex flex-col gap-2 w-full m-auto">
            {canEdit && (
              <button
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-md text-lg"
              >
                Save Changes
              </button>
            )}
            <button
              onClick={async () => {
                const res = await orderProduct(product, session.data.user.id);
                if (res.ok) router.push("/order-history");
              }}
              className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-md text-lg"
            >
              Buy Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
