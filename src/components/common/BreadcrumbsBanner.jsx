import Link from 'next/link';
import React from 'react';

const BreadcrumbsBanner = ({pageName , routeName}) => {
    return (
        <section className="w-full h-[200px] select-none bg-[#FC2FAD69] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[32px] font-bold text-white leading-[48px]">{pageName}</h1>
          <p className="font-medium text-base leading-[24px] text-white"><Link href={'/'}>Home</Link> &gt; {routeName}</p>
        </div>
      </section>
      
    );
};

export default BreadcrumbsBanner;