import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ استيراد useNavigate
import Dashboard from '../Dashboard/Dashboard';

const Popup = ({ signupPopup, setSignupPopup }) => {
  const navigate = useNavigate(); // ✅ إنشاء navigate
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');



  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword || !phoneNumber  || !city) {
      setMessage('Please fill in all fields');
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      return;
      
    }
 


    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/users/signUp', {
        email,
        password,
        confirmPassword,
        phoneNumber,
        city,
      
      });

      console.log('Signup Success:', response.data);
      localStorage.setItem('token', response.data.token);

      setMessage('Account created successfully!');

      // ✅ توجيه لصفحة الداشبورد بعد ثانيتين
      setTimeout(() => {
        setSignupPopup(false); // إغلاق الـ Popup بعد 1.5 ثانية
        navigate('/dashboard'); // توجيه إلى صفحة الداشبورد
      }, 1500);

    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Something went wrong!');
      }
    }
  };

  return (
    <>
      {signupPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-blue/50 backdrop-blur-sm flex items-center justify-center">
          <div className="p-4 shadow-md bg-[#038C7F] dark:bg-gray-900 rounded-md w-[500px]">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold">Sign Up</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setSignupPopup(false)}
              />
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border px-2 py-1"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-full border px-2 py-1"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-full border px-2 py-1"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full rounded-full border px-2 py-1"
              />
              <select
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className="w-full rounded-full border px-2 py-1"
>
  <option value="">Select City</option>
  <option value="Amman">Amman</option>
  <option value="Zarqa">Zarqa</option>
  <option value="Irbid">Irbid</option>
  <option value="Aqaba">Aqaba</option>
</select>
              
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={handleSignUp}
                className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full"
              >
                Sign Up
              </button>
            </div>

            {message && (
              <p
                className={`text-center mt-4 font-medium transition-all duration-300 ${
                  message.toLowerCase().includes('success') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
