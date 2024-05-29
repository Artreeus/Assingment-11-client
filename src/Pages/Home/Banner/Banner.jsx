import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="z-0">
             <div className="carousel relative w-full h-[600px] overflow-hidden ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/wrPQF50/slider2.webp" className="w-full rounded-xl" alt="Slide 1" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white text-center'>
                        <h2 className='text-6xl font-bold'>Welcome to Crestview</h2>
                        <p>Experience luxury like never before. Immerse yourself in elegance and comfort during your stay at our hotel.</p>
                        <div className="flex justify-center mt-5">
                           <Link to={'/rooms'}>
                           
                            <button className="btn btn-outline btn-success">Book Now</button>
                           </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between w-full bottom-5">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/p0C75SJ/slider1.webp" className="w-full rounded-xl" alt="Slide 2" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white text-center'>
                        <h2 className='text-6xl font-bold'>Unwind and Relax</h2>
                        <p>Escape to paradise and indulge in ultimate relaxation. Our hotel offers serene surroundings and top-notch amenities.</p>
                        <div className="flex justify-center mt-5">
                           <Link>
                           
                            <button className="btn btn-outline btn-success">Book Now</button>
                           </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between w-full bottom-5">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        </div>
       
    );
};

export default Banner;
