"use client";
import React, { useState } from "react";

function UpdateModal({
  visibleUpdateModal,
  setvisibleUpdateModal,
  name,
  index,
  countryList,
  setCountryList,
}: {
  visibleUpdateModal: boolean;
  setvisibleUpdateModal: any;
  name: String;
  index: Number;
  countryList: String[];
  setCountryList: any;
}) {
  const [updatedName, setupdatedName] = useState<String>("");

  const handleUpdate = (name: String, ind: Number) => {
    if (updatedName !== null && updatedName !== "") {
      const newList = [...countryList];
      newList[ind] = updatedName;
      setCountryList(newList);
    }
  };

  return (
    <div
      id="popup-modal"
      className={` absolute flex justify-center items-center${
        visibleUpdateModal ? "z-10" : "-z-10"
      } `}
    >
      <div
        className={`relative w-full max-w-md max-h-full  ${
          visibleUpdateModal ? "flex" : "hidden"
        }`}
      >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setvisibleUpdateModal(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Update The Name
            </h3>
            <input
              type="text"
              className=" mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={(e) => {
                setupdatedName(e.target.value);
              }}
              placeholder={`${name}`}
            ></input>
            <button
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={() => {
                handleUpdate(name, index);
                setvisibleUpdateModal(false);
              }}
            >
              Yes, I'm sure
            </button>
            <button
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={() => setvisibleUpdateModal(false)}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
