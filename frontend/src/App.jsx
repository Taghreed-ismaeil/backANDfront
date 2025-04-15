import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Subscribe from './components/subscribe/subscribe';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import AOS from "aos";
import 'aos/dist/aos.css';


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
      <Navbar handleSigninPopup={handleSigninPopup} handleLoginPopup={handleLoginPopup} />
      <Hero handleSigninPopup={handleSigninPopup} handleLoginPopup={handleLoginPopup} />
      <Products />
      <Footer />
      <Popup signinPopup={signinPopup} setSigninPopup={setSigninPopup} />
      <Login loginPopup={loginPopup} setLoginPopup={setLoginPopup} />
    </div>
  );
};

export default App;
