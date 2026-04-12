// import React from 'react'
// import bgImage from  "../../public/images/bg.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({});
    const defaultErrors = {
        email: '',
        password: ''
    };

    const validate = () => {

        let newErrors = {};

        if(!formData.email)  newErrors.email = "Email is required";
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(formData.email && !emailRegex.test(formData.email)) newErrors.email = "Email format is wrong";

        if(!formData.password) newErrors.password = "Password is required";

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if(Object.keys(validationErrors).length === 0) {
            setErrors(defaultErrors);
        } else {
            setErrors(validationErrors);
        }
    }

    // const handleLogin = (event) => {
    //     event.preventDefault();
    //     //handle logic login

    //     //redirect
    //     navigate('/home');
    // }

    const handleRegister = (event) => {
        event.preventDefault();
        navigate('/register');
    }
  return (
    <div className='font-sans text-gray-900 antialiased'>
        <div className='min-h-screen flex flex-col  sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100'>
            <h5 className='font-medium text-3xl'>E-Library</h5>
            <form className='w-full sm:max-w-md mt-6  px-8 py-6 bg-white shadow-md overflow-hidden sm:rounded-lg' onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="email" className='block font-semibold text-sm text-gray-700 mb-1'>
                            Email
                        </label>
                        <input type="text" name="email" id="email" className='px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full' placeholder='admin@gmail.com'
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                        {errors.email && <p className='block text-red-500'>{errors.email}</p>}
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="password" className='block font-semibold text-sm text-gray-700 mb-1'>
                            Password
                        </label>
                        <input type="password" name="password" id="password" className='px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full' placeholder='admin@123'
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                        {errors.password && <p className='block text-red-500'>{errors.password}</p>}
                    </div>
                    <div className='flex items-center justify-end mt-4'>
                        <button type='button' className='inline-flex items-center px-4 text-blue-600 hover:text-blue-500' onClick={handleRegister}>Register</button>
                        <button type='submit' className='inline-flex items-center px-4 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 bg-indigo-500 hover:bg-indigo-700 py-3'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
