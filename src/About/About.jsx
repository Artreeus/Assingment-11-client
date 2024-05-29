import React from "react";

const About = () => {
  return (
    <>
    <section>
    <div
      className="hero h-96 relative"
      style={{
        backgroundImage: "url(https://i.ibb.co/YPJNNc6/hotel-exterior.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black opacity-60 absolute inset-0"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Our Hotel</h1>
          <p className="mb-5">
            Experience luxury and comfort like never before at our stunning
            hotel. Nestled in the heart of breathtaking scenery, our hotel
            offers a perfect blend of elegance and tranquility.
          </p>
          <button className="btn btn-success btn-outline">
            Book Your Stay
          </button>
        </div>
      </div>
    </div>
    </section>
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl my-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Discover Our Hotel Features</h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">Explore the unique features and amenities that make our hotel an ideal choice for your stay.</p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Luxurious Accommodations</h3>
            <p className="mt-3 text-lg dark:text-gray-600">Indulge in comfort and style with our beautifully appointed rooms and suites, designed to provide the ultimate relaxation experience.</p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Spa & Wellness Facilities</h4>
                  <p className="mt-2 dark:text-gray-600">Relax and rejuvenate at our spa, offering a range of treatments and therapies to pamper your body and soul.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Fine Dining Experience</h4>
                  <p className="mt-2 dark:text-gray-600">Savor exquisite culinary delights at our onsite restaurants, where our expert chefs create delectable dishes using the finest ingredients.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Outdoor Recreational Activities</h4>
                  <p className="mt-2 dark:text-gray-600">Explore the natural beauty surrounding our hotel with a range of outdoor activities, including hiking, biking, and water sports.</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img src="https://i.ibb.co/YPJNNc6/hotel-exterior.jpg" alt="Hotel Exterior" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 lg:h-[500px] lg:w-[500px]" />
          </div>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div className="lg:col-start-2">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Unmatched Hospitality</h3>
            <p className="mt-3 text-lg dark:text-gray-600">Experience warm hospitality and personalized service from our dedicated staff, ensuring a memorable stay from start to finish.</p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Concierge Services</h4>
                  <p className="mt-2 dark:text-gray-600">Let our concierge team assist you in planning your itinerary, arranging transportation, and making reservations for local attractions.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Business & Event Facilities</h4>
                  <p className="mt-2 dark:text-gray-600">Host successful meetings, conferences, and special events in our state-of-the-art venues equipped with modern amenities and technology.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">24/7 Room Service</h4>
                  <p className="mt-2 dark:text-gray-600">Enjoy the convenience of round-the-clock room service, allowing you to dine in the comfort and privacy of your own room.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10  lg:mt-0 lg:col-start-1 lg:row-start-1">
            <img src="https://i.ibb.co/D7sW2Wt/hotel-interior.jpg" alt="Hotel Interior" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 lg:h-[500px] lg:w-[500px]" />
          </div>
        </div>
      </div>
    </section>
    </>
   
  );
};

export default About;
