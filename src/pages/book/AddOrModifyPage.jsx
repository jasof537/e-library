import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";

export default function AddOrModifyPage() {
  const navigate = useNavigate();
  const { user, error, setError } = useAuth();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const location = useLocation();
  const { id } = useParams();
  const formType = location.pathname.split("/")[2];
  // const [error, setError] = useState("");

  useEffect(() => {
    const getNextBookCode = async () => {
      try {
        const dataUser = JSON.parse(user);
        const userToken = dataUser.token;
        const response = await fetch("http://127.0.0.1:8000/api/bookCode", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userToken}`,
            'Accept': 'application/json'
          }
        });
        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message || 'Something went wrong. please reload page!');
        }
        setValue("id_book", data.bookCode);
      } catch (err) {
        setError(err.message);
      }
    }

    const loadBookData = async () => {
      try {
        const dataUser = JSON.parse(user);
        const userToken = dataUser.token;
        const response = await fetch(`http://127.0.0.1:8000/api/books/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userToken}`,
            'Accept': 'application/json'
          }
        });
        const data = await response.json();

        if (data.message) {
          throw new Error(data.message || 'Something went wrong. please reload page!');
        }
        const bookData = data.data;
        setValue("id_book", bookData.id_book);
        setValue("book_name", bookData.book_name);
        setValue("author_id", bookData.author.id);
        setValue("year", bookData.year);
        setValue("qty", bookData.qty);
      } catch (err) {
        setError(err.message);
      }
    }

    if (formType === "add") {
      getNextBookCode();
    } else {
      loadBookData();
    }
  }, []);


  const submit = async (req) => {
    try {
      const dataUser = JSON.parse(user);
      const userToken = dataUser.token;
      const formData = new FormData();
      formData.append("id_book", req.id_book);
      formData.append("book_name", req.book_name);
      formData.append("author_id", req.author_id);
      formData.append("year", req.year);

      if (req.cover[0]) {
        const cover = req.cover[0];
        formData.append("cover", cover);
      }


      formData.append("qty", req.qty);
      if (formType === "edit") {
        formData.append("_method", "PUT");
      }

      const url = formType === "edit" ? `http://127.0.0.1:8000/api/books/${id}` : 'http://127.0.0.1:8000/api/books';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${userToken}`,
        },
        body: formData
      });

      const data = await response.json();

      if (data.message) {
        throw new Error(data.message || 'something went wrong. please try again.');
      }
      window.location.href = '/book';
    } catch (err) {
      setError(err.message || 'something went wrong. please try again!')
    } finally {
      // window.location.href = '/book';
    }
  }

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/book");
  };


  return (
    <div>
      <Menu />
      <form
        className="max-w-6xl mx-auto my-4 px-5 py-3"
        onSubmit={handleSubmit(submit)}>
        {error && <div className="w-full flex mb-2 px-5 py-3 rounded bg-red-400 text-gray-700 font-normal">{error}</div>}
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
          <span className="text-gray-500 font-bold text-xl capitalize">
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
              {...register("id_book", { required: "Please input id_book" })}
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="ID Book"
              disabled
            />
            {errors.id_book && (
              <p className="block text-red-600">{errors.id_book.message}</p>
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
              {...register("book_name", { required: "Please input book name" })}
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Book Name"
            />
            {errors.book_name && (
              <p className="block text-red-600">{errors.book_name.message}</p>
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
              {...register("author_id", { required: "Please input author_id" })}
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Author"
            />
            {errors.author_id && (
              <p className="block text-red-600">{errors.author_id.message}</p>
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
              {...register("year", { required: "Please input year", valueAsNumber: true })}
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Year"
            />
            {errors.year && (
              <p className="block text-red-600">{errors.year.message}</p>
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
              {...register('cover')}
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Cover"
            // value={formData.bookCover}
            // onChange={(e) =>
            //   setFormData({ ...formData, bookCover: e.target.value })
            // }
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
              {...register("qty", { required: "Please input qty", valueAsNumber: true })}
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Qty"

            />
            {errors.qty && (
              <p className="block text-red-600">{errors.qty.message}</p>
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
