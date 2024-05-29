import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let isMounted = true; // flag to track if the component is mounted

    axios
      .get("https://assingment-11-server-kappa.vercel.app/reviews")
      .then((response) => {
        if (isMounted) {
          setReviews(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });

    return () => {
      isMounted = false; // set flag to false on cleanup
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="max-w-full overflow-x-hidden h-[330px] my-7">
      <h2 className="font-bold text-center text-5xl pb-10">Customer Reviews</h2>
      <Slider {...settings} className="max-w-xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-2">{review.username}</h2>
              <p className="text-gray-700 text-base">{review.comment}</p>
              <div className="flex items-center justify-center mt-4">
                <p className="text-gray-600 text-sm">Rating: {review.rating}</p>
                <svg
                  height="20px"
                  width="20px"
                  viewBox="0 0 47.94 47.94"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 fill-current text-green-500"
                >
                  <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
                </svg>
              </div>
              <p className="text-gray-600 text-xs mt-2">
                Timestamp: {review.timestamp}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
