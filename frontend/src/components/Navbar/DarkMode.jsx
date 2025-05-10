import React from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
const DarkMode = () => {
  const [theme , setTheme ]=React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme")
     : "light");

     const element = document.documentElement;
React.useInsertionEffect(() =>{
  if(theme === "dark") {
    element.classList.add("dark");
    localStorage.setItem("theme" , "dark");

  }else{
    element.classList.remove("dark");
    localStorage.setItem("theme" , "light");
  }
},[theme]);

  
  return (
  <div className="relative">
    <button 
      onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
   <MdOutlineLightMode className="w-12 cursor-pointer drop-shadow-
   [1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 
   absolute right-0 z-10"
    />
    </button>
    <button  onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
   <MdOutlineDarkMode className="w-12 cursor-pointer drop-shadow-
   [1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"  />
   </button>
  </div>
  
  );
};

export default DarkMode;
 