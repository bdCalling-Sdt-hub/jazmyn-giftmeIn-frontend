import Image from 'next/image';
import React from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });
const process = () => {
  return (
    <section className=" py-[120px]">
      <div className="container ">
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="font-bold text-[17px]  tracking-[5px] text-primary uppercase">process</h3>
          <div className="text-center flex flex-col items-center gap-3">
            <h3 className={`font-bold text-[36px] leading-[36px] tracking-wide ${inter.className}`}>
              How It <span className="text-primary">Works</span>
            </h3>
            <p className="font-medium text-[16px] text-[#66789C] leading-[24px] pt-2">Check out how it works!</p>
          </div>
        </div>
        <section className="flex items-center pt-7 ">
          <div className="max-w-sm relative mx-auto bg-white rounded-lg p-6 flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center border border-gray-300 rounded-full p-2 w-[100px]">
              <div className="bg-[#FEEDF7] flex items-center justify-center p-4 rounded-full">
                <Image src="/logo/events.png" height={48} width={48} alt="..." />
              </div>
            </div>
            <h3 className="text-[#160E4B] text-xl leading-[30px] font-semibold text-center">Sign Up</h3>
            <p className="text-base text-[#65728E] font-normal leading-[24px] text-center">
              Choose events and preferences
            </p>
          </div>

          <Image
            className="absolute left-[600px] "
            src={'/logo/following.png'}
            width={247}
            height={112}
            alt="following process"
          />

          <div className="mx-auto bg-white rounded-lg p-6 flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center border border-gray-300 rounded-full p-2 w-[100px]">
              <div className="bg-[#FEEDF7] flex items-center justify-center p-4 rounded-full">
                <Image src="/logo/plan.png" height={48} width={48} alt="..." />
              </div>
            </div>
            <h3 className="text-[#160E4B] text-xl leading-[30px] font-semibold text-center">
              Choose events and preferences
            </h3>
            <p className="text-base text-[#65728E] font-normal leading-[24px] text-center w-2/3">
              Select the subscription plan that fits your gifting needs
            </p>
          </div>
          <Image
            className="absolute right-[600px]"
            src={'/logo/following2.png'}
            width={247}
            height={112}
            alt="following process"
          />
          <div className="max-w-sm  mx-auto bg-white rounded-lg p-6 flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center border border-gray-300 rounded-full p-2 w-[100px]">
              <div className="bg-[#FEEDF7] flex items-center justify-center p-4 rounded-full">
                <Image src="/logo/celebration.png" height={48} width={48} alt="..." />
              </div>
            </div>
            <h3 className="text-[#160E4B] text-xl leading-[30px] font-semibold text-center">Relax & enjoy</h3>
            <p className="text-base text-[#65728E] font-normal leading-[24px] text-center">
              We’ll handle the rest—timely reminders, perfect gifts, and seamless deliveries
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default process;
