'use client';
import React from 'react';
import Banner from '@/components/Landing/Banner';
import Process from '@/components/Landing/process';
import Offers from '@/components/Landing/Offers';
import PerfectChoise from '@/components/Landing/PerfectChoise';
import Subscription from '@/components/Landing/Subscription';
import Testimonials from '@/components/Landing/Testimonials';
import FaqSection from '@/components/Landing/FaqSection';

const page = () => {
  return (
    <div>
      <Banner />
      <Process />
      <Offers />
      <Subscription />
      <PerfectChoise />
      <FaqSection />
      <Testimonials />
    </div>
  );
};

export default page;
