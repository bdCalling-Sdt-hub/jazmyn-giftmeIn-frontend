'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MonthlyData, YearlyData } from '../../util/planData';
import { Inter } from 'next/font/google';
import { Modal } from 'antd';
import { useGetSubscriptionsPackageQuery } from '@/redux/apiSlices/cartSlice';

import { useGetUserProfileQuery } from '@/redux/apiSlices/authSlice';
import Link from 'next/link';
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const Subscription = ({ route }) => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: userProfile, isLoading } = useGetUserProfileQuery();
  const { data: subscriptionPackages, isLoading: isLoadingPackages } = useGetSubscriptionsPackageQuery();

  if (isLoading || isLoadingPackages) {
    return <div>Loading...</div>;
  }

  const packages = subscriptionPackages?.data;
  const email = userProfile?.data?.email;
  console.log(packages);

  const monthlyPlans = packages?.filter((pkg) => pkg?.duration === 'month' || pkg?.paymentType === 'Free');
  const yearlyPlans = packages?.filter((pkg) => pkg?.duration === 'year' || pkg?.paymentType === 'Free');

  console.log('monthlyPlans', monthlyPlans, 'yearlyPlans', yearlyPlans);

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubscribe = async (paymentLink) => {
    window.location.href = paymentLink;
  };

  return (
    <section className="flex justify-center items-center min-h-screen py-10">
      <div className="container max-w-screen-xl px-4 rounded-lg bg-white">
        {/* Header Section */}
        <div className="flex flex-col text-center items-center gap-2">
          {route !== '/subscriptions' && (
            <h1 className="text-primary font-bold text-[17px] uppercase tracking-[5px]">Subscription</h1>
          )}
          <h3 className={`font-bold md:text-[36px] text-[30px] tracking-wide ${inter.className}`}>
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
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              initial={{ x: isMonthly ? 0 : '50%' }}
              animate={{ x: isMonthly ? 0 : '100%' }}
            />

            {/* Monthly Button */}
            <button
              className={`relative z-10 w-1/2 text-center text-sm font-medium transition ${
                isMonthly ? 'text-white' : 'text-gray-700'
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>

            {/* Yearly Button */}
            <button
              className={`relative z-10 w-1/2 text-center text-sm font-medium transition ${
                !isMonthly ? 'text-white' : 'text-gray-700'
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Yearly <span className="text-gray-600">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Subscription Plan Details */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {(isMonthly ? monthlyPlans : yearlyPlans)
            // ?.filter((data) => !(route === '/subscriptions' && data.price === 0))
            ?.map((data) => (
              <motion.div
                key={data._id}
                className={`rounded-[7px] flex flex-col gap-3 border shadow-md ${
                  data.isRecommended === 'true' ? 'border-primary' : 'border-gray-100 hover:border-primary p-[18px]'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {data.isRecommended === 'true' && (
                  <div className="bg-[#F82BA9] rounded-t-[7px] p-2 text-center text-white">Recommended</div>
                )}

                <h3
                  className={`font-medium text-lg leading-[20px] text-[#160E4B] ${
                    data.isRecommended === 'true' && 'px-[18px]'
                  }`}
                >
                  {data.category}
                </h3>
                <h3 className={`font-semibold text-[37px] leading-[42px] ${data.isRecommended && 'px-[18px]'}`}>
                  ${data.price} <span className="text-[#868C98] text-[12px] leading-[18px]">/ {data.duration}</span>
                </h3>
                <p
                  className={`text-[#65728E] font-medium text-[12px] leading-[19px] ${
                    data.isRecommended && 'px-[18px]'
                  }`}
                >
                  {data.description}
                </p>
                <div className={`flex justify-center ${data.isRecommended && 'px-[18px]'}`}>
                  <Image src={'/logo/demo.svg'} width={245} height={15} alt="frame" />
                </div>
                <div className={`flex flex-col gap-[12px] ${data.isRecommended && 'px-[18px] pb-[18px]'}`}>
                  {data.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Image src={'/logo/checkmark.png'} width={20} height={20} alt="check mark" />
                      <p className="text-xs text-[#65728E] font-normal">{feature}</p>
                    </div>
                  ))}

                  <button
                    onClick={() => handleChoosePlan(data)}
                    className="bg-[#FEEDF7] rounded-[8px] border border-[#F82BA9B2] text-primary px-[12px] py-[9px]"
                  >
                    Choose Plan
                  </button>
                </div>
              </motion.div>
            ))}
        </section>
      </div>
      {/* Ant Design Modal Component */}
      <Modal
        title={selectedPlan ? selectedPlan.category : ''}
        open={isModalOpen}
        onOk={() => handleSubscribe(`${selectedPlan?.paymentLink}?prefilled_email=${email}`)}
        onCancel={handleCloseModal}
        okText="Subscribe Now"
        cancelText="Cancel"
      >
        {selectedPlan && (
          <div className="p-4">
            <p className="text-gray-700">{selectedPlan?.description}</p>
            <p className="font-semibold text-lg mt-2">
              Price: <span className="text-primary">${selectedPlan?.price}</span> / {selectedPlan?.duration}
            </p>
            <h4 className="font-semibold text-lg mt-4">Features:</h4>
            <ul className="list-disc pl-5 mt-2">
              {selectedPlan?.features?.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
            {selectedPlan.isRecommended === 'true' && <p className="text-red-500 font-bold mt-2">Recommended Plan!</p>}
            {/* <div className="mt-4">
              <Link href={`${selectedPlan?.paymentLink}?prefilled_email=${email}`}>
                {' '}
                <button className="bg-green-500 text-white rounded px-4 py-2">Subscribe Now</button>
              </Link>
            </div> */}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Subscription;
