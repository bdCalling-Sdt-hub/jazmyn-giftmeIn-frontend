'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react'; // For icons
import Link from 'next/link';
import { useSignUpMutation } from '@/redux/apiSlices/authSlice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [signUp] = useSignUpMutation();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    console.log(data);

    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      status: 'active',
      role: 'USER',
    };

    try {
      const res = await signUp(userData).unwrap();
      if (res.success) {
        toast.success('Signed up successfully! Please Login!');
        router.push(`/auth/verifyOTP?email=${encodeURIComponent(data.email)}`);

        // router.push('/auth/login');
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-center items-center py-12 px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-lg bg-white shadow-lg rounded-lg px-6 sm:px-10 py-8"
      >
        <h2 className="text-center text-2xl lg:text-3xl font-semibold text-primary">Sign up</h2>
        <p className="text-center text-gray-600 text-sm lg:text-base mt-2">Create your GiftmeIn account</p>
        <div className="w-full h-px bg-gray-200 my-4"></div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Your Full Name"
                {...register('name', {
                  required: 'Full Name is required',
                })}
                className={`block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                  errors.name ? 'border-red-500' : ''
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1 relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: 'Invalid email format',
                  },
                })}
                className={`block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="mt-1">
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter Your Phone Number"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Invalid phone number, should be 10 digits',
                  },
                })}
                className={`block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm ${
                  errors.phone ? 'border-red-500' : ''
                }`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                id="password"
                name="password"
                placeholder="Your Password"
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                className={`block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm ${
                  errors.password ? 'border-red-500' : ''
                }`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm text-gray-900">
              <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-primary" />
              <span className="text-base text-accent select-none">Opt-in for Random Gift Deliveries</span>
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 0.99 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-2 px-4 text-white bg-primary rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
          >
            <Image src="/logo/login.png" height={24} width={24} alt="login" />
            Register
          </motion.button>
        </motion.form>

        <p className="text-center text-gray-600 text-[16px] mt-4">
          Already have an account?{' '}
          <Link href={'/auth/login'} className="text-primary font-medium hover:underline">
            Login.
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default page;
