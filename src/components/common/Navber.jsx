'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Subscriptions', path: '/subscriptions' },
  { name: 'About us', path: '/about' },
  { name: 'Contact us', path: '/contact' },
];

const NavLink = ({ name, path, isActive }) => (
  <Link href={path}>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`text-[#160E4B] hover:text-primary transition-colors duration-300 text-[16px] font-normal leading-[24px] ${isActive ? 'text-primary font-semibold underline underline-offset-8 decoration-2' : ''}`}
    >
      {name}
    </motion.p>
  </Link>
);

const Icon = ({ src, alt, width, height }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="cursor-pointer"
  >
    <Image src={src} alt={alt} width={width} height={height} />
  </motion.div>
);

const Navbar = () => {
  const pathname = usePathname('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); // Toggle the mobile menu
  };

  return (
    <header className="bg-white shadow-md px-6">
      <div className="container h-[100px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href={'/'}><Image src="/logo/logo.png" alt="GiftmeIn Logo" width={131} height={53} className='cursor-pointer' /></Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-9">
          {navLinks.map((link) => (
            <NavLink key={link.name} name={link.name} path={link.path} isActive={pathname === link.path} />
          ))}
        </nav>

        {/* Icons and Profile */}
        <div className="flex items-center space-x-4">
          <Icon src="/logo/favorite.png" alt="favorite product" width={26} height={26} />
          <Icon src="/logo/notification.png" alt="notification items icons" width={24} height={24} />
          <Icon src="/logo/cart.png" alt="add to cart icons" width={38} height={42} />
          <div className="flex items-center cursor-pointer space-x-2">
            <img
              src="/images/userProfile.jpg"
              alt="Profile"
              className="w-8 h-8 border-2 border-primary rounded-full object-cover"
            />
            <span className="text-dark font-medium">Sazzad</span>
          </div>
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileHover={{ rotate: 90 }}
            className="text-[#160E4B]"
            onClick={toggleMobileMenu} // Toggle the mobile menu
          >
            <span className="block w-6 h-0.5 bg-primary mb-1"></span>
            <span className="block w-6 h-0.5 bg-primary mb-1"></span>
            <span className="block w-6 h-0.5 bg-primary"></span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-md"
        >
          {navLinks.map((link) => (
            <NavLink key={link.name} name={link.name} path={link.path} isActive={pathname === link.path} />
          ))}
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
