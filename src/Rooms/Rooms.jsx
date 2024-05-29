import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Rooms = () => {
  const spots = useLoaderData();
  const [filteredSpots, setFilteredSpots] = useState(spots);
  
  const filterRooms = (price) => {
    const filteredRooms = spots.filter(spot => spot.PricePerNight <= price);
    setFilteredSpots(filteredRooms);
  };

  return (
    <>
      <div className="my-7 flex justify-center gap-4">
        <button className="btn" onClick={() => filterRooms(100)}>Under $100</button>
        <button className="btn" onClick={() => filterRooms(200)}>Under $200</button>
        <button className="btn" onClick={() => filterRooms(1000)}>Under $1000</button>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
        {filteredSpots.map((spot) => (
          <div key={spot._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            <Link to={`/book/${spot._id}`}>
              <img
                src={spot.RoomImage}
                className="w-full h-64 object-cover object-center"
                alt={spot.RoomName} // Added alt attribute for accessibility
              />
              <p className="font-bold text-center p-4">Price: ${spot.PricePerNight}</p>
              <p className="font-bold text-center p-4">Reviews :  <span className="text-success">{spot.TotalReviews}</span></p>


            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rooms;
