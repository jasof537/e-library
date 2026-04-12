import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddOrModifyPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idBook: "IDB-9991",
    bookName: "",
    bookAuthor: "",
    bookYear: 0,
    bookCover: "",
    bookQty: 0,
  });
  const [errors, setErrors] = useState({});
  const [formType, setFormType] = useState("Add");

  const defaultErrors = {
    idBook: "",
    bookName: "",
    bookAuthor: "",
    bookQty: "",
    bookYear: "",
  };
  const location = useLocation();

  useEffect(() => {
    const handleFormtype = () => {
      let formTypes = location.pathname.split("/")[2];
      formTypes = formTypes.charAt(0).toUpperCase() + formTypes.slice(1);
      setFormType(formTypes);
    };

    handleFormtype();
  });

  const validate = () => {
    let newErrors = {};
    if (!formData.idBook) newErrors.idBook = "ID Book is required";
    if (!formData.bookName) newErrors.bookName = "Book Name is required";
    if (!formData.bookAuthor) newErrors.bookAuthor = "Book Author is required";
    if (!formData.bookQty) newErrors.bookQty = "Book Qty is required";
    if (formData.bookQty && parseInt(formData.bookQty) < 1)
      newErrors.bookQty = "Book Qty must be greater than 0";
    if (!formData.bookYear) newErrors.bookYear = "Book Year is required";
    if (formData.bookYear && parseInt(formData.bookYear) <= 1970) newErrors.bookYear = "Book Year must be greater than 1970";
    console.log("formData ", formData);
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors(defaultErrors);
      console.log("submitted ", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/book");
  };
  return (
    <div>
      <Menu />
      <form
        className="max-w-6xl mx-auto my-4 px-5 py-3"
        onSubmit={handleSubmit}>
        <div className="flex items-center space-x-3 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 mr-2 mt-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          <span className="text-gray-500 font-bold text-xl">
            {formType} Book
          </span>
        </div>
        <div className="flex flex-col shadow-md px-3 py-4 mb-6 mt-5">
          <div className="mb-4">
            <label
              htmlFor="idBook"
              className="block text-gray-700 text-sm font-bold mb-2">
              ID Book
            </label>
            <input
              type="text"
              name="idBook"
              id="idBook"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="ID Book"
              value={formData.idBook}
              onChange={(e) =>
                setFormData({ ...formData, idBook: e.target.value })
              }
              disabled
            />
            {errors.idBook && (
              <p className="block text-red-600">{errors.idBook}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="bookName"
              className="block text-gray-700 text-sm font-bold mb-2">
              Book Name
            </label>
            <input
              type="text"
              name="bookName"
              id="bookName"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Book Name"
              value={formData.bookName}
              onChange={(e) =>
                setFormData({ ...formData, bookName: e.target.value })
              }
            />
            {errors.bookName && (
              <p className="block text-red-600">{errors.bookName}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="bookAuthor"
              className="block text-gray-700 text-sm font-bold mb-2">
              Author
            </label>
            <input
              type="text"
              name="bookAuthor"
              id="bookAuthor"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Author"
              value={formData.bookAuthor}
              onChange={(e) =>
                setFormData({ ...formData, bookAuthor: e.target.value })
              }
            />
            {errors.bookAuthor && (
              <p className="block text-red-600">{errors.bookAuthor}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="bookYear"
              className="block text-gray-700 text-sm font-bold mb-2">
              Year
            </label>
            <input
              type="number"
              name="bookYear"
              id="bookYear"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Year"
              value={formData.bookYear}
              onChange={(e) =>
                setFormData({ ...formData, bookYear: e.target.value })
              }
            />
            {errors.bookYear && (
              <p className="block text-red-600">{errors.bookYear}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="bookCover"
              className="block text-gray-700 text-sm font-bold mb-2">
              Cover
            </label>
            <input
              type="file"
              name="bookCover"
              id="bookCover"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Cover"
              value={formData.bookCover}
              onChange={(e) =>
                setFormData({ ...formData, bookCover: e.target.value })
              }
            />
            {errors.bookCover && (
              <p className="block text-red-600">{errors.bookCover}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="bookQty"
              className="block text-gray-700 text-sm font-bold mb-2">
              Qty
            </label>
            <input
              type="number"
              name="bookQty"
              id="bookQty"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Qty"
              value={formData.bookQty}
              onChange={(e) =>
                setFormData({ ...formData, bookQty: e.target.value })
              }
            />
            {errors.bookQty && (
              <p className="block text-red-600">{errors.bookQty}</p>
            )}
          </div>
          <div className="mb-4">
            <div className="flex justify-center gap-4">
              <button
                type="submit"
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 w-1/2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
                className="flex items-center justify-center bg-white-500 hover:bg-gray-100 w-1/2 text-gray-500 border border-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
        </div>
      </form>
    </div>
  );
}
