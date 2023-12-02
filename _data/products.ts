export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string; // Add the 'image' field
};

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 19.99,
    stock: 100,
    image: "/images/product1.jpg", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    price: 29.99,
    stock: 50,
    image: "/images/product2.jpg", // Replace with actual image URLs
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for Product 3",
    price: 9.99,
    stock: 75,
    image: "/images/product3.jpg", // Replace with actual image URLs
  },
];

export default products;
