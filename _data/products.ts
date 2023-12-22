export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string; // Add the 'image' field
};

const products: Product[] = [
  {
    id: 122222,
    name: "Product 1",
    description: "Description for Product 1",
    price: 19.99,
    image: "/images/product1.avif", // Replace with actual image URLs
  },
  {
    id: 233333,
    name: "Product 2",
    description: "Description for Product 2",
    price: 29.99,
    image: "/images/product2.avif", // Replace with actual image URLs
  },
  {
    id: 444443,
    name: "Product 3",
    description: "Description for Product 3",
    price: 9.99,
    image: "/images/product3.avif", // Replace with actual image URLs
  },
];

export default products;
