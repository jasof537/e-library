import Menu from "../Menu";
import { useNavigate } from "react-router-dom";
export default function LibraryLoan() {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/loan/add");
  };
  return (
    <>
      <div>
        <Menu />
        <div className="max-w-6xl mx-auto my-4 px-5 py-3">
          <div className="flex items-center space-x-3 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-gray-800">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
              />
            </svg>
            <span className="text-gray-500 font-bold text-xl">Loan</span>
          </div>
          <div className="flex flex-col shadow-md px-3 py-4 mb-6 mt-5">
            <div className="grid md:grid-cols-2 mb-3">
              <div className="md:flex">
                <div className="md:w-1/5 justify-center items-center">
                  <label className="block font-semibold text-sm text-gray-700">
                    ID Reg
                  </label>
                </div>
                <div className="md:w-full">
                  <input
                    type="text"
                    className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
                  />
                </div>
              </div>
              <div className="md:flex">
                <div className="md:w-1/5 justify-center items-center ml-5">
                  <label className="block font-semibold text-sm text-gray-700">
                    Author
                  </label>
                </div>
                <div className="md:w-full">
                  <input
                    type="text"
                    className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
                  />
                </div>
              </div>
            </div>
            {/* end search1 */}
            <div className="grid md:grid-cols-2 mb-3">
              <div className="md:flex">
                <div className="md:w-1/5 justify-center items-center">
                  <label className="block font-semibold text-sm text-gray-700">
                    Book Name
                  </label>
                </div>
                <div className="md:w-full">
                  <input
                    type="text"
                    className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
                  />
                </div>
              </div>
              <div className="md:flex">
                <div className="md:w-1/5 justify-center items-center ml-5">
                  <label className="block font-semibold text-sm text-gray-700">
                    Year
                  </label>
                </div>
                <div className="md:w-full">
                  <input
                    type="text"
                    className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button className="cursor-pointer px-1 py-1 border border-blue-700 bg-blue-600 rounded text-white hover:bg-blue-700 transition duration-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col shadow-md px-3 py-4">
            <div className="flex justify-end mb-2">
              <div className="flex items-center space-x-1">
                <button
                  className="cursor-pointer px-1 py-1 border border-blue-700 bg-blue-600 rounded w-full text-white hover:bg-blue-700 transition duration-150"
                  onClick={handleAdd}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full overflow-x-auto border border-gray-300 mb-3">
              <table className="w-full text-left bg-transparent border-collapse px-3 py-2">
                <thead>
                  <tr>
                    <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                      No
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                      IDReg
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                      Book Name
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                      Author
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                      Year
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                      Date from
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                      Date to
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                      Borrower
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                      Status
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                      Pinalty
                    </th>
                    <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="text-gray-500 bg-red-300">
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      1
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      P00001
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Sikadang kuya
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Steven
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      2019
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      01 March 2026
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium text-red-500 whitespace-nowrap text-left">
                      12 March 2026
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Jun oh
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Due Date
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium text-red-500 whitespace-nowrap text-left">
                      Rp.12.900
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left"></td>
                  </tr>
                  <tr className="text-gray-500">
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      2
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      BOOK0002
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Sikadang kuya
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Steven
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      2019
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      01 March 2026
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      12 March 2026
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Jun oh
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      -
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Rp.0
                    </td>
                    <td className="border-t-0 px-4 text-sm font-medium whitespace-nowrap text-left">
                      <div className="relative md:p-1 flex justify-center space-x-1">
                        <button className="cursor-pointer border border-blue-700 bg-blue-600 rounded w-full px-1 py-1 text-white hover:bg-blue-700 transition duration-150">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </button>
                        <button className="cursor-pointer border border-yellow-700 bg-yellow-600 rounded w-full px-1 py-1 text-white hover:bg-yellow-700 transition duration-150">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-500">
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      2
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      BOOK0002
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Sikadang kuya
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Steven
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      2019
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      01 March 2026
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      12 March 2026
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Jun oh
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      -
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Rp.0
                    </td>
                    <td className="border-t-0 px-4 text-sm font-medium whitespace-nowrap text-left">
                      <div className="relative md:p-1 flex justify-center space-x-1">
                        <button className="cursor-pointer border border-blue-700 bg-blue-600 rounded w-full px-1 py-1 text-white hover:bg-blue-700 transition duration-150">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </button>
                        <button className="cursor-pointer border border-yellow-700 bg-yellow-600 rounded w-full px-1 py-1 text-white hover:bg-yellow-700 transition duration-150">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-500">
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      2
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      BOOK0002
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Sikadang kuya
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Steven
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      2019
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      01 March 2026
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      12 March 2026
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Jun oh
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      -
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Rp.0
                    </td>
                    <td className="border-t-0 px-4 text-sm font-medium whitespace-nowrap text-left">
                      <div className="relative md:p-1 flex justify-center space-x-1">
                        <button className="cursor-pointer border border-blue-700 bg-blue-600 rounded w-full px-1 py-1 text-white hover:bg-blue-700 transition duration-150">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </button>
                        <button className="cursor-pointer border border-yellow-700 bg-yellow-600 rounded w-full px-1 py-1 text-white hover:bg-yellow-700 transition duration-150">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-500">
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      2
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      BOOK0002
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Sikadang kuya
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Steven
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      2019
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      01 March 2026
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      12 March 2026
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Jun oh
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      -
                    </td>
                    <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                      Rp.0
                    </td>
                    <td className="border-t-0 px-4 text-sm font-medium whitespace-nowrap text-left">
                      <div className="relative flex justify-center space-x-1">
                        <button className="cursor-pointer border border-blue-700 bg-blue-600 rounded w-full px-1 py-1 text-white hover:bg-blue-700 transition duration-150">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </button>
                        <button className="cursor-pointer border border-yellow-700 bg-yellow-600 rounded w-full px-1 py-1 text-white hover:bg-yellow-700 transition duration-150">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
