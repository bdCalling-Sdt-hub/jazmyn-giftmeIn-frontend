'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowRight } from 'lucide-react';
import './Banner.css';
import Link from 'next/link';

export default function BannerCarousel() {
  return (
    <div className="w-full h-[calc(100vh-100px)]">
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
            background-color: #f82ba9;
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
            <div className="bannerBg bg-cover bg-center bg-no-repeat h-[calc(100vh-100px)]">
              <div className=" flex items-center justify-center h-full ">
                <div className="flex flex-col container sm:gap-[24px] gap-[12px]">
                  <h3 className="sm:text-xl text-sm leading-[40px] font-bold text-primary tracking-[5px] uppercase">
                    Never Miss a Special Day!
                  </h3>
                  <h3 className="font-bold md:text-[60px] sm:text-[50px] text-[30px] sm:leading-[80px] leading-[40px] text-[#160E4B]">
                    Personalized Gifts For <br /> Every Occasion.
                  </h3>
                  <p className="text-[#160E4B] font-normal md:text-[25px] sm:text-[18px] text-xs sm:leading-[44px] leading-[25px]">
                    Track birthdays, plan surprises, and get the coolest gifts <br />
                    delivered—effortlessly.
                  </p>
                  <Link href={'/subscriptions'}>
                    <button className="flex items-center gap-[10px] sm:w-[197px] w-[150px] bg-primary sm:text-[20px] text-sm font-semibold sm:leading-[30px] leading-[10px] text-white px-[13px] sm:py-[17px] py-[15px] rounded-[12px] transition-all">
                      Get Started
                      <ArrowRight size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
