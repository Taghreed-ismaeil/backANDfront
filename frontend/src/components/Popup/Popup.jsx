import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({signinPopup , setSigninPopup}) => {
    const [role, setRole ]=useState('');
    const [email, setEmail ]=useState('');
    const [password, setPassword ]=useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');

    const handleRoleChange = (e) => {
        setRole(e.target.value);
      };
    
  return (
 <>
      {
        signinPopup && <div className="popup">
<div className="h-screen w-screen fixed top-0 left-0
bg-blue/50 backdrop-blur-sm flex items-center justify-center">
    <div className="fixed top-1/2 left-1/2-translate-x-1/2 -translate-y-1/2
     p-4 shadow-md bg-[#EBE8E1] dark:bg-gray-900 rounded-md
    duration-200 w-[500px]">
        {/*header */}
<div className="flex items-center justify-between ">
    <div>
        <h1 className="text-lg font-semibold"> Sign Up</h1>
    </div>
    <div>
        <IoCloseOutline 
        className="text-2xl cursor-pointer"
        onClick={() => setSigninPopup(false)}/>
    </div>
</div>
        {/*from section*/}
        <div className="mt-4 ">
               <input type="Email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-gray-300
            dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-6" />
               <input type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-full border border-gray-300
            dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-6" />
               <input type="Password" 
            placeholder="Comfrim Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-full border border-gray-300
            dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-6" />
               <input type="Phone" 
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-full border border-gray-300
            dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-6" />
               <input type="City " 
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-full border border-gray-300
            dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-6" />
          
             {/* Role Dropdown */}
                <div className="mb-6  ">
                <select
                  value={role}
                  onChange={handleRoleChange}
                  className="w-full rounded-full border border-gray-300
                   dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
                >
                  <option value="" className="text-lg font-semibold">Select Role</option>
                  <option  value="user">User</option>
                  <option value="admin" >Admin</option>
                </select>
              </div>
            </div>

               {/* Submit Button */}        
        <div className="flex justify-center">
        <button className="bg-gradient-to-r from-primary to-secondary
        hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
            Sign Up
        </button>
        </div>
     
    </div>

</div>



        </div>
      }
      </>
  )
}

export default Popup
