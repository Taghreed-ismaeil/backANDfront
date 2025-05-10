import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      "Our platform helps you find venues, event planners, catering, photography, and décor—all in one place for a perfect event!",
  },
];

// Venue details
const venueList = [
  {
    id: 1,
    name: "Venue A",
    location: "Amman",
    price: "$500",
    rating: 4.5,
    img: Image1,
    capacity: 200,
    facilities: ["Free Wi-Fi", "Projector", "Catering Service", "Sound System"],
    description: "A spacious venue with modern facilities, perfect for weddings and corporate events.",
    policies: "Cancellation policy applies. Full payment required 30 days before the event.",
  },
  {
    id: 2,
    name: "Venue B",
    location: "Zarqa",
    price: "$400",
    rating: 4.0,
    img: Image2,
    capacity: 150,
    facilities: ["Air Conditioning", "Sound System", "Parking", "Event Planning"],
    description: "Ideal for intimate gatherings and conferences, with a beautiful outdoor area.",
    policies: "No pets allowed. Limited parking spaces available.",
  },
  {
    id: 3,
    name: "Venue C",
    location: "Irbid",
    price: "$600",
    rating: 4.8,
    img: Image3,
    capacity: 250,
    facilities: ["Projector", "Catering", "Outdoor Space", "Photo Booth"],
    description: "A grand venue with an elegant setting for large events and parties.",
    policies: "Booking must be confirmed 60 days prior. Refundable deposit required.",
  },
];

const Hero = ({ handleSigninPopup }) => {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [selectedVenue, setSelectedVenue] = useState(null);

  const navigate = useNavigate(); 

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

  // Filter venues based on city
  const filteredVenues = venueList.filter((venue) => {
    return (city ? venue.location === city : true);
  });

  // View venue details
  const handleViewDetails = (venue) => {
    setSelectedVenue(venue);
  };

  // Check availability for a specific venue
  const handleCheckAvailability = () => {
    alert("Checking availability...");
    // Logic to check availability based on city, date, and guests can be added here
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

      {/* Venue filter and availability form */}
      <div className="container mt-8">
        <form className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
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

          <button
            onClick={handleCheckAvailability}
            className="flex items-center justify-center gap-1 rounded-md bg-primary py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
          >
            <span>Check Availability</span>
          </button>
        </form>
      </div>

      {/* Venue Cards Section */}
      <div className="container mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVenues.slice(0, 4).map((venue) => (
            <div key={venue.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img src={venue.img} alt={venue.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{venue.name}</h3>
                <p className="text-sm text-gray-500">{venue.location}</p>
                <p className="text-lg font-semibold mt-2">{venue.price}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">⭐ {venue.rating}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{venue.description}</p>
                <div className="mt-4">
                  <button
                    onClick={() => handleViewDetails(venue)}
                    className="bg-gradient-to-r from-primary to-secondary py-2 px-4 text-white rounded-full mr-2"
                  >
                    View Details
                  </button>
                  <button
                    onClick={handleSigninPopup}
                    className="bg-gradient-to-r from-primary to-secondary py-2 px-4 text-white rounded-full"
                  >
                    Book Now
                  </button>
                  <button
   onClick={() => navigate('/Provider-Page')}

   className="bg-gray-100 text-gray-700 py-2 px-4 rounded-full
   mt-2 hover:bg-primary hover:text-white block"
>
    Add Your Own Venue
  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Venue details modal */}
      {selectedVenue && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold">{selectedVenue.name}</h2>
            <p className="text-gray-500 mt-2">{selectedVenue.description}</p>
            <h3 className="font-semibold mt-4">Capacity: {selectedVenue.capacity} Guests</h3>
            <p className="mt-2"><strong>Facilities:</strong> {selectedVenue.facilities.join(", ")}</p>
            <p className="mt-2"><strong>Policies:</strong> {selectedVenue.policies}</p>
            <button
              onClick={() => setSelectedVenue(null)}
              className="mt-4 text-red-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;