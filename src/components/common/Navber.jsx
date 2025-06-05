'use client';
import { useGetUserProfileQuery } from '@/redux/apiSlices/authSlice';
import { useGetCartQuery } from '@/redux/apiSlices/cartSlice';
import { getImageUrl } from '@/util/getImgUrl';
import { Badge, Button, Spin } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Subscriptions', path: '/subscriptions' },
  { name: 'About us', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact us', path: '/contact' },
  // { name: 'Survey Questions', path: '/surveyQuestions' },
];

const NavLink = ({ name, path, isActive, closeMobileMenu }) => (
  <Link href={path} onClick={closeMobileMenu}>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`text-[#160E4B] hover:text-primary transition-colors duration-300 text-[16px] font-normal leading-[24px] ${
        isActive ? 'text-primary font-semibold underline underline-offset-8 decoration-2' : ''
      }`}
    >
      {name}
    </motion.p>
  </Link>
);

const Icon = ({ src, alt, width, height }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="cursor-pointer">
    <Image src={src} alt={alt} width={width} height={height} />
  </motion.div>
);

const Navbar = () => {
  const pathname = usePathname(); // Get current pathname
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [token, setToken] = useState('');

  const { data: profileData, isLoading } = useGetUserProfileQuery();
  const { data: cartItems, isLoading: cartLoading } = useGetCartQuery();

  // console.log(profileData);

  useEffect(() => {
    const token = Cookies.get('accessToken');
    // console.log('tokennn', token);
    setToken(token);
  }, []);

  if (isLoading || cartLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin></Spin>
      </div>
    );
  }

  const profile = profileData?.data;
  const cart = cartItems?.data?.data;
  // console.log(profile);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false); // Close mobile menu when a route is clicked
  };

  return (
    <header className="bg-white shadow-md px-4 sm:px-6">
      <div className="container h-[80px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href={'/'}>
            <Image src="/logo/logo.png" alt="GiftmeIn Logo" width={161} height={70} className="cursor-pointer" />
          </Link>
        </div>

        {/* Navigation Links */}
        {profile && (
          <nav className="hidden md:flex space-x-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                name={link.name}
                path={link.path}
                isActive={pathname === link.path}
                closeMobileMenu={closeMobileMenu}
              />
            ))}
          </nav>
        )}

        {/* Icons and Profile */}

        <div className="hidden md:flex ">
          {token ? (
            <div className="flex items-center cursor-pointer space-x-2">
              <Link href={'/dashboard/wishlist'}>
                <Icon src="/logo/favorite.png" alt="favorite product" width={26} height={26} />
              </Link>
              {/* <Icon src="/logo/notification.png" alt="notification items icons" width={24} height={24} /> */}
              <Link href={'/cart'}>
                <Badge count={cart?.length} offset={[-5, 8]}>
                  <Icon src="/logo/cart.png" alt="add to cart icons" width={38} height={42} />
                </Badge>
              </Link>
              <Link href={'/dashboard/profile'} className="flex items-center cursor-pointer space-x-2">
                <img
                  src={getImageUrl(profile?.image)}
                  alt="Profile"
                  className="w-[45px] h-[45px] border-2 border-primary rounded-full object-cover"
                />
                <span className="text-[#333333] font-semibold">{profile?.name}</span>
              </Link>
            </div>
          ) : (
            <Link href={'/auth/login'}>
              <Button className="!bg-primary !rounded-xl !text-white px-4 py-2">Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden flex items-center">
          <motion.button whileHover={{ rotate: 90 }} className="text-[#160E4B]" onClick={toggleMobileMenu}>
            <span className="block w-6 h-0.5 bg-primary mb-1"></span>
            <span className="block w-6 h-0.5 bg-primary mb-1"></span>
            <span className="block w-6 h-0.5 bg-primary"></span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation with Smooth Close Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} // Add exit animation
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-md"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                name={link.name}
                path={link.path}
                isActive={pathname === link.path}
                closeMobileMenu={closeMobileMenu}
              />
            ))}
            <div className="flex items-center space-x-4">
              <Link href={'/dashboard/wishlist'}>
                <Icon
                  onClick={closeMobileMenu}
                  src="/logo/favorite.png"
                  alt="favorite product"
                  width={26}
                  height={26}
                />
              </Link>
              {/* <Icon
                onClick={closeMobileMenu}
                src="/logo/notification.png"
                alt="notification items icons"
                width={24}
                height={24}
              /> */}
              <Link onClick={closeMobileMenu} href={'/cart'}>
                <Badge count={cart?.length}>
                  <Icon src="/logo/cart.png" alt="add to cart icons" width={38} height={42} />
                </Badge>
              </Link>
              <Link
                onClick={closeMobileMenu}
                href={'/dashboard/profile'}
                className="flex items-center cursor-pointer space-x-2"
              >
                <img
                  src={getImageUrl(profile?.image)}
                  alt="Profile"
                  className="w-[45px] h-[45px] border-2 border-primary rounded-full object-cover"
                />
                <span className="text-[#333333] font-semibold">{profile?.name}</span>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
