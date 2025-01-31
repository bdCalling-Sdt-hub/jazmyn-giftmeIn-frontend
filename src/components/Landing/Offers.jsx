"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] }); 

const AccordionItem = ({ title, description, icon: Icon }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4 shadow-slate-600">
      <div
        onClick={toggleAccordion}
        className={`flex items-center justify-between cursor-pointer  ${
          expanded ? 'bg-primary' : 'bg-white'
        } p-4`}
      >
        <div className="flex select-none items-center gap-3">
          <Image src={Icon} width={40} height={40} alt="Icons" />
          <h3
            className={`text-[24px] select-none font-semibold ${
              expanded ? 'text-white' : 'text-[#160E4B]'
            }`}
          >
            {title}
          </h3>
        </div>
        
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: expanded ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <p className="text-base p-4 select-none text-[#65728E] text-[16px]">{description}</p>
      </motion.div>
    </div>
  );
};

const Offers = () => {
  const accordionData = [
    {
      title: 'Surprise Gifts',
      description:
        'Delight your loved ones with handpicked, personalized surprises tailored to their preferences.',
      icon: '/logo/gift.png',
    },
    {
      title: 'Event Tracking',
      description:
        'Create unforgettable moments with custom-tailored experiences for your loved ones.',
      icon: '/logo/celander.png',
    },
    {
      title: 'Customized Wrapping',
      description: 'Plan and organize your gifting journey with ease.',
      icon: '/logo/package.png',
    },
    {
      title: 'Random Gift Delivery',
      description: 'Plan and organize your gifting journey with ease.',
      icon: '/logo/delivery.png',
    },
  ];

  return (
    <section className="flex justify-center items-center pb-[120px]">
      <div className="container ">
        <div className="flex flex-col text-center items-center gap-2">
          <h1 className="text-primary font-bold text-[17px] leading-[30px] tracking-[5px] uppercase">
            Features
          </h1>
          <h3 className={`font-bold text-[36px]  tracking-wide ${inter.className}`}>
            What<span className="text-primary"> We Offer</span>
          </h3>
          <p className="font-normal text-center text-base text-gray-600 pt-1 lg:w-[740px] ">
            Thoughtful surprises, personalized touches, and seamless event tracking—making every moment unforgettable.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center pt-[50px] gap-6">
          <div className="">
            {accordionData.map((item, index) => (
              <AccordionItem key={index} title={item.title} description={item.description} icon={item.icon} />
            ))}
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center select-none items-center">
            <Image src={'/images/offer.png'} width={710} height={537} alt="offer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
