import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useLoaderData } from 'react-router-dom';

const DoReview = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const { user } = useContext(AuthContext);
  console.log(user);

  const bookings = useLoaderData()

  console.log(bookings);

  const currentDateTime = new Date(); // Get the current date and time
  const date = currentDateTime.toLocaleDateString(); // Get the date string
  const time = currentDateTime.toLocaleTimeString(); // Get the time string


  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = {
      rating,
      reviewText,
      date,
      time,
      userEmail: user.email,
      userNmae: user.displayName,
      userimage: user.photoURL,
      bookingName: bookings.name,
      bookingPhoto: bookings.photo,

    };

    try {
      const response = await fetch('https://book-bliss-server-c9k31lj59-ji-jetus-projects.vercel.app/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      if (response.ok) {
        Swal.fire('Success!', 'Review submitted successfully ,Check your review in the room details page and home pages testimonial', 'success');
        setRating(0);
        setReviewText('');
      } else {
        Swal.fire('Error!', 'Failed to submit review , please log in and booked a room to gave a review', 'error');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      Swal.fire('Error!', 'Failed to submit review , please log in and booked a room to gave a review', 'error');
    }
  };



  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}>
      <div className="max-w-md mx-auto p-6 bg-black glass text-white rounded-lg shadow-xl my-20">

        <div className='flex gap-4 justify-center my-4 items-center'>
          <h2 className="text-2xl font-bold mb-4 text-center">Post Reviewer: {user.displayName}</h2>
          {bookings.photoURL ? (
            <img className='h-16 w-16 rounded-full' src={bookings.photoURL} alt="User Avatar" />
          ) : (
            <p>No image available</p>
          )}
        </div>



        <form onSubmit={handleSubmit}>
          <div className="mb-4">


            <div className=' grid justify-center space-y-2 text-center'>
              <h2 className='text-xl font-bold'>Rating for:{bookings.name}</h2>



              <img className='h-52 w-72 rounded-lg' src={bookings.photo} alt="" />
            </div>

            <label className="block text-sm font-bold mb-2" htmlFor="rating">
              Rating:
            </label>
            <select
              className="block w-full p-2 text-[#427D9D] border rounded-md"
              id="rating"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="reviewText">
              Review:
            </label>
            <textarea
              className="block w-full text-[#427D9D] p-2 border rounded-md"
              id="reviewText"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </div>

          <button
            className="bg-[#427D9D] hover.bg-[#164863] text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoReview;
