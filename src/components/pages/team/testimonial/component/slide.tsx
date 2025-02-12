"use client"; // Nếu bạn đang sử dụng thư mục `app`

import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import Image from "next/image";

type SliderProps = {
  slides: Array<{ id: number; content: React.ReactNode }>;
};

const SliderComponent: React.FC<SliderProps> = ({ slides }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto mt-[44px] flex justify-center h-[330px] relative">
      {/* Custom Previous Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="custom-prev"
      >
        <Image
          src="/team-images/arrow-left.svg"
          alt=""
          width={110}
          height={110}
        ></Image>
      </button>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={300}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="p-4 flex justify-center md:mb-10">
              {slide.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Next Button */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="custom-next"
      >
        <Image
          src="/team-images/arrow-right.svg"
          alt=""
          width={110}
          height={110}
        ></Image>
      </button>
    </div>
  );
};

export default SliderComponent;
