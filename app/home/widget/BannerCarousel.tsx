"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerCarousel = () => {
  const banners = [
    "https://bizweb.dktcdn.net/100/447/333/themes/850272/assets/slider_4.jpg?1740551716867",
    "https://bizweb.dktcdn.net/100/447/333/themes/850272/assets/slider_2.jpg?1740551716867",
    "https://bizweb.dktcdn.net/100/447/333/themes/850272/assets/slider_5.jpg?1740551716867",
    "https://bizweb.dktcdn.net/100/447/333/themes/850272/assets/slider_3.jpg?1740551716867",
  ];

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }} // ✅ Adds pagination dots
        className="w-full h-[600px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                fill={true}
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        /* Centered Pagination Dots */
        .swiper-pagination {
          bottom: 20px !important; /* Adjust position */
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
        }

        /* Pagination Dots (Inactive) */
        .swiper-pagination-bullet {
          background: #ffffff !important; /* White dots */
          opacity: 0.7;
          width: 12px;
          height: 12px;
        }

        /* Active Pagination Dot */
        .swiper-pagination-bullet-active {
          background: #ff9900 !important; /* Change to your desired active color */
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
};

export default BannerCarousel;
