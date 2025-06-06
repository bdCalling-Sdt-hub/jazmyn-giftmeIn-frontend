/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { getImageUrl } from '@/util/getImgUrl';
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  // console.log(product);

  return (
    <div className="relative border-2 rounded-2xl md:w-[290px] h-full group bg-white bg-opacity-30 hover:border-primary">
      <div className="flex flex-col h-full">
        <div className="relative">
          <Image
            src={getImageUrl(product?.feature)}
            alt={product?.title}
            className="h-[250px] w-full rounded-2xl object-cover p-4 overflow-hidden"
            width={250}
            height={250}
          />
        </div>

        <div className="flex flex-col justify-between flex-grow p-4">
          <div className="flex items-center flex-col justify-between mb-4">
            <h1 className="text-[16px] tracking-wide font-bold text-center line-clamp-2">{product?.productName}</h1>
            <p className="text-2xl tracking-wide font-normal mt-2">${product?.discountedPrice}</p>
          </div>
          <Link href={`/shop/${product._id}`} className="mt-auto">
            <button className="border-2 border-primary text-primary w-full h-[47px] rounded-xl font-semibold text-[20px] tracking-wide group-hover:bg-primary group-hover:text-white transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
