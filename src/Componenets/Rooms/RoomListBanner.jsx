

const RoomListBanner = () => {
    return (
        <section className="relative h-[350px] mb-10 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0  "
        style={{
          backgroundImage: 'url("https://i.ibb.co/mzV0XCr/manuel-moreno-DGa0-LQ0y-DPc-unsplash.jpg")', // Replace with your image path
        }}
      ></div>

      {/* Opacity Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-white ">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Find your favourite Room in Your range </h1>
          <p className="mt-4 text-lg">
            Discover a world of luxury and comfort at our hotel. Book your stay today!
          </p>
          <button className="mt-6 px-6 py-3 text-white bg-[#427D9D] rounded-full hover:bg-[#164863]">
            Book Now
          </button>
        </div>
      </div>
    </section>
    );
};

export default RoomListBanner;