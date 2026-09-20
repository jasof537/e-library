import moment from "moment"
import { useAuth } from "../../context/AuthContext";
import Menu from "../Menu";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import IconNotDataFound from "../../../src/assets/img/no-data-found.jpg"
import IconLoading from "../../../src/assets/img/loading.gif"
import { useForm } from "react-hook-form";

export default function Member() {
  const { user, error, setError } = useAuth()
  const [members, setMembers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [paginationData, setPaginationData] = useState([]);
  const navigate = useNavigate();
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const dataUser = JSON.parse(user)
  const userToken = dataUser.token
  const { register, handleSubmit, getValues } = useForm();

  const handleAdd = () => {
    navigate("/member/add");
  };

  const loadData = async () => {
    const req = {
      page: currentPage,
      direction: 'asc',
      id_member: getValues("id_member"),
      member_name: getValues("member_name"),
      gender: getValues("gender"),
      nik: getValues("nik")
    }
    setLoading(true)
    setMembers([])
    setError(false)
    try {
      const url = new URL("http://127.0.0.1:8000/api/members");
      url.search = new URLSearchParams(req).toString();
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userToken}`,
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
      if (data.message) {
        setError(data.message || 'Something went wrong. please reload page!');
      }

      const currentData = data.data?.map((row, key) => ({
        ...row,
        idx: currentPage > 1 ? ((currentPage * 10) - 10) + 1 + key : key + 1
      }))
      setMembers(currentData)
      setPaginationData(data.meta)
    } catch (err) {
      setError(err.message || 'Something went wrong. Pleaes try again!')
    } finally {
      setLoading(false)
    }
  }

  const deleteMember = async (id) => {
    setLoading(true)
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/members/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${userToken}`,
          'Accept': 'application/json'
        }
      })

      const data = await response.json();

      if (!data.message) {
        setError(data.message || 'Error when delete data');
      }

      setMessage("Successfully Deleted Member");
      setCurrentPage(1);
      loadData()
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again!')
    } finally {
      setLoading(false)
    }

  }
  useEffect(() => {
    loadData()
  }, [currentPage])

  const handleSearchSubmit = (e) => {
    // If we are already on page 1, manually call loadData, 
    // otherwise setting it to 1 will trigger the useEffect automatically
    if (currentPage === 1) {
      loadData();
    } else {
      setCurrentPage(1);
    }
  };

  const RenderPagination = () => {
    if (members.length === 0) return null;

    const pages = [];
    if (paginationData.last_page < 2) return pages;
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

  const SearchLayout = () => {
    return (
      <form className="flex flex-col shadow-md px-3 py-4 mb-6 mt-5" onSubmit={handleSubmit(handleSearchSubmit)}>
        <div className="grid md:grid-cols-2 mb-3">
          <div className="md:flex">
            <div className="md:w-1/5 justify-center items-center">
              <label className="block font-semibold text-sm text-gray-700">
                ID Member
              </label>
            </div>
            <div className="md:w-full">
              <input
                {...register("id_member")}
                className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              />
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/5 justify-center items-center ml-5">
              <label className="block font-semibold text-sm text-gray-700">
                Name
              </label>
            </div>
            <div className="md:w-full">
              <input
                {...register("member_name")}
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
                NIK
              </label>
            </div>
            <div className="md:w-full">
              <input
                {...register("nik")}
                className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              />
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/5 justify-center items-center ml-5">
              <label className="block font-semibold text-sm text-gray-700">
                Gender
              </label>
            </div>
            <div className="md:w-full">
              <select
                {...register("gender")}
                className="border border-gray-300 w-full px-2 py-1 rounded">
                <option value="">Choose</option>
                <option value="L">Pria</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button type="submit" className="cursor-pointer px-1 py-1 border border-blue-700 bg-blue-600 rounded text-white hover:bg-blue-700 transition duration-150">
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
    )
  }

  const TableLayout = () => {
    return (
      <div className="w-full overflow-x-auto border border-gray-300 mb-3">
        <table className="w-full text-left bg-transparent border-collapse px-3 py-2">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                No
              </th>
              <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                IDMember
              </th>
              <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                NIK
              </th>
              <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                Name
              </th>
              <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                Gender
              </th>
              <th className="px-4 py-3 bg-gray-50 text-gray-700 font-semibold border-l-0 border-r-0 whitespace-nowrap">
                Join Date
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
            {!loading && members.length === 0 && (
              <tr>
                <td colSpan={8}>
                  <div
                    className="flex flex-col items-center text-base font-bold text-gray-800 mb-3 ">
                    <img src={IconNotDataFound} width={200} height={200} />
                    No data found
                  </div>
                </td>
              </tr>

            )}
            {members.map((row, id) => (
              <tr key={id} className="text-gray-500 hover:bg-gray-100">
                <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">{row.idx}</td>
                <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">{row.id_member}</td>
                <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">{row.nik}</td>
                <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">{row.member_name}</td>
                <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">{row.gender === "L" ? "Pria" : "Wanita"}</td>
                <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left">{moment(row.join_date).format("DD MMM YYYY")}</td>
                <td className="border-t-0 px-4 py-3 text-sm font-medium whitespace-nowrap text-left relative flex justify-center space-x-1">
                  <>
                    <Link to={`/member/edit/${row.id}`} className="cursor-pointer border border-blue-700 bg-blue-600 rounded px-1 py-1 text-white hover:bg-blue-700 transition duration-150">
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
                    <button className="cursor-pointer border border-yellow-700 bg-yellow-600 rounded px-1 py-1 text-white hover:bg-yellow-700 transition duration-150" onClick={() => deleteMember(row.id)}>
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
      </div>
    )
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
              className="size-6 text-gray-800">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
            <span className="text-gray-500 font-bold text-xl">Member</span>
          </div>
          {SearchLayout()}
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
            {error && <div className="w-full flex mb-2 px-5 py-3 rounded bg-red-400 text-white font-normal">{error}</div>}
            {message && <div className="w-full flex mb-2 px-5 py-3 rounded bg-green-500 text-white font-normal">{message}</div>}
            {TableLayout()}
            <div className="flex justify-center w-full mt-3">
              {RenderPagination()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
