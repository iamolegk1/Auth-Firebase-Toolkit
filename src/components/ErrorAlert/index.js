import React, { useState, useEffect } from "react";

const ErrorAlert = ({ textError }) => {
  const [isActive, setActive] = useState(true);
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAlertVisible(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  return isAlertVisible ? (
    <div
      className={
        isActive
          ? "absolute right-5 bottom-5 flex w-auto shadow-lg rounded-lg"
          : "hidden"
      }
    >
      <div className="bg-red-600 py-4 px-6 rounded-l-lg flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="fill-current text-white"
          width="20"
          height="20"
        >
          <path
            fillRule="evenodd"
            d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"
          ></path>
        </svg>
      </div>
      <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
        <div>{textError}</div>
        <button className="ml-2" onClick={toggleClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-gray-700 hover:text-black"
            viewBox="0 0 16 16"
            width="20"
            height="20"
          >
            <path
              fillRule="evenodd"
              d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  ) : null;
};

export default ErrorAlert;
