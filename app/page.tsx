const Home = () => {
  return (
    <div className="text-white text-center">
      <h1 className="text-5xl font-extrabold mb-4">
        Welcome to Our E-Commerce Store
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        Explore our wide range of products and enjoy a seamless shopping
        experience.
      </p>
      <div className="space-y-4">
        <a
          href="/login"
          className="bg-white text-blue-500 hover:bg-blue-700 text-lg py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Log In
        </a>
        <a
          href="/register"
          className="bg-blue-500 text-white hover:bg-blue-700 text-lg py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Sign Up
        </a>
      </div>
      <p className="mt-8 text-gray-300">
        Not sure where to start?{" "}
        <a href="/catalog" className="text-blue-300 hover:underline">
          Browse our catalog
        </a>
        .
      </p>
    </div>
  );
};

export default Home;
