import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex gap-4 justify-between items-center">
        <Link className="text-white text-2xl font-extrabold" href="/">
          E-Commerce App
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link className="text-white" href="/catalog">
              Product Catalog
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/order-history">
              Order History
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/user-dashboard">
              User Dashboard
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/login">
              Log In
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/register">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
