import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();

  const handleBook = (event) => {
    event.preventDefault();
    navigate("/book");
  };

  const handleLoan = (event) => {
    event.preventDefault();
    navigate("/loan");
  };

  const handleMember = (event) => {
    event.preventDefault();
    navigate("/member");
  };

  return (
    <>
      <div>
        <Menu />
        <div className="max-w-6xl mx-auto my-4 px-5 py-3">
          {/* main */}
          {/* grid */}
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12 mt-2">
            <a
              href="#"
              className="flex flex-col p-6 bg-white border border-gray-200 px-4 py-3 shadow-md rounded mb-4 space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6"
              onClick={handleLoan}>
              <div className="flex items-center justify-center rounded-full shadow-inner w-18 h-18 mt-3 bg-gray-300">
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
              </div>
              <div className="flex-1">
                <h5 className="mb-2 mt-2 text-xl text-gray-500 font-bold">
                  Loan
                </h5>
                <p className="mb-3 text-2xl text-gray-600 font-bold">1.234</p>
                <span className="flex items-center justify-items-center text-md  font-bold  text-gray-500 hover:text-gray-700 transition duration-300">
                  See more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-4 mt-1">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col p-6 bg-white border border-gray-200 px-4 py-3 shadow-md rounded mb-4 space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6"
              onClick={handleBook}>
              <div className="flex items-center justify-center rounded-full shadow-inner w-18 h-18 mt-3 bg-gray-300">
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
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h5 className="mb-2 mt-2 text-xl text-gray-500 font-bold">
                  Book
                </h5>
                <p className="mb-3 text-2xl text-gray-600 font-bold">12.346</p>
                <span className="flex items-center justify-items-center text-md  font-bold  text-gray-500 hover:text-gray-700 transition duration-300">
                  See more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-4 mt-1">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col p-6 bg-white border border-gray-200 px-4 py-3 shadow-md rounded mb-4 space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6"
              onClick={handleMember}>
              <div className="flex items-center justify-center rounded-full shadow-inner w-18 h-18 mt-3 bg-gray-300">
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
              </div>
              <div className="flex-1">
                <h5 className="mb-2 mt-2 text-xl text-gray-500 font-bold">
                  Member
                </h5>
                <p className="mb-3 text-2xl text-gray-600 font-bold">1.234</p>
                <span className="flex items-center justify-items-center text-md  font-bold  text-gray-500 hover:text-gray-700 transition duration-300">
                  See more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-4 mt-1">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
          {/* <div>
            <div className="bg-white border border-blue-700 text-blue-800 px-4 py-3 shadow-md rounded">
              <p className="font-bold">Dashboard</p>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                sit dignissimos a quas dolorem quo minus ducimus nulla adipisci
                exercitationem mollitia ipsum debitis, fugit illum dolore unde,
                ratione blanditiis distinctio?
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
