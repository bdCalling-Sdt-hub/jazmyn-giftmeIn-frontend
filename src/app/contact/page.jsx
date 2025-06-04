'use client';
import BreadcrumbsBanner from '@/components/common/BreadcrumbsBanner';
import React, { useState } from 'react';
import Image from 'next/image';
import { useCreateContactMutation } from '@/redux/apiSlices/contactSlice';
import toast from 'react-hot-toast';

const page = () => {
  const [createContact] = useCreateContactMutation();

  // State management for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact({ name, email, phone, country, message }).unwrap();
      // Optionally, reset form fields or show success message
      setName('');
      setEmail('');
      setPhone('');
      setCountry('');
      setMessage('');
      toast.success('Contact created successfully!');
    } catch (error) {
      console.error('Failed to create contact:', error);
      toast.error('Failed to create contact. Please try again.');
    }
  };

  return (
    <section>
      <BreadcrumbsBanner pageName="Contact us" routeName="Contact us" />
      <section className="py-[50px] sm:px-0 px-[20px]">
        <div className="flex flex-col w-full max-w-[1200px] mx-auto md:flex-row justify-center items-start md:p-12 gap-8">
          {/* Left Section - Contact Info */}
          <div className="bg-pink-100 rounded-2xl shadow p-6 w-full md:w-1/3">
            <h2 className="sm:text-[36px] text-[25px] font-semibold leading-[54px] text-gray-900">
              Need <span className="text-pink-500">more help?</span>
            </h2>
            <div className="bg-[#DFE0E4] h-[1px] mt-3"></div>
            <div className="mt-8 space-y-6">
              {/* <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
                <div className="p-5 bg-white border border-gray-200 rounded-full">
                  <Image src={'/logo/phone.png'} width={22} height={22} alt="phone" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">Phone</h4>
                  <p className="text-sm text-[#65728E]">317-449-3031</p>
                </div>
              </div> */}
              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="p-5 bg-white border border-gray-200 rounded-full">
                    <Image src={'/logo/text.png'} width={22} height={22} alt="text" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">Email Address</h4>
                    <p className="text-sm text-[#65728E]">support@giftmein.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-pink-100 rounded-2xl shadow-md p-6 w-full md:w-2/3">
            <h2 className="sm:text-[36px] text-[25px] font-semibold leading-[54px] text-gray-900">
              Get in <span className="text-pink-500">touch with us.</span>
            </h2>
            <div className="bg-[#DFE0E4] h-[1px] mt-3"></div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name..."
                    className="mt-1 w-full p-[10px] border placeholder:text-sm rounded-[8px] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email..."
                    className="mt-1 w-full p-[10px] border placeholder:text-sm rounded-[8px] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Your Number..."
                    className="mt-1 w-full p-[10px] border placeholder:text-sm rounded-[8px] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="country">
                    Country
                  </label>
                  <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="mt-1 w-full p-[10px] placeholder:text-gray-700 border text-sm rounded-[8px] focus:outline-none"
                  >
                    <option className="text-gray-700">Select a Country...</option>
                    <option className="text-gray-700">United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  placeholder="Enter Your Message..."
                  className="mt-1 w-full p-[10px] border placeholder:text-sm rounded-[8px] resize-none focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex sm:justify-start justify-center items-center gap-1 sm:w-auto px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Send Message
                <Image src={'/logo/sendMessage.png'} width={16} height={16} alt="Contact and Send message button" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
