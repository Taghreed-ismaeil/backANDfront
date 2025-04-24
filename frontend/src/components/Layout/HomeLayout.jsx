import Hero from "../hero/Hero";
import Products from "../products/Products";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import Login from "../Login/Login";

const HomeLayout = ({
  handleSignupPopup,
  handleLoginPopup,
  signupPopup,
  loginPopup,
  setSignupPopup,
  setLoginPopup
}) => {
  return (
    <>
      <Navbar
        handleSignupPopup={handleSignupPopup}
        handleLoginPopup={handleLoginPopup}
      />
      <Hero
        handleSignupPopup={handleSignupPopup}
        handleLoginPopup={handleLoginPopup}
      />
      <Products />
      <Footer />
      {signupPopup && (
        <Popup
          signupPopup={signupPopup}
          setSignupPopup={setSignupPopup}
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
