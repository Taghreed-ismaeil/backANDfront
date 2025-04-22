import Hero from "../hero/Hero";
import Products from "../products/Products";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import Login from "../Login/Login";

const HomeLayout = ({
  handleSigninPopup,
  handleLoginPopup,
  signinPopup,
  loginPopup,
  setSigninPopup,
  setLoginPopup
}) => {
  return (
    <>
      <Navbar
        handleSigninPopup={handleSigninPopup}
        handleLoginPopup={handleLoginPopup}
      />
      <Hero
        handleSigninPopup={handleSigninPopup}
        handleLoginPopup={handleLoginPopup}
      />
      <Products />
      <Footer />
      {signinPopup && (
        <Popup
          signinPopup={signinPopup}
          setSigninPopup={setSigninPopup}
        />
      )}
      {loginPopup && (
        <Login
          loginPopup={loginPopup}
          setLoginPopup={setLoginPopup}
        />
      )}
    </>
  );
};

export default HomeLayout;
