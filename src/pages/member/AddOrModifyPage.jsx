import { useEffect, useState } from "react";
import Menu from "../Menu";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddOrModifyPage() {
  const [formType, setFormType] = useState("Add");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    idMember: "IDM-02304234",
    nikMember: "",
    nameMember: "",
    genderMember: "",
    joinMember: new Date().toISOString().split("T")[0],
  });

  const defaultErrors = {
    idMember: "",
    nikMember: "",
    nameMember: "",
    genderMember: "",
    joinMember: "",
  };

  const navigate = useNavigate();
  const location = useLocation();

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
    navigate("/member");
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.idMember) newErrors.idMember = "ID Member is required";
    if (!formData.nikMember) newErrors.nikMember = "NIK Member is required";

    const numericRegex = /^[0-9]*$/;
    if (!numericRegex.test(formData.nikMember))
      newErrors.nikMember = "NIK Member must be number 0-9";
    if (
      formData.nikMember &&
      numericRegex.test(formData.nikMember) &&
      formData.nikMember.length < 16
    )
      newErrors.nikMember = "NIK Member less than 16 character";

    if (!formData.nameMember) newErrors.nameMember = "Name Member is required";
    if (!formData.genderMember)
      newErrors.genderMember = "Gender Member is required";

    return newErrors;
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors(defaultErrors);
      console.log("submitted ", validationErrors);
    } else {
      setErrors(validationErrors);
    }
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
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>
          <span className="text-gray-500 font-bold text-xl">
            {formType} Member
          </span>
        </div>
        <form
          className="flex flex-col shadow-md px-3 py-4 mb-6 mt-5"
          onSubmit={handleSumbit}>
          <div className="mb-4">
            <label
              htmlFor="idMember"
              className="block text-gray-700 text-sm font-bold mb-2">
              ID Member
            </label>
            <input
              type="text"
              name="idMember"
              id="idMember"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="ID Member"
              value={formData.idMember}
              disabled
            />
            {errors.idMember && (
              <p className="block text-red-500">{errors.idMember}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="nikMember"
              className="block text-gray-700 text-sm font-bold mb-2">
              NIK
            </label>
            <input
              type="text"
              name="nikMember"
              id="nikMember"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="NIK Member"
              value={formData.nikMember}
              onChange={(e) =>
                setFormData({ ...formData, nikMember: e.target.value })
              }
            />
            {errors.nikMember && (
              <p className="block text-red-500">{errors.nikMember}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="nameMember"
              className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="nameMember"
              id="nameMember"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Name Member"
              value={formData.nameMember}
              onChange={(e) =>
                setFormData({ ...formData, nameMember: e.target.value })
              }
            />
            {errors.nameMember && (
              <p className="block text-red-500">{errors.nameMember}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="genderMember"
              className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="genderMember"
                value={"M"}
                onChange={(e) =>
                  setFormData({ ...formData, genderMember: e.target.value })
                }
              />
              <label htmlFor="">Male</label>
              <input
                type="radio"
                name="genderMember"
                value={"F"}
                onChange={(e) =>
                  setFormData({ ...formData, genderMember: e.target.value })
                }
              />
              <label htmlFor="">Female</label>
            </div>
            {errors.genderMember && (
              <p className="block text-red-500">{errors.genderMember}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="joinMember"
              className="block text-gray-700 text-sm font-bold mb-2">
              Join Date
            </label>
            <input
              type="date"
              name="joinMember"
              id="joinMember"
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              disabled
              value={formData.joinMember}
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-center gap-4">
              <button
                type="submit"
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 w-1/2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-none">
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
                className="flex items-center justify-center bg-white-500 hover:bg-gray-100 w-1/2 text-gray-700 font-bold py-2 px-4 rounded border border-gray-300 focus:outline-none focus:shadow-none"
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
