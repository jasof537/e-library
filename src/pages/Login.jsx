// import React from 'react'
// import bgImage from  "../../public/images/bg.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

export default function Login() {
    const navigate = useNavigate();

    const {login, error} = useAuth();
    // const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    //react hook form
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const handleRegister = (event) => {
        event.preventDefault();
        navigate('/register');
    }
  return (
    <div className='font-sans text-gray-900 antialiased'>
        <div className='min-h-screen flex flex-col  sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100'>
            <h5 className='font-medium text-3xl'>E-Library</h5>
            {error && <p className='p-3 rounded-b-sm font-medium text-red-500'>{error}</p>}
            <form onSubmit={handleSubmit(login)} className='w-full sm:max-w-md mt-6  px-8 py-6 bg-white shadow-md overflow-hidden sm:rounded-lg'>
                <div>
                    <div>
                        <label htmlFor="email" className='block font-semibold text-sm text-gray-700 mb-1'>
                            Email
                        </label>
                        <input type="text" {...register("email", { required: "Please input email"})} className='px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full' placeholder='admin@gmail.com'/>
                        {errors.email && <p className='block text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="password" className='block font-semibold text-sm text-gray-700 mb-1'>
                            Password
                        </label>
                        <input type="password" {...register("password", { required: "Please input password"})} className='px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full' placeholder='admin@123'/>
                        {errors.password && <p className='block text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className='flex items-center justify-end mt-4'>
                        <button type='button' className='inline-flex items-center px-4 text-blue-600 hover:text-blue-500' onClick={handleRegister}>Register</button>
                        <button type='submit' className='inline-flex items-center px-4 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 bg-indigo-500 hover:bg-indigo-700 py-3' disabled={isLoading}>{isLoading ? 'Processing' : 'Submit'}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
