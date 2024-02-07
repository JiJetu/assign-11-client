import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch room data from an API endpoint or your JSON file.
    // For example, you can use the fetch() function to get the data.
    fetch('https://book-bliss-server-c9k31lj59-ji-jetus-projects.vercel.app/rooms') // Replace with your API endpoint or JSON file path.
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="bg-gray-100 py-16">
  <div className="container mx-auto">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center font-extrabold text-5xl">
      Featured Rooms
    </h2>
    <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center font-bold text-5xl">
      Explore Our Featured Rooms
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-4">
      {rooms.slice(0, 4).map((room, index) => (
        <div key={index} className="rounded-lg bg-[#DDF2FD] glass shadow-lg overflow-hidden">
          <img src={room.images[0]} alt={room.name} className="w-full h-56 object-cover object-center" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{room.description}</p>
            <p className="text-gray-700 text-lg font-bold">${room.pricePerNight} / night</p>
            <p className="text-gray-600 text-sm mb-4">Room Size: {room.size}</p>
            <p className="text-gray-600 text-sm">Availability: {room.availability} rooms</p>
            <div className="mt-4">
              <button className="bg-[#427D9D] text-white py-2 px-4 rounded-lg">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center my-10">
      <Link to='/rooms'>
      <button className="bg-[#427D9D] text-white py-2 px-4 rounded-lg">See All Rooms</button>
      </Link>
      
    </div>
  </div>
</section>

  );
};

export default FeaturedRooms;
