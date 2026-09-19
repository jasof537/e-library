import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Menu() {
  const navigate = useNavigate();
  const {user, logout} = useAuth();

  const handleHome = (event) => {
    event.preventDefault();
    navigate("/home");
  };

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
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Logo */}
            <div>
              <a href="#" className="flex items-center py-4 px-2 hover:text-gray-700" onClick={handleHome}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 mr-2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>

                <span className="font-semibold text-gray-500 text-lg">
                  E-Library
                </span>
              </a>
            </div>
            {/* Primary menu */}
            <div className="hidden md:flex items-center  space-x-1">
              <a
                href="#"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-700 transition duration-300 flex items-center justify-items-center" onClick={handleHome}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 mr-1">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span>Home</span>
              </a>
              <a
                href="#" onClick={handleLoan}
                className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-700 transition duration-300">
                Loan
              </a>
              <a
                href="#" onClick={handleBook}
                className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-700 transition duration-300">
                Book
              </a>
              <a
                href="#" onClick={handleMember}
                className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-700 transition duration-300">
                Member
              </a>
            </div>
          </div>
          {/* secondary menu */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#"
              onClick={logout}
              className="py-2 px-3 text-gray-500 font-semibold hover:text-gray-700 transition duration-300 flex items-center justify-between">
              {/* <i className=""></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mr-1">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
              <span>Log out</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
