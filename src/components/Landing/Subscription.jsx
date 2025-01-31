"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MonthlyData } from "../../util/planData";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });
const Subscription = ({route}) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className=" flex justify-center items-center">
      <div className=" container rounded-lg bg-white p-10">
         {/* Header Section  */}
        <div className="flex flex-col text-center items-center gap-2  ">
          {route !== "/subscriptions" && <h1 className="text-primary font-bold text-[17px]  uppercase tracking-[5px]">
            Subscription
          </h1>}
          <h3 className={`font-bold text-[36px]  tracking-wide ${inter.className}`}>
            Choose your <span className="text-primary">plan</span>
          </h3>
          <p className="font-normal text-gray-600 tracking-wider pt-1">
            Flexible plans for every gifting need—find the perfect fit for you.
          </p>
        </div>

        {/* Subscription Toggle (Monthly/Yearly) */}
        <div className="flex items-center justify-center mt-10">
          <div className="relative flex items-center border border-gray-100 rounded shadow-md w-[350px] h-[60px]">
            {/* Highlight (motion.div) */}
            <motion.div
              className="absolute w-1/2 h-full bg-pink-500 rounded z-0"
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              initial={{ x: isMonthly ? 0 : "50%" }}
              animate={{ x: isMonthly ? 0 : "100%" }}
            />

            {/* Monthly Button */}
            <button
              className={`relative z-10 w-1/2 text-center text-sm font-medium transition ${
                isMonthly ? "text-white" : "text-gray-700"
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>

            {/* Yearly Button */}
            <button
              className={`relative z-10 w-1/2 text-center text-sm font-medium transition ${
                !isMonthly ? "text-white" : "text-gray-700"
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Yearly <span className="text-gray-600">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Subscription Plan Details */}
        <section className="flex items-start gap-[24px] mt-10">
        { MonthlyData
      .filter((data) => !(route === "/subscriptions" && data.price === 0))
      .map((data) => (
        <motion.div
          key={data.id}
          className={`${route !== "/subscriptions"? "w-[284px]":"w-[365px]"} rounded-[7px] flex flex-col gap-3 border shadow-md  ${data.recoment ? "border-primary":"border-gray-100 hover:border-primary p-[18px]"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.recoment && <div className="bg-[#F82BA9] rounded-t-[7px] p-2 text-center text-white">Recommended</div>}
          
          <h3 className={`font-medium text-lg leading-[20px] text-[#160E4B] ${data.recoment && "px-[18px]"}`}>
            {data.type}
          </h3>
          <h3 className={`font-semibold text-[37px] leading-[42px] ${data.recoment && "px-[18px]"}`}>
            ${data.price}{" "}
            <span className="text-[#868C98] text-[12px] leading-[18px]">
              / {data.duration === "month" ? "month" : "7 Days"}
            </span>
          </h3>
          <p className={`text-[#65728E] font-medium text-[12px] leading-[19px] ${data.recoment && "px-[18px]"}`}>
            {data.desc}
          </p>
          <div className={`flex justify-center ${data.recoment && "px-[18px]"}`}>
            <Image src={"/logo/demo.svg"} width={245} height={15} alt="frame" />
          </div>
          <div className={`flex flex-col gap-[12px] ${data.recoment && "px-[18px] pb-[18px]"}`}>
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image src={"/logo/checkmark.png"} width={20} height={20} alt="check mark" />
                <p className="text-xs text-[#65728E] font-normal">{feature}</p>
              </div>
            ))}
            <button className="bg-[#FEEDF7] rounded-[8px] border border-[#F82BA9B2] text-primary px-[12px] py-[9px]">
              Choose Plan
            </button>
          </div>
        </motion.div>
      ))
 }

        </section>
      </div>
    </section>
  );
};

export default Subscription;
