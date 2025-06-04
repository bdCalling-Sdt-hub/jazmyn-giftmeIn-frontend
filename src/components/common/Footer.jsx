// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="bg-gray-800 text-white py-8"
      style={{
        backgroundImage: 'url(/images/image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        backgroundColor: 'black',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
        <div className="w-full sm:w-[282px] mx-auto sm:mx-0">
          <Image src="/logo/logo.png" width={131} height={53} alt="GiftmeIn logo" />
          <p className="text-sm leading-6 mt-3">
            GiftmeIn helps you celebrate every special moment with personalized gifts and seamless delivery.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <div className="flex justify-center sm:justify-start items-center gap-1 mb-4">
            <div className="w-3 h-1 bg-primary rounded"></div>
            <div className="w-8 h-1 bg-[#FFFFFF33] rounded"></div>
          </div>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-sm hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/plans" className="text-sm hover:underline">
                Subscription Plans
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Browse Category</h3>
          <div className="flex justify-center sm:justify-start items-center gap-1 mb-4">
            <div className="w-3 h-1 bg-primary rounded"></div>
            <div className="w-8 h-1 bg-[#FFFFFF33] rounded"></div>
          </div>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="text-sm hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <div className="flex justify-center sm:justify-start items-center gap-1 mb-4">
            <div className="w-3 h-1 bg-primary rounded"></div>
            <div className="w-8 h-1 bg-[#FFFFFF33] rounded"></div>
          </div>
          <ul className="space-y-4">
            {/* <li>
              <Link href="/contact" className="flex justify-center sm:justify-start items-center gap-3 text-sm">
                <div className="bg-primary p-2 rounded-full">
                  <Image src="/logo/call.png" height={16} width={16} alt="Call icon" />
                </div>
                <span>Text Support: 317-449-3031</span>
              </Link>
            </li> */}
            <li>
              <Link
                href="mailto:support@giftmein.com"
                className="flex justify-center sm:justify-start items-center gap-3 text-sm"
              >
                <div className="bg-primary p-2 rounded-full">
                  <Image src="/logo/message.png" height={16} width={16} alt="Email icon" />
                </div>
                <span>support@giftmein.com</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-500 my-6"></div>

      <div className="container mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center gap-4 text-center sm:text-left">
        <h3 className="text-[16px]">
          © Copyright 2025 <span className="text-primary text-[18px]">Giftmein</span> All Rights Reserved.
        </h3>
        <div className="flex justify-center items-center gap-2">
          <p className="text-[16px] font-normal">Follow Us:</p>
          <div className="flex gap-2">
            <Image className="cursor-pointer" src="/logo/facebook.png" height={38} width={38} alt="Facebook icon" />
            <Image className="cursor-pointer" src="/logo/linedin.png" height={38} width={38} alt="LinkedIn icon" />
            <Image className="cursor-pointer" src="/logo/youtube.png" height={38} width={38} alt="YouTube icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
