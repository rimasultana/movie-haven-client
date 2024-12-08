import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bannerOne from "../assets/aden-1.jpg";
import bannerTwo from "../assets/aden-2.jpg";
import bannerThree from "../assets/aden-3.jpg";

const Banner = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      spaceBetween={10}
    >
      <SwiperSlide className="relative">
        <img
          src={bannerOne}
          alt="Movie Banner 1"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 text-center">
          <h1 className="text-lg md:text-3xl font-bold">
            Action-Packed Thrills Await
          </h1>
          <p className="text-sm md:text-base">
            Dive into the world of adventure and suspense with the latest
            blockbusters.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img
          src={bannerTwo}
          alt="Movie Banner 2"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 text-center">
          <h1 className="text-lg md:text-3xl font-bold">
            Explore Cinematic Masterpieces
          </h1>
          <p className="text-sm md:text-base">
            Watch the most captivating dramas, comedies, and action-packed
            flicks.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img
          src={bannerThree}
          alt="Movie Banner 3"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 text-center">
          <h1 className="text-lg md:text-3xl font-bold">
            Experience Movie Magic
          </h1>
          <p className="text-sm md:text-base">
            Get lost in the magic of cinematic storytelling like never before.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
