import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteClient } from "../../Slice/ClientSlice";
import IconToggleMode from "../IconToggleMode";

const MainPageContent = () => {
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();
  const { email } = useSelector((state) => state.client);

  return (
    <>
      <IconToggleMode />
      <div className="min-h-full">
        <div className="bg-blue-50 dark:bg-indigo-900 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <p className="cursor-pointer inline-block p-2 text-blue-500 dark:text-blue-100 hover:text-blue-800 mr-2 font-medium">
              Pet Catalog
            </p>
            <p className="cursor-pointer inline-block p-2 text-blue-500 dark:text-blue-100 hover:text-blue-800 font-medium">
              About
            </p>
          </div>
          <p className="text-blue-700 dark:text-blue-100 text-lg font-semibold">
            {email}
          </p>
          <button
            onClick={() => dispatch(deleteClient())}
            className="py-2 px-5 text-lg font-medium text-blue-800
            bg-blue-200 hover:bg-blue-600 hover:text-white rounded transition ease-in duration-150"
          >
            Log out
          </button>
        </div>
        <div className="flex py-20 px-10 bg-white dark:bg-indigo-800 h-[800px]">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-6xl text-blue-500 dark:text-blue-100 mb-6 mt-24 w-[700px] ">
              Welcome To The Dog's World!
            </h2>
            <p className="text-2xl text-blue-500 dark:text-blue-100 mb-10">
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
        </div>
        <footer className="p-6 bg-blue-500 dark:bg-indigo-900 text-white dark:text-blue-100 flex justify-center">
          <div className="flex items-center">
            &copy; WorldDogs {currentYear}
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainPageContent;
