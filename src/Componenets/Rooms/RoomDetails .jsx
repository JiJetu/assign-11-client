import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from 'sweetalert';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import RoomReviews from './RoomReviews';





const RoomDetails = () => {
  const rooms = useLoaderData();
  const [bookingDate, setBookingDate] = useState(new Date());
  const [bookingDuration, setBookingDuration] = useState(1); // Default duration is 1 day
  const [showSummary, setShowSummary] = useState(false);
  const [availableSeats, setAvailableSeats] = useState(rooms.availability);
  const [userBookings, setUserBookings] = useState([]);



  const {user} =useContext(AuthContext);

 // Fetch the user's bookings when the component mounts
 useEffect(() => {
  if (user) {
    fetch(`https://book-bliss-server-c9k31lj59-ji-jetus-projects.vercel.app/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // Ensure that data is an array or default to an empty array
        setUserBookings(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error('Error fetching user bookings:', error);
      });
  }
}, [user]);


// Function to check if the user has already booked the room
const userHasBookedRoom = () => {
  return userBookings.some((booking) => booking._id === rooms._id);
};



const handleBookNow = () => {
  if (availableSeats > 0) {
    if (userHasBookedRoom()) {
      Swal.fire('Error', 'You have already booked this room.', 'error');
    } else {
      // If there are available seats and the user hasn't booked the room, allow the booking
      const summary = `Room: ${rooms.name}\nDate: ${bookingDate.toDateString()}\nDuration: ${bookingDuration} days\nTotal Price: $${rooms.pricePerNight * bookingDuration}\nRoom Description: ${rooms.description}`;

      swal({
        title: "Booking Summary, Now please confirm Booking",
        text: summary,
        icon: "info",
        buttons: true,
      }).then((confirmed) => {
        if (confirmed) {
          // Implement your logic here to proceed with the booking.
          setShowSummary(true);

          // Decrement available seats
          setAvailableSeats(availableSeats - 1);
        }
      });
    }
  } else {
    // No available seats, show an error message
    swal('Error', 'The room is not available.', 'error');
  }
};

  const handleConfirmBooking = async () => {
    
      try {
       // Create a cartProduct object with the data you want to save
      const roomDetails = {
        uname: user.name,
        email:user.email,
        name: rooms.name,
        type: rooms.size,
        price: rooms.pricePerNight,        
        rating: rooms.availability,
        photo: rooms.images,
        date: bookingDate.toDateString(),
        duration:bookingDuration,
      
      };

      console.log(roomDetails);

        // Send a POST request to your server to add the product to the cart
        const response = await fetch('https://book-bliss-server-c9k31lj59-ji-jetus-projects.vercel.app/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(roomDetails), // Send the cartProduct data in the request body
        });
  
        if (response.ok) {
          // The item was added to the cart successfully
          Swal.fire({
            title: 'Added!',
            text: 'Item has been added to My Booking list',
            icon: 'success',
            confirmButtonText: 'Okay!'
          })
        } else {
          // There was an error adding the item to the cart
          Swal.fire({
            title: 'Something is Wrong',
            text: 'Try age again',
            icon: 'error',
            confirmButtonText: 'Okay!'
          })
        }
      } catch (error) {
        console.error('Error adding item to lis:', error);
      }
  
  };



  return (
    <div className="my-20">
      <h1 className="text-center font-bold text-6xl my-10">{rooms.name} Details</h1>
      <div className="card glass bg-[#DDF2FD] shadow-xl m-4">
        <div className="flex gap-6 m-4">
          {rooms.images.map((image, index) => (
            <figure key={index} className="w-1/2">
              <img
                className="rounded-lg h-28 lg:h-72 w-full"
                src={image}
                alt={`Room ${index + 1}`}
              />
            </figure>
          ))}
        </div>
        <div className="card-body text-center">
          <h2 className="text-4xl font-bold">{rooms.name}</h2>
          <p className="text-xl">{rooms.description}</p>
          <p className="font-bold text-lg">Price per Night: ${rooms.pricePerNight}</p>
          <p className="font-bold text-lg">Room Size: {rooms.size}</p>
          <p className="font-bold text-lg">Availability: {rooms.availability} rooms</p>
          {rooms.specialOffers && <p className="font-bold text-[#f3a648]">Special Offers: {rooms.specialOffers}</p>}

          {/* Date Picker */}
          <div className="my-4 space-y-3 ">
            <h2 className="font-bold text-lg">Select Booking Date</h2>
            <DatePicker selected={bookingDate} onChange={date => setBookingDate(date)} />
            <div className='grid justify-center items-center'>
              <label>Select Booking Duration (in days):</label>
              <input
                className=''
                type="number"
                value={bookingDuration}
                onChange={(e) => setBookingDuration(parseInt(e.target.value))}
              />
            </div>
          </div>

          <button className="btn text-white bg-[#164863] hover-bg-[#427D9D]" onClick={handleBookNow}>
            Book Now
          </button>

          {/* Booking Summary */}

          <div>
            {showSummary && (
              <div className="my-20 grid justify-center space-y-2">
                <hr className='bg-[#164863] h-1 m-4' />
                <h2 className="text-4xl font-bold">Booking Summary</h2>
                <p>Room: {rooms.name}</p>
                <p>Date: {bookingDate.toDateString()}</p>
                <p>Duration: {bookingDuration} days</p>
                <p>Total Price: ${rooms.pricePerNight * bookingDuration}</p>
                <p>Room Description: {rooms.description}</p>
                <Link
          to='/mybookings'
        >
          <button 
          
          onClick={handleConfirmBooking}
          className="btn text-white bg-[#164863] hover-bg-[#427D9D]">
            Confirm Booking
          </button>
        </Link>
              </div>
            )}
          </div>


        </div>
      </div>


<div className="">
    <RoomReviews></RoomReviews>
</div>
 




    </div>
  );
};

export default RoomDetails;
