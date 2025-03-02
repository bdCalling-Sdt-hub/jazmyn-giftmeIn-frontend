'use client';
import React from 'react';
import { motion } from 'framer-motion';

const page = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const giftType = e.target.giftType.value;
    const color = e.target.color.value;
    const hobbies = e.target.hobbies.value;
    const personalMessage = e.target.personalMessage.value;
    const pets = e.target.pets.value;
    const otherDetails = e.target.otherDetails.value;

    console.log({ giftType, color, hobbies, personalMessage, pets, otherDetails });
  };

  return (
    <section className="text-center">
      <div className="bg-gray-50 flex flex-col justify-center items-center py-12 px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="pb-10"
        >
          <h3 className="text-accent text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[60px]">
            Tell Us More About Your <span className="text-primary">Gift Preferences</span>
          </h3>
          <p className="text-[#65728E] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[60px] sm:leading-[28px]">
            We’d like to know your preferences so we can recommend the perfect gift for your special occasion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-lg bg-white shadow-lg rounded-lg px-6 sm:px-10 py-8"
        >
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={onSubmit}
            className="space-y-6"
          >
            {/* Gift Type */}
            <div>
              <label htmlFor="giftType" className="block text-base text-start font-normal text-[#160E4B]">
                1. What’s your favorite type of gift?
              </label>
              <div className="mt-2 relative">
                <input
                  id="giftType"
                  name="giftType"
                  type="text"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            {/* Favorite Color */}
            <div>
              <label htmlFor="color" className="block text-base text-start font-normal text-[#160E4B]">
                2. What’s your favorite color?
              </label>
              <div className="mt-2 relative">
                <input
                  id="color"
                  name="color"
                  type="text"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <label htmlFor="hobbies" className="block text-base text-start font-normal text-[#160E4B]">
                3. What are your favorite hobbies or activities?
              </label>
              <div className="mt-2 relative">
                <input
                  id="hobbies"
                  name="hobbies"
                  type="text"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            {/* Personal Message */}
            <div>
              <label htmlFor="personalMessage" className="block text-base text-start font-normal text-[#160E4B]">
                4. Would you like the gift to include a personal message?
              </label>
              <div className="mt-2 relative">
                <input
                  id="personalMessage"
                  name="personalMessage"
                  type="text"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            {/* Pets */}
            <div>
              <label htmlFor="pets" className="block text-base text-start font-normal text-[#160E4B]">
                5. Do you like pets?
              </label>
              <div className="mt-2 relative">
                <input
                  id="pets"
                  name="pets"
                  type="text"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            {/* Other Details */}
            <div>
              <label htmlFor="otherDetails" className="block text-base text-start font-normal text-[#160E4B]">
                6. Any other details about your preferences?
              </label>
              <div className="mt-2 relative">
                <textarea
                  id="otherDetails"
                  name="otherDetails"
                  className="block w-full px-4 py-2 resize-none border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 0.99 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-2 px-4 text-white bg-primary rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default page;
