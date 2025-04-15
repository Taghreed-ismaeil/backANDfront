import React from 'react';
import Img1 from "../../assets/product/hallPro.jpg";
import Img2 from "../../assets/product/weddingPro.jpg";
import Img3 from "../../assets/product/photoPro.jpg";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Events",
        color: "white",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Img2,
        title: "Wedding",
        color: "red",
        aosDelay: "200"
    },
    {
        id: 3,
        img: Img3,
        title: "Photographer",
        color: "brown",
        aosDelay: "400"
    }
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-secondary">
                Top Selling For You!
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
            <p data-aos="fade-up" className="text-base text-gray-400">
                We will help you easily find and book venues and services for weddings, parties, and other events.
            </p>
        </div>

        {/* body section */}
        <div>
          <div className="flex justify-center items-center flex-wrap gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="flex flex-col items-center space-y-3"
                >
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-[220px] w-[250px] object-cover rounded-md"
                  />
                  <h3 className="font-semibold">{data.title}</h3>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
