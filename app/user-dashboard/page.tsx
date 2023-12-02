import Image from "next/image";
import React from "react";

const UserDashboard = () => {
  // Sample user profile data (replace with actual data)
  const userProfile = {
    username: "JohnDoe123",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/150", // Replace with the actual URL
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-white text-center mb-8">
        User Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* User Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            User Profile
          </h2>
          <div className="text-gray-600 mb-4">
            <p>Username: {userProfile.username}</p>
            <p>Email: {userProfile.email}</p>
          </div>
          <Image
            src={userProfile.avatar}
            width={150}
            height={150}
            alt="User Avatar"
            className="mx-auto w-40 h-40 object-cover rounded-md"
          />
        </div>

        {/* Order History Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Order History
          </h2>
          <p className="text-gray-600 mb-4">
            View your previous order history.
          </p>
          <a
            href="/order-history"
            className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-md text-lg block text-center"
          >
            View Orders
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
