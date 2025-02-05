import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] }); 
const reviews = [
  {
    id: 1,
    name: "James Mik",
    review: "I was blown away by how thoughtful and perfect the gift was for me! It felt like someone truly understood my style and preferences",
    image: "/images/customar1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Parker Jimenez",
    review: "I never buy myself gifts, but this service made me feel so special. The wrapping was beautiful, and the surprise gift made my day!",
    image: "/images/customar2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Taylor Nez",
    review: "Receiving a random gift for no reason other than self-love was the best feeling. It’s like treating myself to a moment of joy!",
    image: "/images/customar3.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Green",
    review: "The experience of unboxing such a well-wrapped and thoughtful gift made me so happy. It felt like I was my own secret admirer!",
    image: "/images/customar4.png",
    rating: 4,
  },
  {
    id: 5,
    name: "James Mik",
    review: "I was blown away by how thoughtful and perfect the gift was for me! It felt like someone truly understood my style and preferences",
    image: "/images/customar1.png",
    rating: 5,
  },
  {
    id: 6,
    name: "Parker Jimenez",
    review: "I never buy myself gifts, but this service made me feel so special. The wrapping was beautiful, and the surprise gift made my day!",
    image: "/images/customar2.png",
    rating: 5,
  },
  {
    id: 7,
    name: "Taylor Nez",
    review: "Receiving a random gift for no reason other than self-love was the best feeling. It’s like treating myself to a moment of joy!",
    image: "/images/customar3.png",
    rating: 5,
  },
  {
    id: 8,
    name: "Emily Green",
    review: "The experience of unboxing such a well-wrapped and thoughtful gift made me so happy. It felt like I was my own secret admirer!",
    image: "/images/customar4.png",
    rating: 4,
  },
 
  
];

const CustomerReviewCarousel = () => {
  return (
    <section className=" flex justify-center items-center bg-gray-50 py-[120px]">
      <div className="container rounded-lg">
        <div className="text-center mb-6">
          <h3 className="font-bold text-lg text-primary leading-[30px] uppercase tracking-[5px]">
            Testimonials
          </h3>
          <h3 className={`font-bold sm:text-[36px] text-[25px]  tracking-wide ${inter.className}`}>
            What Our Clients <span className="text-primary">Say</span> About Us
          </h3>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="  select-none relative flex flex-col gap-5 sm:px-[25px] px-0 py-[35px]  border-gray-300  text-center"
              >
                <div className="flex flex-col gap-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Image
                      src={review.image}
                      width={64}
                      height={64}
                      alt="Customer review"
                    />
                    <span className="text-start">
                      <h3 className="text-base font-semibold text-blue-900 leading-[24px]">
                        {review.name}
                      </h3>
                      <p className="font-medium text-[14px] text-primary">
                        Customer
                      </p>
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-[1px]"></div>
                  <p className="text-sm font-normal pt-2 text-gray-500 text-start leading-[20px]">
                   {review.review}
                  </p>
                  <div className="relative left-[185px] top-[30px] opacity-20">
                    <Image
                      className="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2"
                      src="/logo/quote.png"
                      width={92}
                      height={92}
                      alt="Quote icon"
                    />
                  </div>
                  <div className="flex pt-4 items-center gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <Image
                          key={index}
                          src="/logo/star.png"
                          width={16}
                          height={14}
                          alt="Star icon"
                        />
                      ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #F82BA9;
          opacity: 0.2;
        }
        .swiper-pagination-bullet-active {
          background-color: #F82BA9;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default CustomerReviewCarousel;
