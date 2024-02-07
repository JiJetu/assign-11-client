import React from 'react';
import AboutBaner from './AboutBaner';

function AboutUs() {
  return (
    <div className="p-8">

        <AboutBaner></AboutBaner>
        
      <h1 className="text-4xl font-bold mb-4">About Our Hotel</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-4 mb-6">
          <img
            src="https://i.ibb.co/ByfMRMG/helena-lopes-Qpjyq-Yy5-R-U-unsplash.jpg"
            alt="Hotel Image"
            className="w-full rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="mb-6">
            Welcome to BookBliss, where your comfort and satisfaction are our top priorities. 
            We are a luxury hotel dedicated to providing exceptional service and creating memorable experiences.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 md:pr-4 mb-6">
          <img
            src="https://i.ibb.co/GshkwkW/roberto-nickson-He1-Gpj661-Vg-unsplash.jpg" // Add the URL of your history image
            alt="History Image"
            className="w-full rounded-md"
          />
          <h2 className="text-2xl font-bold mb-2">Our History</h2>
          <p className="mb-6">
            BookBliss was founded in [Year] by [Founder's Name]. Since our inception, we have been committed to
            offering a unique blend of luxury and hospitality. Over the years, we have consistently evolved to meet
            the changing needs of our guests.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pl-4 mb-6">
          <img
            src="https://i.ibb.co/qgV3g1m/marten-bjork-n-IKQDCyr-G0-unsplash.jpg" // Add the URL of your mission image
            alt="Mission Image"
            className="w-full rounded-md"
          />
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="mb-6">
            Our mission is to provide an unparalleled guest experience, ensuring that every stay is both comfortable
            and memorable. We aim to exceed our guests' expectations by delivering exceptional service, luxurious
            accommodations, and world-class amenities.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 md:pr-4 mb-6">
          <img
            src="https://i.ibb.co/mzV0XCr/manuel-moreno-DGa0-LQ0y-DPc-unsplash.jpg" // Add the URL of your values image
            alt="Values Image"
            className="w-full rounded-md"
          />
          <h2 className="text-2xl font-bold mb-2">Our Values</h2>
          <p className="mb-6">
            - Guest-Centric Approach: We prioritize our guests' needs and go the extra mile to make their stay
            enjoyable.
            <br />
            - Excellence: We are committed to delivering excellence in all aspects of our operations.
            <br />
            - Integrity: We conduct our business with honesty and transparency.
            <br />
            - Sustainability: We are dedicated to environmental responsibility and sustainable practices.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pl-4 mb-6">
          <img
            src="https://i.ibb.co/pRDzMdW/Golden-Luxury-Refined-Interior-Design-Logo.png" // Add the URL of your team image
            alt="Team Image"
            className="w-full rounded-md"
          />
          <h2 className="text-2xl font-bold mb-2">Our Team</h2>
          <p className="mb-6">
            At BookBliss, our team is our greatest asset. Our dedicated staff members work tirelessly to ensure
            your comfort and satisfaction. Meet our team and the individuals who make your stay remarkable.
          </p>
        </div>
      </div>

     
      
    </div>
  );
}

export default AboutUs;
