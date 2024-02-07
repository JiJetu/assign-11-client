import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    // You can implement the logic for subscribing the user to the newsletter here
    // For demonstration purposes, we'll just display a success message
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <div className="newsletter-container flex items-center my-10">
      {/* Left Side (Image) */}
      <div className="newsletter-image flex-1">
        <img
          src={'https://i.ibb.co/YNB0t3x/valeriia-bugaiova-p-PHge-Hz1uk-unsplash.jpg'} // Replace with your image source
          alt="Newsletter Image"
          className="h-auto w-full rounded-md"
        />
      </div>
      {/* Right Side (Newsletter Form) */}
      <div className="newsletter-form  text-center space-y-4 flex-1 p-4">
        <h2 className='font-bold text-4xl ' >Subscribe to Our Newsletter</h2>
        <p className=''>Get updates, deals, and exclusive offers delivered to your inbox.</p>
        <form className=' '>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="border rounded-l  px-2 py-1 w-44"
            />
            <button
              type="button"
              onClick={handleSubscribe}
              className="bg-[#427D9D] text-white rounded-r px-4 py-1"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsletterSignup;
