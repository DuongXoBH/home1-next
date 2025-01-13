
"use client"; // Nếu bạn đang sử dụng thư mục `app`

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SliderProps = {
  slides: Array<{ id: number; content: React.ReactNode }>;
};

const SliderComponent: React.FC<SliderProps> = ({ slides }) => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-[44px] flex justify-center h-[330px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={300}
        slidesPerView={1}
        navigation
        loop={true} 
>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="p-4 flex justify-center md:mb-10">{slide.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
