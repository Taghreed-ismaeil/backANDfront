import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPopup = ({ loginPopup, setLoginPopup }) => {
  const navigate = useNavigate(); 
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginPopup = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/users/login", data);

      if (response.data.success) {
        setMessage("✅ تم تسجيل الدخول بنجاح!");

        // حفظ التوكن وبيانات المستخدم في localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user)); // حفظ بيانات المستخدم

        setTimeout(() => {
          setLoginPopup(false);
          setMessage("");
          navigate("/dashboard"); // التوجيه إلى صفحة الداشبورد بعد تسجيل الدخول
        }, 1500);
      } else {
        setMessage("❌ البريد الإلكتروني أو كلمة المرور غير صحيحة.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("❌ حدث خطأ أثناء محاولة تسجيل الدخول.");
    }
  };

  return (
    <>
      {loginPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-blue/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="p-4 shadow-md bg-[#EBE8E1] dark:bg-gray-900 rounded-md w-[500px]">
            
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold flex-grow text-center">Log In</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setLoginPopup(false)}
              />
            </div>

            <form onSubmit={handleLoginPopup} className="flex flex-col items-center space-y-6">
              <input
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                type="email"
                placeholder="Email"
                className="w-1/2 rounded-full border px-4 py-2"
                required
              />
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder="Password"
                className="w-1/2 rounded-full border px-4 py-2"
                required
              />
              <div className="flex flex-col items-start space-y-2 mb-4 w-1/2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Remember me
                </label>
                <a href="#" className="text-sm text-primary hover:underline">Forgot Password?</a>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full hover:scale-105 duration-200"
                >
                  Log In
                </button>
              </div>
            </form>

            {message && <p className="text-center mt-4 text-red-600">{message}</p>}

            <div className="mt-6 flex justify-center gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full">
                <FaGoogle className="text-lg" />
              </button>
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full">
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
