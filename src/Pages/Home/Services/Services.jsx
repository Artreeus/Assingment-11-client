import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://assingment-11-server-kappa.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-4 my-7">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          Discover unparalleled comfort and elegance in our exquisite rooms,
          meticulously designed to ensure a memorable stay for our guests. From
          luxurious suites to cozy single rooms, we offer a diverse range of
          accommodations to cater to every preference and budget.
        </p>
      </div>
      <div
        data-aos="zoom-in-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
