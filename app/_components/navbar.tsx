"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white text-2xl font-extrabold" href="/">
          E-Commerce App
        </Link>
        <ul className="flex space-x-4">
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
            <Link className="text-white" href="/admin">
              Admin Dashboard
            </Link>
          </li>
          {session.status === "unauthenticated" && (
            <li>
              <button className="text-white" onClick={() => signIn("descope")}>
                Log In
              </button>
            </li>
          )}
          {session.status === "authenticated" && (
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
