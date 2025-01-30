"use client";
import React from 'react';
import Banner from "@/components/Landing/Banner";
import Process from "@/components/Landing/process";
import Offers from "@/components/Landing/Offers";
import PerfectChoise from "@/components/Landing/PerfectChoise";
import Subscription from "@/components/Landing/Subscription";
import Testimonials from "@/components/Landing/Testimonials";

const page = () => {
  return (
    <div>
        <Banner /> 
        <Process />
        <Offers />
        <Subscription />
        <PerfectChoise />
        <Testimonials />
    </div>
  );
};

export default page;