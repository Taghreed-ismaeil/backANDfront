import React from "react"

import Image1 from "../../assets/Hero/noback.png"
import Image2 from "../../assets/Hero/woman.png"
import Image3 from "../../assets/Hero/coupls.png"
import Slider from "react-slick";

const ImageList =[{
    id:1,
    img:Image1,
    title:"Ehjezli",
    description:"We will help you find the best place for your special day, stress-free, easily, and with the best deals, ensuring a seamless and unforgettable experience!",
},
{
    id:2,
    img:Image2,
    title:"Ehjezli",
    description:"Plan your perfect event effortlessly—venues, planners, catering, and more, all in one place, quickly and easily!",
},
{
    id:3,
    img:Image3,
    title:"Ehjezli",
    description:"  Our platform helps you find venues,event planners, catering, photography, and décor—all in one place for a perfect event!"
}
]

const Hero = ({handleSigninPopup} ) => {

    var sittings ={
        dots: false,
        arrows:false,
        infinite: true,
        speed: 900,
       
        autoplay: true,
        slidesToScroll: 1,
      
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnfoucs:true,

        };

  return (
    <div className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 justify-center items-center
    dark:bg-gray-950 dark:text-white duration-200">
        {/*background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 
      absolute -top-1/2 right-0 rounded-3xl rotate-45
      -z-9">

      </div>
      {/*hero section*/}
      <div className="container pb-8 sm:pb-0">
        {/*sliderrrrr*/}
        <Slider {...sittings}>
            {ImageList.map((data)=>
            (
                <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/*text content section */}
                    <div className=" flex flex-col justify-center gap-4
                    pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative
                    z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold ">
            {data.title}
            </h1>
            <p className="text-lg sm:text-xl text-center">
         {data.description}
            </p>
            <div>
                <button  
                onClick={handleSigninPopup} 
                className="bg-gradient-to-r from-primary to-secondary
              transition-all duration-200 text-white py-1 px-4 
              rounded-full">
                    Book Now 
                </button>
            </div>
                    </div>
            {/* img content section*/}
            <div className="order-1 sm:order-2 mt-16">
                <div className="relative z-10 " >
                    <img src={data.img}  alt="" 
                    className="w-[300px] h-[300px] sm:h-
              [450px] sm:w-[450px] sm:scale-105
              lg:scale-120 object-contain
               mx-auto"/>
                </div>
                </div>
            </div>
                  </div>
            ))}
       
        </Slider>

    </div>
    </div>
  )
}

export default Hero
