const BannerSection = () => {
  return (
    <section className="relative h-[500px] mb-10">
      {/* Background GIF */}
      <div className="absolute inset-0 bg-cover bg-center z-0 ">
        <img
          src="https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg?w=740&t=st=1705473283~exp=1705473883~hmac=b29bfe32cde02355127deccdbc56742d58567c93f5d71414f7f9f344fcbbd2ca"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Opacity Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Book<span className="text-red-400">Bliss</span></h1>
          <p className="mt-4 text-lg">
          Indulge in a realm of opulence and relaxation at our exquisite hotel. <br />Secure your reservation for an unparalleled experience of luxury and comfort. Reserve your stay now!
          </p>
          <button className="mt-6 px-6 py-3 text-white bg-red-400 rounded-full hover-bg-[#164863]">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
