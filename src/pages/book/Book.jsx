import Menu from "../Menu";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import IconNotDataFound from "../../../src/assets/img/no-data-found.jpg"
import IconLoading from "../../../src/assets/img/loading.gif"

export default function Book() {
  const navigate = useNavigate();
  const { user, error, setError } = useAuth();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [paginationData, setPaginationData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();

  const handleAdd = () => {
    navigate("/book/add");
  }

  const loadBookData = async (param) => {
    const req = {
      page: currentPage,
      sort: 'id',
      direction: 'asc',
      ...param
    }
    setBooks([])
    setError(false)
    try {
      setLoading(true);
      const url = new URL("http://127.0.0.1:8000/api/books");
      url.search = new URLSearchParams(req).toString();
      const dataUser = JSON.parse(user);
      const userToken = dataUser.token;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userToken}`,
          'Accept': 'application/json'
        }
      })

      const data = await response.json();

      if (data.message) {
        throw new Error(data.message || 'Error when load data books');
      }

      const newData = data.data?.map((row, key) => ({
        ...row,
        idx: currentPage > 1 ? ((currentPage * 10) - 10) + 1 + key : key + 1

      }));

      setBooks(newData);
      setPaginationData(data.meta);
    } catch (err) {
      setError(err.messsage || 'Something went wrong. Please try again!');
    } finally {
      setLoading(false);
    }
  }

  const deleteBook = async (id) => {
    try {
      setLoading(true);
      const dataUser = JSON.parse(user);
      const userToken = dataUser.token;//
      const response = await fetch(`http://127.0.0.1:8000/api/books/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${userToken}`,
          'Accept': 'application/json'
        }
      })

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Error when delete data');
      }

      setMessage("Successfully Deleted Book");
      setCurrentPage(1);
    } catch (err) {
      setError(err.messsage || 'Something went wrong. Please try again!');
    } finally {
      setLoading(false);

    }
  }

  // useEffect(() => {
  //   loadBookData();
  // }, []);
  useEffect(() => {
    setCurrentPage(1)
    loadBookData();
  }, [isSearch]);

  useEffect(() => {
    loadBookData();
    // if (message || error) {
    //   const timer = setTimeout(() => {
    //     setError("")
    //     setMessage("")
    //   }, 1000);

    //   return () => clearTimeout(timer);
    // }

  }, [currentPage]);

  const loadTable = () => {
    return (

      <table className="w-full text-left bg-transparent border-collapse px-3 py-2">
        <thead>
          <tr>
            <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
              No
            </th>
            <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
              IDBook
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
              Cover
            </th>
            <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
              Qty
            </th>
            <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {loading && (
            <tr>
              <td colSpan={8}>
                <div className="flex flex-col items-center">
                  <img src={IconLoading} />
                </div>
              </td>
            </tr>
          )}
          {!loading && books.length === 0 && (
            <tr>
              <td colSpan={8}>
                <div
                  className="flex flex-col items-center text-base font-bold text-gray-800 mb-3 ">
                  <img src={IconNotDataFound} />
                  No data found
                </div>
              </td>
            </tr>

          )}
          {books.map((book) => (

            <tr key={book.id} className="text-gray-500 hover:bg-gray-100">
              <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">{book.idx}</td>
              <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">{book.id_book}</td>
              <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">{book.book_name}</td>
              <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">{book.author}</td>
              <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">{book.year}</td>
              <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">
                <img src={book.cover} width={100} height={100} alt="cover image" />
              </td>
              <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">{book.qty}</td>
              <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left relative flex justify-center space-x-1">
                <>
                  <Link to={`/book/edit/${book.id}`} className="cursor-pointer border border-blue-700 bg-blue-600 rounded px-1 py-1 text-white hover:bg-blue-700 transition duration-150">
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
                  </Link>
                  <button className="cursor-pointer border border-yellow-700 bg-yellow-600 rounded px-1 py-1 text-white hover:bg-yellow-700 transition duration-150" onClick={() => deleteBook(book.id)}>
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
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  const loadSearchLayout = () => {
    return (
      <form className="flex flex-col shadow-md px-3 py-4 mb-6 mt-5" onSubmit={handleSubmit(loadBookData)}>
        <div className="grid md:grid-cols-2 mb-3">
          <div className="md:flex">
            <div className="md:w-1/5 justify-center items-center">
              <label className="block font-semibold text-sm text-gray-700">
                ID Book
              </label>
            </div>
            <div className="md:w-full">
              <input
                type="text"
                {...register('id_book')}
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
                {...register('author')}
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
                {...register('book_name')}
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
                {...register('year')}
                className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button type="submit" className="cursor-pointer px-1 py-1 border border-blue-700 bg-blue-600 rounded text-white hover:bg-blue-700 transition duration-150" disabled={loading}>
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
      </form>
    );
  }

  const renderPagination = () => {
    if (books.length === 0) return null;

    const pages = [];
    for (let i = 1; i <= paginationData.last_page; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => currentPage === i ? {} : setCurrentPage(i)}
          className={`font-medium text-sm ${currentPage === i ? 'bg-blue-600 text-white disabled' : 'bg-white text-gray-500  cursor-pointer hover:bg-blue-600 hover:text-white'} px-2 py-1 border border-blue-600 w-fit h-fit`}>
          {i}
        </button>
      );
    }

    return pages;
  }

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
              className="size-6 mr-2 mt-1">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span className="text-gray-500 font-bold text-xl">Book</span>
          </div>
          {loadSearchLayout()}
          <div className="flex flex-col shadow-md px-3 py-4">
            <div className="flex items-center space-x-1 justify-end mb-2">
              <div className="flex items-center space-x-1">
                <button className="cursor-pointer space-x-1 px-1 py-1 border border-blue-700 bg-blue-600 rounded w-full text-white hover:bg-blue-700 transition duration-150"
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
            {error && <div className="w-full flex mb-2 px-5 py-3 rounded bg-red-400 text-white font-normal">{error}</div>}
            {message && <div className="w-full flex mb-2 px-5 py-3 rounded bg-green-300 text-gray-600 font-normal">{message}</div>}
            <div className="w-full overflow-x-auto border border-gray-300 mb-3">
              {loadTable()}
            </div>
            <div className="flex justify-center w-full mt-3">
              {renderPagination()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
