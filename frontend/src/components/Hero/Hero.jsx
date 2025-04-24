import React, { useState } from "react";
import Image1 from "../../assets/Hero/noback.png";
import Image2 from "../../assets/Hero/woman.png";
import Image3 from "../../assets/Hero/coupls.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Ehjezli",
    description:
      "We will help you find the best place for your special day, stress-free, easily, and with the best deals, ensuring a seamless and unforgettable experience!",
  },
  {
    id: 2,
    img: Image2,
    title: "Ehjezli",
    description:
      "Plan your perfect event effortlessly—venues, planners, catering, and more, all in one place, quickly and easily!",
  },
  {
    id: 3,
    img: Image3,
    title: "Ehjezli",
    description:
      "  Our platform helps you find venues,event planners, catering, photography, and décor—all in one place for a perfect event!",
  },
];

const Hero = ({ handleSigninPopup }) => {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  var sittings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnfoucs: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9" />

      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...sittings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                  <p className="text-lg sm:text-xl text-center sm:text-left">{data.description}</p>
                  <div>
                    <button
                      onClick={handleSigninPopup}
                      className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                {/* Image section */}
                <div className="order-1 sm:order-2 mt-16">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Booking form */}
      <div className="container mt-8">
        <form className="bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
          <div>
            <label htmlFor="locationSelect" className="block mb-1 font-medium">Location</label>
            <select
              id="locationSelect"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="rounded border border-gray-200 px-3 py-1.5 text-sm outline-none w-full"
              required
            >
              <option value="">Select City</option>
              <option value="Amman">Amman</option>
              <option value="Zarqa">Zarqa</option>
              <option value="Irbid">Irbid</option>
              <option value="Aqaba">Aqaba</option>
            </select>
          </div>

          <div>
            <label htmlFor="eventDate" className="block mb-1 font-medium">Date</label>
            <input
              id="eventDate"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded border border-gray-200 px-3 py-1.5 text-sm outline-none w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="guests" className="block mb-1 font-medium">Guests</label>
            <input
              id="guests"
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="rounded border border-gray-200 px-3 py-1.5 text-sm outline-none w-full"
              placeholder="0"
            />
          </div>

          <button className="flex items-center justify-center gap-1 rounded-md bg-primary py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">

            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;