import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { healthInformation } from "../../data/healthInformation";
import "swiper/css";
import "swiper/css/pagination";
import "./healthInfo.scss";

const HealthInfoSwiper = () => {
  return (
    <>
      <div className="col-8">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="mySwiper"
        >
          {healthInformation.map((item) => {
            const Component = item.Component;
            return (
              <SwiperSlide key={item.key}>
                <div className="d-flex justify-content-center">
                  <div className="rounded-4 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.key}
                      style={{ height: 250 }}
                      className="position-relative"
                    />
                    <div className="position-absolute z-3 bottom-0 start-50 translate-middle-x">
                      <Component />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="my-pagination text-center"></div>
        </Swiper>
      </div>
    </>
  );
};

export default HealthInfoSwiper;
