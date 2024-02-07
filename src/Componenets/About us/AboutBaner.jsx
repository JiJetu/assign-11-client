const AboutBaner = () => {
    return (
      <section className="relative h-[500px] mb-10">
        {/* Background GIF */}
        <div className="absolute inset-0 bg-cover bg-center z-0 ">
          <img
            src="https://i.ibb.co/mzV0XCr/manuel-moreno-DGa0-LQ0y-DPc-unsplash.jpg"
            alt="Background GIF"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Opacity Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
  
        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Welcome to BookBliss</h1>
            <p className="mt-4 text-lg">
              Discover a world of luxury and comfort at our hotel. Book your stay today!
            </p>
            <button className="mt-6 px-6 py-3 text-white bg-[#427D9D] rounded-full hover-bg-[#164863]">
              Book Now
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutBaner;
  