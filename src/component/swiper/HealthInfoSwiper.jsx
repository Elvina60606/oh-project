import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { healthInformation } from "../../data/healthInformation";
import "swiper/css";
import "swiper/css/navigation";
import "./healthInfo.scss";

const HealthInfoSwiper = () => {
  return (
    <>
      <div className="col-9">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="mySwiper"
          style={{ height: 250 }}
        >
          {healthInformation.map()}
          <SwiperSlide>健康促進or衛教資訊公告區</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HealthInfoSwiper;
