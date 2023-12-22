import { IOrder } from "@/db/order.schema";
import React from "react";
import { Order, connectDB } from "@/db/db";
const fetchOrders = async () => {
  await connectDB();
  const orders = await Order.find({}).populate("product");
  return orders;
};

const OrderHistory = async () => {
  const orders = await fetchOrders();
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-white text-center mb-8">
        Order History
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {orders.length === 0 ? (
          <p className="text-lg font-semibold text-gray-800 text-center">
            Your order history is empty.
          </p>
        ) : (
          <div>
            {orders.map((order) => (
              <div key={String(order._id)} className="mb-6">
                <p className="text-lg font-semibold text-gray-800">
                  Order Date: {order.date.toISOString()}
                </p>

                <div className="flex items-center border-b border-gray-200 mb-4 pb-4">
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {order.product.name}
                    </h2>
                    <p className="text-gray-600">
                      Price: {order.product.price} each
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
