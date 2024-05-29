
const Newsletter = () => {
  return (
    <div className=" container bg-white text-center rounded-xl shadow-lg p-8 mx-auto my-7">
        
      <img
        className="img-head w-full h-[150px] mt-12"
        src="https://i.ibb.co/hZsXqLP/LYJWgd-K-mail.jpg" 
        alt="subscribe to email"
      />
      <h1 className="title text-3xl font-bold text-gray-900 mt-8">Subscribe Now</h1>
      <p className="description text-gray-600 mt-4">
        Subscribe to our newsletter & stay updated
      </p>
      <div className="form-box flex justify-center items-center mt-6">
        <div className="input-main flex items-center bg-gray-200 px-4 py-2 rounded-full mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope w-6 h-6 mr-2 text-gray-400"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
            />
          </svg>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-transparent outline-none placeholder-gray-400"
          />
        </div>
        <button className="submit bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-full hover:from-red-600 hover:to-pink-600 transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
