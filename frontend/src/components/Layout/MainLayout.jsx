// components/Layout/MainLayout.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Popup from "../Popup/Popup";
import Login from "../Login/Login";


const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main> {/* هذا هو الجزء الذي ستعرض فيه محتويات الصفحة */}
      <Footer />
    </div>
  );
};

export default MainLayout;
