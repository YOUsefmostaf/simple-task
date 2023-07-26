"use client";
import DeleteModal from "@/components/DeleteModal";
import UpdateModal from "@/components/UpdateModal";
import Image from "next/image";
import { useState } from "react";

const countries = [
  "Egypt",
  "USA",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "Chile",
  "Peru",
  "Colombia",
  "Ecuador",
];

export default function Home() {
  const [showMenu, setshowMenu] = useState<boolean>(false);
  const [countryList, setCountryList] = useState<String[]>([]);
  const [visibleDeleteModal, setvisibleDeleteModal] = useState<boolean>(false);
  const [visibleUpdateModal, setvisibleUpdateModal] = useState<boolean>(false);
  const [nameToDelete, setnameToDelete] = useState<String>("");
  const [nameToUpdate, setnameToUpdate] = useState<String>("");
  const [indexToUpdate, setindexToUpdate] = useState<Number>(0);

  const handleClick = () => {
    setshowMenu((prev) => !prev);
  };

  const handleCountryClick = (e: any) => {
    if (countryList.includes(e.currentTarget.innerText))
      alert("this country already choose before ");
    else {
      setCountryList([...countryList, e.currentTarget.innerText]);
      setshowMenu((prev) => !prev);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center flex-col gap-10 relative items-center bg-[url('/background.jpg')] bg-cover">
      <div >
        <button
          className=" text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
          type="button"
          onClick={handleClick}
        >
          Select Country
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          className={`z-10 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-3 ${
            showMenu ? "" : "hidden"
          }`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {countries.map((value, index) => (
              <li key={index}>
                <p
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={handleCountryClick}
                >
                  {value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="relative overflow-x-auto">
          {countryList.length > 0 ? (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Country name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Update
                  </th>
                </tr>
              </thead>
              <tbody>
                {countryList.map((value, index) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {value}
                    </th>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={() => {
                        setvisibleDeleteModal(true);
                        setnameToDelete(value);
                      }}
                    >
                      <Image
                        src={"/delete.png"}
                        alt="delete image"
                        width={30}
                        height={30}
                      />
                    </td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={() => {
                        setvisibleUpdateModal(true);
                        setnameToUpdate(value);
                        console.log(index , 'before');
                        setindexToUpdate(index)
                        console.log(index , 'after');
                      }}
                    >
                      <Image
                        src={"/updated.png"}
                        alt="updated image"
                        width={30}
                        height={30}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 className=" text-xl text-blue-600"> Choose Some Country</h1>
          )}
        </div>
      </div>
      <DeleteModal
        visibleDeleteModal={visibleDeleteModal}
        setvisibleDeleteModal={setvisibleDeleteModal}
        name={nameToDelete}
        countryList={countryList}
        setCountryList={setCountryList}
      />
      <UpdateModal
        visibleUpdateModal={visibleUpdateModal}
        setvisibleUpdateModal={setvisibleUpdateModal}
        name={nameToUpdate}
        index={indexToUpdate}
        countryList={countryList}
        setCountryList={setCountryList}
      />
    </div>
  );
}
