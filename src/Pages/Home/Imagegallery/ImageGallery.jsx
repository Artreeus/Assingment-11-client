import React from 'react';

const ImageGallery = () => {
  return (
    <div className="container mx-auto my-7">
      <div className="grid gap-4">
        <div>
          <img className="h-[500px] w-full rounded-lg" src="https://i.ibb.co/QphJJPZ/room1.webp" alt="" />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <img className="h-[150px] lg:w-[300px] md:w-[150px] rounded-lg" src="https://i.ibb.co/YtYQsQ3/room2.webp" alt="" />
          </div>
          <div>
            <img className="h-[150px] lg:w-[300px] md:w-[150px] rounded-lg"  src="https://i.ibb.co/nRYLfXf/room3.webp" alt="" />
          </div>
          <div>
            <img className="h-[150px] lg:w-[300px] md:w-[150px] rounded-lg" src="https://i.ibb.co/GPyVD4S/3.webp" alt="" />
          </div>
          <div>
            <img className="h-[150px] lg:w-[300px] md:w-[150px] rounded-lg" src="https://i.ibb.co/ydRPSg8/download-1.jpg" alt="" />
          </div>
          <div>
            <img className="h-[150px] lg:w-[300px] md:w-[150px] rounded-lg" src="https://i.ibb.co/9b7P3T9/download.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
