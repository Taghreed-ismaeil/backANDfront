import React from "react"
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./Darkmode";
import { FaCaretDown } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import Popup from "../Popup/Popup";
import Login from "../Login/Login";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";

const menu =[
  {
    "id": 1,
    "name": "Home",
    "icon": "home",
    "url": "/"
    },
      {
        "id": 2,
        "name": "About",
        "icon": "info",
        "url": "/about"
        },
        {
          "id": 3,
          "name": "Contact",
          "icon": "mail",
          "url": "/contact"
        },       
]

const DropdownLinks =[
  {
    id:1,
  name:"Trending Halls",
link:"/#",
    },
    {
      id:2,
   name: "Best Selling",
   link:"/#",
      },
      {
        id:3,
   name: "Top Rated",
   link:"/#",
        },
        ];
 


const Navbar = ({handleSignupPopup , handleLoginPopup} ) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 
    dark:text-white duration-200 relative z-40">
   {/*upper Navbar*/}
   <div className="bg-primary/40 py-2">
    <div className="container flex 
    justify-between item-center">
      <div >
        <a href="#" className="font-bold 
        text-2xl sm:text-3xl flex gap-2">
          <img src={logo} alt="logo"
          className="w-10" />
          Ehjezli
        </a>
      </div>
      {/*search bar*/}
      <div className="flex justify-between items-center
      gap-4">
        <div className="relative group hidden sm:block">
          <input 
          type="text"
           placeholder="Search" 
          className="w-[200px] sm:w-[200px]
          group-hover:w-[300px] transition-all 
          duration-300 rounded-full border
          border-gray-300 px-2 py-1 
          focus:outline-none focus:boder-1 
          focus:border-primary" />
          <IoMdSearch 
          className="text-gray-500 group-hover:text-primary 
          absolute top-1/2 -translate-y-1/2 right-3 "
          />
        </div>
      </div>
      {/* sign/log Button */}
      <div className="flex items-center justify-center">
  <button 
    onClick={() => handleSignupPopup() }
    className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 
    text-white py-1 px-4 rounded-full flex items-center gap-1 group mx-1"
  >
    <span className="text-xl text-white drop-shadow-sm cursor-pointer">
      Sign Up
    </span>
  </button>

  <button 
  
     onClick={() => handleLoginPopup() }
    className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 
    text-white py-1 px-4 rounded-full flex items-center gap-1 group mx-1"
  >
    <span className="text-xl text-white drop-shadow-sm cursor-pointer">
      Log In
    </span>
  </button>
</div>

{/*darkmode switch*/}
<div>
  <DarkMode />
</div>
    </div>
   </div>

   {/*lower Navbar*/}
   <div 
   data-aos="zoom-in"
   className="flex justify-center cursor-pointer"> 
    <ul className="sm:flex hidden items-center gap-4">
      {
        menu.map((data)=>(
          <li key={data.id}>
            <a  href={data.link} className="
            inline-block px-16 hover:text-primary duration-200 
            ">
              {data.name}
            </a>
          </li>
        )
        )
      }
      {/*simple dropdown and links*/}
      <li className="group relative cursor-pointer">
      <a  href="#"
       className="
           flex items-center gap-[4px] py-2
            ">
              Trending 
              <span>
                <FaCaretDown 
                className="transition-all duration-200 
                group-hover:rotate-180" />
              </span>
              </a>
              <div className="absolute z-[9999] hidden
              group-hover:block w-[150px] rounded-md 
              bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((data)=>
                  (<li key={data.id}>
                    <a href={data.link}
                    className="inline-block w-full rounded-md
                    p-2 hover:bg-secondary/20 "
                     >{data.name}
                      </a>
                  </li>

                  ))}
                </ul>
              </div>
      </li>
      </ul>
   </div>
    </div>
  )
}

export default Navbar
