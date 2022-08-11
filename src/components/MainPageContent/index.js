import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteClient } from "../../Slice/ClientSlice";

const MainPageContent = () => {
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();
  const { email } = useSelector((state) => state.client);

  return (
    <>
      <div className="bg-blue-400 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <p className="cursor-pointer inline-block p-2 text-white hover:text-gray-200 mr-2">
            Pet Catalog
          </p>
          <p className="cursor-pointer inline-block p-2 text-white hover:text-gray-200">
            About
          </p>
        </div>
        <p className="text-white">{email}</p>
        <button
          onClick={() => dispatch(deleteClient())}
          className="py-2 px-5 text-lg font-semibold text-blue-800
            bg-blue-100 hover:bg-blue-600 hover:text-white rounded transition ease-in duration-150"
        >
          Log out
        </button>
      </div>
      <div className="flex py-20 px-10 bg-blue-400">
        <div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-white mb-6 mt-24 w-[700px] ">
            Welcome To The Dog's World!
          </h2>
          <p className="text-2xl text-white mb-10">
            There is never a sad day here!
          </p>
          <button
            className="py-3 px-6 text-lg font-semibold text-blue-800
            bg-blue-100 hover:bg-blue-600 hover:text-white rounded transition ease-in duration-150"
          >
            Learn More
          </button>
        </div>
        <img
          className="w-[1000px] rounded-3xl"
          src="https://cdn.pixabay.com/photo/2018/03/27/21/57/animal-3267564_960_720.jpg"
          alt="Logo"
        />
      </div>
      <div className="p-6 bg-blue-500 text-white flex justify-center">
        <div className="flex items-center">&copy; WorldDogs {currentYear}</div>
      </div>
    </>
  );
};

export default MainPageContent;
