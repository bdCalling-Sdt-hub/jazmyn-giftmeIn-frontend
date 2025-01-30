'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowRight } from 'lucide-react';

export default function BannerCarousel() {
  return (
    <div className="w-full h-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        <style jsx>{`
          :global(.swiper-pagination-bullet) {
            width: 8px;
            height: 10px;
            background-color: #F82BA9;
            transition: all 0.3s ease;
          }

          :global(.swiper-pagination-bullet-active) {
            width: 30px;
            height: 10px;
            background-color: #000;
            border-radius: 5px;
          }
        `}</style>

        {[...Array(3)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[url('/images/Banner.jpg')] bg-no-repeat bg-cover bg-center">
              <div className="flex w-[1209px] h-auto py-[264px] mx-auto flex-col container gap-[24px]">
                <h3 className="text-xl leading-[40px] font-bold text-primary tracking-[5px] uppercase">
                  Never Miss a Special Day!
                </h3>
                <h3 className="font-bold text-[60px] leading-[80px]">
                  Personalized Gifts for <br /> Every Occasion.
                </h3>
                <p className="text-[#160E4B] font-normal text-[25px] leading-[44px]">
                  Track birthdays, plan surprises, and get the coolest gifts <br />
                  delivered—effortlessly.
                </p>
                <button className="flex items-center gap-[10px] w-[197px] bg-primary text-[20px] font-semibold leading-[30px] text-white px-[13px] py-[17px] rounded-[12px] transition-all">
                  Get Started
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
