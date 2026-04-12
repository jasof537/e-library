import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dob: "",
    password: "",
  });
  const defaultErrors = {
    fullName: "",
    email: "",
    dob: "",
    password: "",
  };
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if(!formData.fullName) newErrors.fullName = "Name is required";
    if(!formData.email) newErrors.email = "Email is required";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(formData.email && !emailRegex.test(formData.email)) newErrors.email = "Email format is wrong";

    if(!formData.dob) newErrors.dob = "Date of Birth is required";
    if(!formData.password) newErrors.password = "Password is required";
    if(formData.password && formData.password.length < 8) newErrors.password = "Password minimum 8 characters";

    return newErrors;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if(Object.keys(validationErrors).length === 0 ) {
      setErrors(defaultErrors);
      alert("Process register");
    } else {
      setErrors(validationErrors);
    }
  }
  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className="font-sans text-gray-900">
      <div className="min-h-screen flex flex-col items-center pt-6 sm:pt-12 bg-gray-100">
        <h5 className="font-medium text-3xl">Register</h5>
        <form className="w-full bg-white md:max-w-md mt-6 px-8 py-6 shadow-md overflow-hidden md:rounded-lg"
        onSubmit={handleRegister}>
          <div>
            <label
              htmlFor="fullname"
              className="block font-semibold text-sm text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Admin Library"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
            {errors.fullName && <p className="block text-red-500">{errors.fullName}</p>}
          </div>
          <div className="mt-4">
            <label
              htmlFor="dob"
              className="block font-semibold text-sm text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              className="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              value={formData.dob}
              onChange={(e) => setFormData({...formData, dob: e.target.value})}
            />
            {errors.dob && <p className="block text-red-500">{errors.dob}</p>}
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block font-semibold text-sm text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="admin@library.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {errors.email && <p className="block text-red-500">{errors.email}</p>}
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block font-semibold text-sm text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="admin@123"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            {errors.password && <p className="block text-red-500">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-end mt-4">
            <button
              type="button"
              className="inline-flex items-center px-4 text-blue-500 hover:text-blue-700"
              onClick={handleLogin}>
              Login
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-3 border border-transparent rounded-md font-semibold text-white text-xs focus:ring-indigo-500  transition duration-150 bg-indigo-500 hover:bg-indigo-700">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
