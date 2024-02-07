import React from 'react';
import { Link } from 'react-router-dom';

const HomeOfferBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#9BBEC8] to-[#427D9D] p-8 text-white my-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Special Offers & Promotions</h2>
      <p className="text-lg mb-8">
        Discover our exclusive discounts and limited-time promotions!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className="bg-white text-black p-4 rounded-lg shadow-md"
          style={{
            backgroundImage: 'url("https://i.ibb.co/GshkwkW/roberto-nickson-He1-Gpj661-Vg-unsplash.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h3 className="text-2xl text-white font-bold mb-2">20% Off winter Sale</h3>
          <p className="mb-4 text-white">
            Get ready for Winter with a 20% discount on select items.
          </p>
          <Link to="/rooms">
          <button className="bg-[#164863] text-white  py-2 px-4 rounded-full hover:bg-blue-700">
            Book Now
          </button>
          </Link>
        </div>

        <div
          className="bg-white text-black p-4 rounded-lg shadow-md"
          style={{
            backgroundImage: 'url("https://i.ibb.co/w7fNDZz/roberto-nickson-r-EJxp-Bskj3-Q-unsplash.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h3 className="text-2xl text-white font-bold mb-2">Limited Time Offer</h3>
          <p className="mb-4 text-white">
            Hurry up and take advantage of this limited-time deal.
          </p>
          <Link to="/rooms">
          <button className="bg-[#164863] text-white  py-2 px-4 rounded-full hover:bg-blue-700">
            Book Now
          </button>
          </Link>
        </div>

        <div
          className="bg-white text-black p-4 rounded-lg shadow-md"
          style={{
            backgroundImage: 'url("https://i.ibb.co/Xz8s8WW/runnyrem-Lfqm-ND-hym8-unsplash.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h3 className="text-2xl text-white font-bold mb-2">New Arrivals</h3>
          <p className="mb-4 text-white">
            Check out our latest arrivals and enjoy a special promotion.
          </p>
          <Link to="/rooms">
          <button className="bg-[#164863] text-white  py-2 px-4 rounded-full hover:bg-blue-700">
            Book Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HomeOfferBanner;
