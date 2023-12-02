import React from "react";

const OrderHistory = () => {
  // Sample order history data (replace with actual data)
  const orders = [
    {
      id: 1,
      date: "2023-04-15",
      total: "$45.98",
      items: [
        {
          name: "Product 1",
          price: "$19.99",
          quantity: 2,
        },
        {
          name: "Product 2",
          price: "$29.99",
          quantity: 1,
        },
      ],
    },
    {
      id: 2,
      date: "2023-04-10",
      total: "$25.49",
      items: [
        {
          name: "Product 3",
          price: "$10.99",
          quantity: 2,
        },
      ],
    },
  ];

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
              <div key={order.id} className="mb-6">
                <p className="text-lg font-semibold text-gray-800">
                  Order Date: {order.date}
                </p>
                {order.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center border-b border-gray-200 mb-4 pb-4"
                  >
                    <div className="flex-grow">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-gray-600">Price: {item.price} each</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-xl font-semibold text-gray-800">
                      Total: $
                      {(
                        Number(item.price.replace("$", "")) * item.quantity
                      ).toFixed(2)}
                    </div>
                  </div>
                ))}
                <p className="mt-2 text-xl font-semibold text-gray-800">
                  Order Total: {order.total}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
