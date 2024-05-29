import React from 'react';
import { Link } from 'react-router-dom';

const serviceCard = ({service}) => {
    const { _id, RoomDescription, RoomImage, PricePerNight } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={RoomImage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{RoomDescription}</h2>
            <p className="text-xl text-orange-500">Price: ${PricePerNight}</p>
            <div className="card-actions">
                <Link to={ `book/${_id}`}>
                    <button className="btn btn-success btn-outline w-[330px]">Book Now</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default serviceCard;