import React from "react";
import footerLogo from "../../assets/logo.png";

import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const FooterLinks =[
    {
        id:1,
        title:"Home",
        url:"#"
        },
        {
            id:2,
            title:"About",
            url:"#"
            },
{
    id:3,
    title:"Contact",
    url:"#"
},
    
]

const Footer = () => {
  return (
    <div className="text-white  bg-secondary">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-10 pt-5">
            {/* company details*/}
            <div className="py-8 px-4">
                <h1 className="sm:text=3xl text-xl font-bold 
                sm:text-left text-justify mb-3 flex items-center
                gap-3" >
                    <img src={footerLogo} alt=""
                    className="max-w-[50px]" />
                    Ehjezli</h1>
                <p>Planning your special day—whether it's a wedding, engagement, baby shower, or milestone celebration—requires thoughtful decisions to ensure everything is perfect and memorable. Here’s a complete guide to choosing the best options for your big day!</p>

            </div>
            {/* footer links*/}
            <div className="grid grid-cols-2 sm:grid-cols-3
            col-span-2 md:pl-10"> 
                <div>
          <div className="py-8 px-4">
<h1 className="sm:text-3xl text-xl font-bold sm:text-left
text-justify mb-3"
>Important Links
</h1> 
<ul className="flex flex-col gap-3">
    {FooterLinks.map((link)=>(
            <li className="cursor-pointer hover:text-primary
            hover:translate-x-1 duration-300 text-gray-200"
            key={link.title}>
                <span>
                    {link.title}
                </span>
            </li>
        ))
    }
    
    </ul>       
         </div>
                </div>
                {/*social links*/}
                <div>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#">
                            <FaInstagram className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl" />
                        </a>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Jordan , Amman</p> 

                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <FaMobileAlt />
                            <p>+91 123456789</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
