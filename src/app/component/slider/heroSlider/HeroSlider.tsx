'use client';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BannerCard from './BannerCard';

export default function HeroSlider() {
  const slideCount = 2;
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          bulletActiveClass: 'custom-pagination-active',
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: slideCount }).map((_, index) => (
          <SwiperSlide key={index}>
            {/* <div className="h-20 bg-slate-600">Slide {index + 1}</div> */}
            <BannerCard cardData={index + 1}></BannerCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
