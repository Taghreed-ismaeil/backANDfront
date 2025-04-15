import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';


const LoginPopup = ({ loginPopup, setLoginPopup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLoginPopup = (e) => {
    e.preventDefault();
    // إرسال البيانات (email, password) لتسجيل الدخول
    console.log('Email:', email);
    console.log('Password:', password);

  };

  return (
    <>
      {loginPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-blue/50 
        backdrop-blur-sm flex items-center justify-center">
          <div className="p-4 shadow-md bg-[#EBE8E1]
           dark:bg-gray-900 rounded-md w-[500px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold flex-grow text-center">
                Log In</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setLoginPopup(false)}
              />
            </div>

            {/* Login Form */}
            <form onSubmit={handleLoginPopup} className="flex flex-col items-center
             space-y-8">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-1/2 rounded-full border border-gray-300
                 dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-1/2 rounded-full border border-gray-300
                 dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
                required
              />
              <div className="flex flex-col items-start space-y-2 mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Remember me
                </label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot Password?
                </a>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
              
                  className="bg-gradient-to-r from-primary to-secondary
                   text-white py-1 px-4 rounded-full hover:scale-105
                    duration-200"
                >
                  Log In
                </button>
              </div>
            </form>

            {/* Optional Social Login */}
            <div className="mt-4 flex justify-center gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary
               text-white px-4 py-2 rounded-full">
                <FaGoogle className="text-lg" />
                </button>
              <button className="bg-gradient-to-r from-primary to-secondary
               text-white px-4 py-2 rounded-full">
                <FaFacebook className="text-lg" />
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
