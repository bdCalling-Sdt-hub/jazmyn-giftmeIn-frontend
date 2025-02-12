import Link from 'next/link';
import Image from 'next/image';
import bannerImage from '../../assets/banner.jpg';

const BreadcrumbsBanner = ({ pageName, routeName }) => (
  <section className="relative w-full h-[200px] select-none">
    <Image className="w-full h-full object-cover" src={bannerImage} width={1200} height={200} alt={pageName} priority />
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FC2FAD]/50 text-black backdrop-blur-lg">
      <h1 className="text-[32px] font-bold leading-[48px]">{pageName}</h1>
      <p className="text-base font-medium leading-[24px]">
        <Link href="/" className="hover:underline">
          Home
        </Link>{' '}
        &gt; {routeName}
      </p>
    </div>
  </section>
);

export default BreadcrumbsBanner;
