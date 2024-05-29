import Reviews from "../../../Reviews/Reviews";
import Banner from "../Banner/Banner";
import BookingArea from "../BookingArea/BookingArea";
import ImageGallery from "../Imagegallery/ImageGallery";
import MyMap from "../Map/MyMap";
import ModalComponent from "../ModalComponent/ModalComponent";
import Newsletter from "../Newsletter/Newsletter";
import Services from "../Services/Services";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ModalComponent/>
      <div data-aos="fade-down" data-aos-duration="2000">
        <Banner />
      </div>
      <div data-aos="fade-up" data-aos-duration="2000">
        <BookingArea />
      </div>
      <div data-aos="zoom-in" data-aos-duration="2000">
        <ImageGallery />
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Services />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-center"
      >
        <Newsletter />
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <MyMap />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <Reviews />
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Home;
