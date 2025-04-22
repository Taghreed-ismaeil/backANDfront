import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // استيراد الـ Router
import Subscribe from './components/subscribe/subscribe';
import Dashboard from './components/Dashboard/Dashboard';
import MainLayout from './components/Layout/MainLayout';
import HomeLayout from './components/Layout/HomeLayout';
import Popup from './components/Popup/Popup';
import Login from './components/Login/Login';

import AOS from 'aos';
import 'aos/dist/aos.css';  // استيراد الـ CSS الخاص بـ AOS



const App = () => {
  const [signinPopup, setSigninPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);

  const handleSigninPopup = () => {
    setSigninPopup(!signinPopup);
  };

  const handleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };

React.useEffect(() =>{
  AOS.init({
    offset:100,
    duration:800,
    easing:"ease-in-sine",
    delay:100,
});
AOS.refresh();
},[]);
return (
  <div>

      

    <Routes>
      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />
      {/* مسار آخر يمكن أن يكون HomeLayout أو مكونات أخرى */}
      <Route path="/" element={<HomeLayout />} />
    </Routes>
    
    {/* إضافة الSignup هنا */}
    <Popup signinPopup={signinPopup} setSigninPopup={setSigninPopup} />
    <Login loginPopup={loginPopup} setLoginPopup={setLoginPopup} />
  </div>
);


}

export default App;
