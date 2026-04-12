import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddOrModifyPage() {
  const [formType, setFormType] = useState("Add");
  const navigate = useNavigate();
  const location = useLocation();
  const defaultDate = new Date();
  const defaultDateFrom = new Date(defaultDate).toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    idReg: "",
    idMember: "",
    idBook: "",
    dateFrom: "",
    dateTo: "",
  });

  useEffect(() => {
    const handleFormType = () => {
      let formTypes = location.pathname.split("/")[2];
      formTypes = formTypes.charAt(0).toUpperCase() + formTypes.slice(1);
      setFormType(formTypes);
    };
    handleFormType();
  });

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/loan");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
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
          <span className="text-gray-500 font-bold text-xl">
            {formType} Loan
          </span>
        </div>
        <form
          className="flex flex-col shadow-md px-3 py-4 mb-6 mt-5"
          onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="idReg"
              className="block text-gray-700 text-sm font-bold mb-2">
              ID Reg
            </label>
            <input
              type="text"
              id="idReg"
              name="idReg"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="ID Registration"
              value={formData.idReg}
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="idMember"
              className="block text-gray-700 text-sm font-bold mb-2">
              ID Reg
            </label>
            <select
              name="idMember"
              id="idMember"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full">
              <option value="">Choose Member</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="idBook"
              className="block text-gray-700 text-sm font-bold mb-2">
              ID Reg
            </label>
            <select
              name="idBook"
              id="idBook"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full">
              <option value="">Choose Book</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="dateFrom"
              className="block text-gray-700 text-sm font-bold mb-2">
              Date From
            </label>
            <input
              type="date"
              name="dateFrom"
              id="dateFrom"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              min={defaultDateFrom}
              value={formData.dateFrom}
              onChange={(e) =>
                setFormData({ ...formData, dateFrom: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="dateTo"
              className="block text-gray-700 text-sm font-bold mb-2">
              Date To
            </label>
            <input
              type="date"
              name="dateTo"
              id="dateTo"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              min={defaultDateFrom}
              value={formData.dateTo}
              onChange={(e) =>
                setFormData({ ...formData, dateTo: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-center gap-4">
              <button
                type="submit"
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 w-1/2 text-white font-bold rounded py-2 px-4 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-bold">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center justify-center bg-white-500 hover:bg-gray-100 w-1/2 text-gray-700 font-bold border border-gray-300 rounded py-2 px-4 focus:outline-none"
                onClick={handleBack}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 font-bold">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
