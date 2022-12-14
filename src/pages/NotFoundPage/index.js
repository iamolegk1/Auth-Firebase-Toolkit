import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <h1 className="font-bold text-blue-600 text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-500">Oops!</span> Page not found
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <Link
                className="py-2 px-5 text-lg font-medium text-blue-800
                bg-blue-200 hover:bg-blue-600 hover:text-white rounded transition ease-in duration-150"
                to="/login"
              >
                Go back
              </Link>
            </div>
            <div className="mt-4">
              <img
                src="https://cdn.pixabay.com/photo/2016/12/25/18/15/sad-1930479_960_720.jpg"
                alt="img"
                className="object-contain h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
