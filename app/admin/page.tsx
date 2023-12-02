"use client";
import React from "react";

const UserManagement = () => {
  // Sample user data (replace with actual data)
  const users = [
    {
      id: 1,
      username: "user1",
      email: "user1@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 2,
      username: "user2",
      email: "user2@example.com",
      role: "Moderator",
      status: "Active",
    },
    {
      id: 3,
      username: "user3",
      email: "user3@example.com",
      role: "Admin",
      status: "Inactive",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-white text-center mb-8">
        User Management
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left">Username</th>
              <th className="text-left">Email</th>
              <th className="text-left">Role</th>
              <th className="text-left">Status</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <button className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-md mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white hover:bg-red-700 py-2 px-4 rounded-md">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
