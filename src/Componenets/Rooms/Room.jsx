import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import RoomListBanner from "./RoomListBanner";
import { Helmet } from "react-helmet";

const Room = () => {
  const rooms = useLoaderData([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Function to filter rooms by price range
  const filterRooms = (room) => {
    const price = room.pricePerNight;
    return price >= priceRange.min && price <= priceRange.max;
  };

  return (
    <div className="">
      <Helmet>
        <title>Rooms | BookBliss</title>
        <meta name="description" content="This is my awesome app." />
      </Helmet>
      <RoomListBanner></RoomListBanner>

      <h1 className="text-3xl font-bold text-[#164863] mb-8 text-center font-extrabold text-5xl">
        Rooms List
      </h1>

      {/* Price range filter */}
      <div className="flex items-center justify-center mb-4">
        <label className="mr-2 font-bold ">Price Range:</label>
        <input
          type="number"
          placeholder="Min Price"
          className="p-2 border border-gray-300 rounded"
          value={priceRange.min}
          onChange={(e) => setPriceRange({ ...priceRange, min: parseFloat(e.target.value) })}
        />
        <span className="mx-2">to</span>
        <input
          type="number"
          placeholder="Max Price"
          className="p-2 border border-gray-300 rounded"
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: parseFloat(e.target.value) })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-4">
        {rooms
          .filter(filterRooms) // Filter rooms based on price range
          .map((room) => (
            <Link to={`/rooms/${room._id}`} key={room.id}>
              <div
                className="card h-96 bg-base-100 shadow-2xl image-full"
                style={{
                  backgroundImage: `url(${room.images[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="card-body text-center">
                  <h2 className="text-white font-bold text-4xl">{room.name}</h2>
                  <p>{room.description}</p>
                  <p className="text-lg font-bold">Price: ${room.pricePerNight} / night</p>
                  <p className="text-lg font-bold">Size: {room.size}</p>
                  <p className="text-lg font-bold">
                    Availability: {room.availability} rooms
                  </p>
                  <p className="text-xl font-bold text-[#DDF2FD]">
                    Customer Review: {room.reviews.length}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Room;
