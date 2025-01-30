import Image from 'next/image';
import React from 'react';

const process = () => {
    return (
        <section className='container mx-auto py-[120px]'>
           <div className='w-[1169px] mx-auto'>
           <div className='flex flex-col justify-center items-center gap-2'>
            <h3 className='font-bold text-[17px] leading-[17px] text-primary'>process</h3>
            <div className='text-center flex flex-col items-center gap-3'>
            <h3 className='font-bold text-[36px] leading-[36px]'>How It <span className='text-primary'>Works</span></h3>
            <p className='font-medium text-[16px] text-[#66789C] leading-[24px]'>Check out how it works!</p>
            </div>
            </div>
        <section className='flex items-center '>
        <div className="max-w-sm relative mx-auto bg-white rounded-lg p-6 flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center border border-gray-300 rounded-full p-2 w-[100px]">
                <div className="bg-[#FEEDF7] flex items-center justify-center p-4 rounded-full">
                <Image
                    src="/logo/events.png"
                    height={48}
                    width={48}
                    alt="..."
                />
                </div>
            </div>
            <h3 className="text-[#160E4B] text-xl leading-[30px] font-semibold text-center">
                Add Events & Preferences
            </h3>
            <p className="text-base text-[#65728E] font-normal leading-[24px] text-center">
                Input birthdays, anniversaries, and holidays
            </p>
            </div>

            <Image className='absolute left-[610px] ' src={"/logo/following.png"} width={247} height={112} alt='following process' />


            <div className="max-w-sm mx-auto bg-white rounded-lg p-6 flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center border border-gray-300 rounded-full p-2 w-[100px]">
                <div className="bg-[#FEEDF7] flex items-center justify-center p-4 rounded-full">
                <Image
                    src="/logo/plan.png"
                    height={48}
                    width={48}
                    alt="..."
                />
                </div>
            </div>
            <h3 className="text-[#160E4B] text-xl leading-[30px] font-semibold text-center">
            Choose a Plan
            </h3>
            <p className="text-base text-[#65728E] font-normal leading-[24px] text-center">
            Select the subscription plan that fits your gifting needs
            </p>
            </div>
            <Image className='absolute right-[640px]' src={"/logo/following2.png"} width={247} height={112} alt='following process' />
            <div className="max-w-sm  mx-auto bg-white rounded-lg p-6 flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center border border-gray-300 rounded-full p-2 w-[100px]">
                <div className="bg-[#FEEDF7] flex items-center justify-center p-4 rounded-full">
                <Image
                    src="/logo/celebration.png"
                    height={48}
                    width={48}
                    alt="..."
                />
                </div>
            </div>
            <h3 className="text-[#160E4B] text-xl leading-[30px] font-semibold text-center">
            Relax & Celebrate
            </h3>
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