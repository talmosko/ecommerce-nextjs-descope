"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  const isAuthenticated = session.status === "authenticated";
  return (
    <nav className="py-4">
      <div className="container mx-auto flex gap-4 justify-between items-center">
        <Link className="text-white text-2xl font-extrabold" href="/">
          E-Commerce App
        </Link>
        <ul className="flex gap-4">
          {isAuthenticated && (
            <li>
              <Link className="text-white" href="/catalog">
                Product Catalog
              </Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <Link className="text-white" href="/order-history">
                Order History
              </Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <Link className="text-white" href="/user-dashboard">
                User Dashboard
              </Link>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <button className="text-white" onClick={() => signIn("descope")}>
                Log In
              </button>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <button className="text-white" onClick={() => signOut()}>
                Log Out
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
