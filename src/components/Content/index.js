import React from "react";

const Content = () => {
  return (
    <>
      <div className="h-fit"></div>
      <div className="bg-blue-500 p-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* <img src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-512.png" width="50" alt="Logo" class="mr-2"> */}
          <p className="inline-block p-2 text-indigo-200 hover:text-indigo-100 mr-2">
            Pet Catalog
          </p>
          <a
            href="#"
            className="inline-block p-2 text-indigo-200 hover:text-indigo-100"
          >
            About
          </a>
        </div>

        <div className="hidden md:block">
          <a
            href="#"
            className="inline-block py-2 px-4 text-yellow-700 bg-yellow-400 hover:bg-yellow-300 hover:text-yellow-800 rounded transition ease-in duration-150"
          >
            Log out
          </a>
        </div>
      </div>

      <div className="md:flex justify-between py-20 px-10 bg-indigo-600 text-indigo-100">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-white mb-6">
            Welcome to Doggo City!
          </h2>
          <p className="mb-6">There is never a sad day here!</p>

          <a
            href="#"
            className="inline-block py-3 px-6 text-lg bg-orange-400 text-orange-800 hover:bg-orange-300 rounded"
          >
            Learn More
          </a>
        </div>

        <div className="md:w-1/2">
          {/* <img src="https://images.unsplash.com/photo-1536012441472-aae6b3ce330f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Happiest Doggo" class="w-full rounded shadow-2xl"> */}
        </div>
      </div>

      <div className="p-10 bg-indigo-900 text-indigo-400 flex justify-center">
        <div className="flex items-center">
          Copyright &copy; Doggos 2022 - Infinity
        </div>
      </div>
    </>
  );
};

export default Content;
