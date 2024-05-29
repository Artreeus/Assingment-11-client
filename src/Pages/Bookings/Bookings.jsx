// Bookings.js

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `https://assingment-11-server-kappa.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching bookings:", error));
  }, []);

  const handleDelete = (id) => {
    console.log("Deleting booking with id:", id);
    const localStorageKey = `roomBookingStatus_${user?.email}_${id}`;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assingment-11-server-kappa.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok) {
              localStorage.removeItem(localStorageKey);
              console.log("Booking removed from local storage:", localStorageKey);
              return res.json();
            } else {
              throw new Error("Failed to delete booking");
            }
          })
          .then((data) => {
            console.log("Delete response:", data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Booking has been deleted.", "success");
              setBookings((prevBookings) =>
                prevBookings.filter((booking) => booking._id !== id)
              );
            }
          })
          .catch((error) => {
            console.error("Error deleting booking:", error);
            Swal.fire(
              "Error!",
              "Failed to delete your booking. Please try again later.",
              "error"
            );
          });
      }
    });
  };

  const handleUpdateDate = (id, newDate) => {
    const updatedBookingIndex = bookings.findIndex(
      (booking) => booking._id === id
    );
    if (updatedBookingIndex !== -1) {
      const updatedBooking = {
        ...bookings[updatedBookingIndex],
        date: newDate,
      };
      fetch(`https://assingment-11-server-kappa.vercel.app/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedBooking),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            const updatedBookings = [...bookings];
            updatedBookings[updatedBookingIndex] = updatedBooking;
            setBookings(updatedBookings);
            console.log("Booking date updated successfully:", updatedBooking);
          } else {
            console.error("Failed to update booking date:", data.error);
          }
        })
        .catch((error) => {
          console.error("Error updating date:", error);
        });
    } else {
      console.error("Booking not found with ID:", id);
    }
  };

  return (
    <div>
      <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>Cancel Booking</label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Update Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={() => handleDelete(booking._id)} // Pass booking ID to handleDelete
                handleUpdateDate={handleUpdateDate}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
