import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteClient } from "../../Slice/ClientSlice";

const MainPageContent = () => {
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();
  const { email } = useSelector((state) => state.client);

  return (
    <div className="min-h-full">
      <nav className="bg-blue-50 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <p className="cursor-pointer inline-block p-2 text-blue-500 hover:text-blue-800 mr-2 font-medium">
            Pet Catalog
          </p>
          <p className="cursor-pointer inline-block p-2 text-blue-500 hover:text-blue-800 font-medium">
            About
          </p>
        </div>
        <p className="text-blue-700 text-lg font-semibold">{email}</p>
        <button
          onClick={() => dispatch(deleteClient())}
          className="py-2 px-5 text-lg font-medium text-blue-800
            bg-blue-200 hover:bg-blue-600 hover:text-white rounded transition ease-in duration-150"
        >
          Log out
        </button>
      </nav>
      <main className="flex py-20 px-10 bg-white h-[800px]">
        <div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-blue-500 mb-6 mt-24 w-[700px] ">
            Welcome To The Dog's World!
          </h2>
          <p className="text-2xl text-blue-500 mb-10">
            There is never a sad day here!
          </p>
          <button
            className="py-3 px-6 text-lg font-medium text-blue-800
            bg-blue-200 hover:bg-blue-600 hover:text-white rounded transition ease-in duration-150"
          >
            Learn More
          </button>
        </div>
        <img
          className="object-cover w-[900px] h-[600px] rounded-3xl"
          src="https://cdn.pixabay.com/photo/2018/03/27/21/57/animal-3267564_960_720.jpg"
          alt="Logo"
        />
      </main>
      <footer className="p-6 bg-blue-500 text-white flex justify-center">
        <div className="flex items-center">&copy; WorldDogs {currentYear}</div>
      </footer>
    </div>
  );
};

export default MainPageContent;
