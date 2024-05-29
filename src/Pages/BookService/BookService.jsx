// BookService.js

import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";
import PrivateRoute from './../../Routes/PrivateRoutes';

const BookService = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const {
    RoomDescription,
    _id,
    PricePerNight,
    RoomImage,
    RoomSize,
    SpecialOffers,
  } = service;

  const [showModal, setShowModal] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    AOS.init();
    const localStorageKey = `roomBookingStatus_${user?.email}_${_id}`;
    const storedBookingStatus = localStorage.getItem(localStorageKey);
    if (storedBookingStatus === "booked") {
      setIsBooked(true);
    }
  }, [user?.email, _id]);

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      RoomImage,
      date,
      service: RoomDescription,
      service_id: _id,
      price: PricePerNight,
    };

    const localStorageKey = `roomBookingStatus_${email}_${_id}`;

    fetch("https://assingment-11-server-kappa.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Room booked successfully");
          setShowModal(false);
          setIsBooked(true);
          localStorage.setItem(localStorageKey, "booked");
        }
      })
      .catch((error) => {
        console.error("Error booking room:", error);
      });
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="card w-[500px] bg-base-100 shadow-xl">
          <figure>
            <img src={RoomImage} className="lg:w-[400px]" alt="Room" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold p-3 mx-auto">
              {RoomDescription}
            </h2>
            <p className="font-bold">
              Room Size: <span className="text-success">{RoomSize}</span>{" "}
            </p>
            <p className="font-bold">
              Price per Night:{" "}
              <span className="text-success">${PricePerNight}</span>{" "}
            </p>
            <p className="font-bold">
              Availibility :
              {isBooked ? (
                <span className="text-red-500">
                  This room is already booked
                </span>
              ) : (
                <span className="text-success">Available</span>
              )}
            </p>
            <p className="font-bold">
              Special Offers:{" "}
              <span className="text-success">{SpecialOffers || "None"}</span>
            </p>
            <div className="card-actions justify-end">
              {!isBooked && (
                <button
                  className="btn btn-success w-full btn-outline"
                  onClick={() => setShowModal(true)}
                >
                  Book Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <>
        <PrivateRoute></PrivateRoute>
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <dialog
            id="my_modal_1"
            className="modal bg-transparent transition-opacity duration-300 ease-in-out"
            open
          >
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-bold text-2xl border-2 p-3 text-center ">
                Book Room
              </h3>
              <form onSubmit={handleBookService} method="dialog">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.displayName}
                      name="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.email}
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> amount</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={"$" + PricePerNight}
                      className="input input-bordered"
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Description</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={RoomDescription}
                      className="input input-bordered"
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Room Size</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={RoomSize}
                      className="input input-bordered"
                      readOnly
                    />
                  </div>
                </div>
                <div className="modal-action flex justify-end mt-6">
                  <button
                    className="btn mr-2"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <input
                    className="btn btn-success tn-block"
                    type="submit"
                    value=" Confirm Booking"
                  />
                </div>
              </form>
            </div>
          </dialog>
        </div>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default BookService;
