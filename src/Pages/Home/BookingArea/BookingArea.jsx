
const BookingArea = () => {
    return (
      <div className="container booking-area bg-white shadow-lg rounded-md p-6 mx-auto flex justify-center items-center max-w-[1000px] mt-10 ">
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div className="col-lg mb-3 mb-lg-0 p-4 bg-gray-200 rounded-xl ">
            <input type="date" className="form-control w-full p-1" placeholder="Check-in" />
          </div>
          <div className="col-lg mb-3 mb-lg-0 p-4 bg-gray-200 rounded-xl ">
            <input type="date" className="form-control w-full p-1" placeholder="Check-out" />
          </div>
          <div className="col-lg mb-3 mb-lg-0 p-4 bg-gray-200 rounded-xl col-span-2 md:col-span-1">
            <select className="form-select w-full p-1">
              <option selected>Adults</option>
              {[...Array(6)].map((_, index) => (
                <option key={index} value={index + 1}>{index + 1}</option>
              ))}
            </select>
          </div>
          <div className="col-lg mb-3 mb-lg-0 p-4 bg-gray-200 rounded-xl col-span-2 md:col-span-1">
            <select className="form-select w-full p-1">
              <option selected>Children</option>
              {[...Array(6)].map((_, index) => (
                <option key={index} value={index + 1}>{index + 1}</option>
              ))}
            </select>
          </div>
          <div className="col-lg mb-3 mb-lg-0 p-4 bg-gray-200 rounded-xl col-span-full lg:col-span-1">
            <button type="submit" className="btn rounded-2 w-full">
              Check Availability
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default BookingArea;
  