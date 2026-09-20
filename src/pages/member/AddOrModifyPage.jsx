import { useEffect, useState } from "react";
import Menu from "../Menu";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";

export default function AddOrModifyPage() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id_member: "",
      member_name: "",
      nik: "",
      gender: "",
      join_date: new Date().toISOString().split("T")[0],
    },
  });

  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const formType = location.pathname.split("/")[2];

  const { user, setError, error } = useAuth();



  useEffect(() => {
    if (!user) return;

    const dataUser = JSON.parse(user);
    const userToken = dataUser.token;

    const loadData = async () => {
      setLoading(true);

      try {
        if (formType === "add") {
          const response = await fetch(
            "http://127.0.0.1:8000/api/memberCode",
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
                Accept: "application/json",
              },
            }
          );
          const data = await response.json();

          if (!data.success) {
            throw new Error(data.message || "Something went wrong");
          }

          setValue("id_member", data.memberCode);
        } else {
          const response = await fetch(
            `http://127.0.0.1:8000/api/members/${id}`,
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
                Accept: "application/json",
              },
            }
          );

          const data = await response.json();
          if (data.message) {
            setError(data.message || "Something went wrong");
          }

          const member = data.data;

          reset({
            id_member: member.id_member,
            member_name: member.member_name,
            nik: member.nik,
            gender: member.gender,
            join_date: member.join_date,
          });
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user, id, formType, reset, setValue, setError]);

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/member");
  };

  const handleSave = async (req) => {
    if (!user) return
    try {
      const dataUser = JSON.parse(user);
      const userToken = dataUser.token;
      const formData = new FormData();

      formData.append("id_member", req.id_member);
      formData.append("nik", req.nik);
      formData.append("member_name", req.member_name);
      formData.append("gender", req.gender);
      formData.append("join_date", req.join_date);

      let url = ""
      if (formType === "edit") {
        formData.append("_method", "PUT");
        url = `http://127.0.0.1:8000/api/members/${id}`;
      } else {
        url = 'http://127.0.0.1:8000/api/members';
      }

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
      navigate('/member');
    } catch (err) {
      setError(err.message || 'something went wrong. please try again!')
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
          <span className="text-gray-500 font-bold text-xl capitalize">
            {formType} Member
          </span>
        </div>
        {error && <div className="w-full flex mb-2 px-5 py-3 rounded bg-red-400 text-white font-normal">{error}</div>}
        <form
          className="flex flex-col shadow-md px-3 py-4 mb-6 mt-5"
          onSubmit={handleSubmit(handleSave)}>
          <div className="mb-4">
            <label
              htmlFor="idMember"
              className="block text-gray-700 text-sm font-bold mb-2">
              ID Member
            </label>
            <input
              {...register("id_member", { required: "Please input id member" })}
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="ID Member"
              disabled
            />
            {errors.id_member && (
              <p className="block text-red-500">{errors.id_member.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="nikMember"
              className="block text-gray-700 text-sm font-bold mb-2">
              NIK
            </label>
            <input
              {...register("nik", { required: "Please input NIK", minLength: { value: 16, message: "NIK must be at least 16 digits" } })}
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="NIK Member"
            />
            {errors.nik && (
              <p className="block text-red-500">{errors.nik.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="nameMember"
              className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              {...register("member_name", { required: "Please input member name" })}
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              placeholder="Name Member"
            />
            {errors.member_name && (
              <p className="block text-red-500">{errors.member_name.message}</p>
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
                {...register("gender", { required: "Please choose gender" })}
                value={"L"}
              />
              <label htmlFor="">Pria</label>
              <input
                type="radio"
                {...register("gender")}
                value={"P"}
              />
              <label htmlFor="">Perempuan</label>
            </div>
            {errors.gender && (
              <p className="block text-red-500">{errors.gender.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="joinMember"
              className="block text-gray-700 text-sm font-bold mb-2">
              Join Date
            </label>
            <input
              {...register("join_date")}
              className="px-1 py-1 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full"
              disabled
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-center gap-4">
              <button
                type="submit"
                className={`flex items-center justify-center bg-blue-500 ${loading ? '' : 'hover:bg-blue-700'}  w-1/2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-none`} disabled={loading}>
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
