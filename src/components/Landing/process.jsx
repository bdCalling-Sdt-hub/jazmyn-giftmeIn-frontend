import Image from 'next/image';
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

const Process = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center">
          <h3 className="font-bold text-[17px] tracking-[5px] text-primary uppercase">Process</h3>
          <h2 className={`mt-2 text-[36px] font-bold leading-[44px] ${inter.className}`}>
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-base text-[#66789C] mt-2">Check out how it works!</p>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-8 lg:space-y-0 mt-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="flex items-center justify-center w-24 h-24 bg-[#FEEDF7] rounded-full shadow-lg">
              <Image src="/logo/events.png" alt="Add Events" width={48} height={48} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#160E4B]">Choose a Plan</h3>
            <p className="mt-2 text-base text-[#65728E]">Select the subscription plan that fits your gifting needs</p>
          </div>

          {/* Arrow 1 */}
          <Image src="/logo/following.png" alt="Arrow" width={120} height={40} className="hidden lg:block" />

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="flex items-center justify-center w-24 h-24 bg-[#FEEDF7] rounded-full shadow-lg">
              <Image src="/logo/plan.png" alt="Choose Plan" width={48} height={48} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#160E4B]">Add Events & Preferences</h3>
            <p className="mt-2 text-base text-[#65728E]">Input birthdays, anniversaries, and holidays</p>
          </div>

          {/* Arrow 2 */}
          <Image src="/logo/following2.png" alt="Arrow" width={120} height={40} className="hidden lg:block" />

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="flex items-center justify-center w-24 h-24 bg-[#FEEDF7] rounded-full shadow-lg">
              <Image src="/logo/celebration.png" alt="Relax & Celebrate" width={48} height={48} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#160E4B]">Relax & Celebrate</h3>
            <p className="mt-2 text-base text-[#65728E]">
              We’ll handle the rest—timely reminders, perfect gifts, and seamless deliveries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
