'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react'; // For icons
import Link from 'next/link';
import { useLoginMutation } from '@/redux/apiSlices/authSlice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [login] = useLoginMutation();
  // const [googleLogin] = useGoogleLoginMutation();

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
    try {
      const response = await login(data).unwrap();
      if (response.success) {
        Cookies.set('accessToken', response?.data?.createToken);
        toast.success('Login successful');
        window.location.href = '/dashboard/surveys';
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  // const handleGoogleLogin = async () => {
  //   // try {
  //   //   const res = await googleLogin().unwrap();
  //   //   if (res.success) {
  //   //     localStorage.setItem('authToken', res?.data?.createToken);
  //   //     toast.success('Login successful');
  //   //     router.push('/');
  //   //   } else {
  //   //     toast.error(res?.data?.message || 'Something went wrong');
  //   //   }
  //   // } catch (error) {
  //   //   console.error('Login failed:', error);
  //   //   toast.error(error?.data?.message || 'Something went wrong');
  //   // }
  // };

  return (
    <div className="bg-gray-50 flex flex-col justify-center items-center py-12 px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-lg bg-white shadow-lg rounded-lg px-6 sm:px-10 py-8"
      >
        <h2 className="text-center text-2xl lg:text-3xl font-semibold text-primary">Sign in</h2>
        <p className="text-center text-gray-600 text-sm lg:text-base mt-2">Login with your GiftmeIn account</p>
        <div className="w-full h-px bg-gray-200 my-4"></div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
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
                className={`block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${errors.email ? 'border-red-500' : ''
                  }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
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
                className={`block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${errors.password ? 'border-red-500' : ''
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
              <span className="select-none">Remember me</span>
            </label>
            {/* <a href="#" className="text-sm text-primary hover:underline focus:outline-none">
              Forgot password?
            </a> */}
          </div>

          <motion.button
            whileHover={{ scale: 0.99 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-2 px-4 text-white bg-primary rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
          >
            <Image src="/logo/login.png" height={24} width={24} alt="login" />
            Login
          </motion.button>
        </motion.form>

        <p className="text-center text-gray-600 text-[16px] mt-4">
          Don't have an account?{' '}
          <Link href={'/auth/signup'} className="text-primary font-medium hover:underline">
            Register.
          </Link>
        </p>

        <div className="flex items-center gap-2 mt-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <p className="text-sm text-gray-500">or</p>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={() => (window.location.href = 'https://api.giftmein.com/api/v1/auth/google/callback')}
          // onClick={() => (window.location.href = 'http://10.10.7.46:5000/api/v1/auth/google/callback')}
          className="w-full mt-4 flex items-center justify-center gap-2 py-2 px-4 text-gray-800 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <Image src="/logo/google.png" height={18} width={18} alt="google login" />
          Continue with Google
        </motion.button>
      </motion.div>
    </div>
  );
};

export default page;
