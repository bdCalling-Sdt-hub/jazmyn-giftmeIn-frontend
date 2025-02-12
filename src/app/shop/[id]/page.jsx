'use client';

import { FaStar } from 'react-icons/fa';
import ProductCard from '../../../components/common/ProductCard';
import productImg1 from '../../../assets/image1.jpg';
import productImg2 from '../../../assets/image2.jpg';
import productImg3 from '../../../assets/giftImage3.jpg';
import productImg4 from '../../../assets/giftImage4.jpg';
import { useEffect, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { ConfigProvider, Tabs } from 'antd';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useGetSingleProductQuery } from '@/redux/apiSlices/productSlice';
import { getImageUrl } from '@/util/getImgUrl';

const totalPrice = 55;

const relatedProductData = [
  {
    id: 1,
    image: productImg1,
    label: 'WHOLESALE',
    title: 'Bubba Kush',
    description: 'THCA Flower Pounds Indica | 22.70% THCa | HP, LB',
    price: '$750 - $1000',
  },
  {
    id: 2,
    image: productImg1,
    label: 'PREMIUM',
    title: 'Pineapple Express',
    description: 'Sativa | 18.90% THCa | HP, LB',
    price: '$650 - $900',
  },
  {
    id: 3,
    image: productImg1,
    label: 'WHOLESALE',
    title: 'OG Kush',
    description: 'Hybrid | 20.50% THCa | HP, LB',
    price: '$800 - $1100',
  },
  {
    id: 4,
    image: productImg1,
    label: 'ORGANIC',
    title: 'Gelato',
    description: 'Hybrid | 21.20% THCa | HP, LB',
    price: '$700 - $950',
  },
  {
    id: 5,
    image: productImg1,
    label: 'ORGANIC',
    title: 'Gelato',
    description: 'Hybrid | 21.20% THCa | HP, LB',
    price: '$700 - $950',
  },
  {
    id: 6,
    image: productImg1,
    label: 'ORGANIC',
    title: 'Gelato',
    description: 'Hybrid | 21.20% THCa | HP, LB',
    price: '$700 - $950',
  },
];

const Product = () => {
  const [mainImage, setMainImage] = useState('');

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const { id } = useParams();

  const { data: productData, isLoading } = useGetSingleProductQuery(id);

  useEffect(() => {
    if (productData) {
      setMainImage(productData?.featureImage);
    }
  }, [productData]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const product = productData?.data;
  console.log(product);

  // Function to calculate total price

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: <p className="md:text-xl">Description</p>,
      children: productData.shortDescription,
    },
    {
      key: '2',
      label: <p className="md:text-xl">Additional Information</p>,
      children: 'No additional information available.',
    },
    // {
    //   key: '3',
    //   label: <p className="md:text-xl">Reviews</p>,
    //   children: (
    //     <div>
    //       {productData.reviews.map((review, index) => (
    //         <div key={index} className="mb-4">
    //           <h3 className="font-bold">{review.name}</h3>
    //           <div className="flex gap-1">
    //             {Array.from({ length: review.rating }, (_, i) => (
    //               <FaStar key={i} className="text-orange-600" />
    //             ))}
    //           </div>
    //           <p>{review.comment}</p>
    //         </div>
    //       ))}
    //     </div>
    //   ),
    // },
  ];

  return (
    <>
      <div className="md:p-28 p-8 max-w-7xl mx-auto font-fontTwo">
        <div className="md:flex items-center justify-center gap-5">
          <div className="md:w-[45%] flex flex-col items-center">
            {/* Main Image */}
            <div className="w-full mb-5">
              <img
                className="md:w-[600px] w-[350px] h-[300px] md:h-[440px]"
                src={getImageUrl(mainImage)}
                alt="Main Image"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              <img
                src={getImageUrl(product?.additionalImages[0])}
                alt="Thumbnail 1"
                className="cursor-pointer md:h-28 md:w-28 h-20 w-20 transition-transform transform hover:scale-110"
                onClick={() => setMainImage(product?.additionalImages[0])}
              />
              <img
                src={getImageUrl(product?.additionalImages[1])}
                alt="Thumbnail 2"
                className="cursor-pointer md:h-28 md:w-28 h-20 w-20 transition-transform transform hover:scale-110"
                onClick={() => setMainImage(product?.additionalImages[1])}
              />
              <img
                src={getImageUrl(product?.additionalImages[2])}
                alt="Thumbnail 3"
                className="cursor-pointer md:h-28 md:w-28 h-20 w-20 transition-transform transform hover:scale-110"
                onClick={() => setMainImage(product?.additionalImages[2])}
              />
              <img
                src={getImageUrl(product?.additionalImages[3])}
                alt="Thumbnail 4"
                className="cursor-pointer md:h-28 md:w-28 h-20 w-20 transition-transform transform hover:scale-110"
                onClick={() => setMainImage(product?.additionalImages[3])}
              />
            </div>
          </div>
          <div className="md:space-y-4 md:w-[55%] mt-7 md:mt-0">
            <h1 className="md:text-3xl text-2xl clash">{product?.productName}</h1>
            {/* <div className="flex gap-2">
              <div className="flex gap-1">
                <FaStar className="text-[#FC2FAD]" />
                <FaStar className="text-[#FC2FAD]" />
                <FaStar className="text-[#FC2FAD]" />
                <FaStar className="text-[#FC2FAD]" />
                <FaStar className="text-[#FC2FAD]" />
              </div>
              <p>{product?.reviews.length} Reviews</p>
            </div> */}
            <div className="flex gap-3 text-3xl font-bold text-[#FC2FAD]">
              <p>${product?.discountedPrice}</p>
            </div>
            <p className="leading-5">{product?.description}</p>
            <div className="flex items-center gap-10 mt-10 md:mt-0">
              <h1 className="font-bold text-2xl">Size:</h1>
              <div>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border px-4 py-2 rounded-lg ${
                        selectedSize === size ? 'bg-primary text-white' : 'bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5 md:mt-0 items-center">
              <h1 className="font-bold text-2xl">Color:</h1>
              <div className="w-10 border rounded-full h-10 bg-[#FC2FAD]"></div>
              <div className="w-10 border rounded-full h-10 bg-[#5223fd]"></div>
              <div className="w-10 border rounded-full h-10 bg-[#12912d]"></div>
              <div className="w-10 border rounded-full h-10 bg-[#ff2525]"></div>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="flex border font-semibold p-2 rounded-2xl border-gray-300 items-center gap-3">
                <button
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                  className="border bg-gray-200 rounded-2xl px-3 py-1"
                >
                  -
                </button>
                <span className="text-xl">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="border bg-gray-200 rounded-2xl px-3 py-1"
                >
                  +
                </button>
              </div>
              <p className="text-3xl font-bold text-primary">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex md:text-xl font-bold gap-4 mb-5 md:mb-0">
              <button
                onClick={() => toast.success('Product added to cart successfully!')}
                className=" text-[#FC2FAD] border border-[#FC2FAD] px-5 py-3 rounded-lg"
              >
                Add to Cart
              </button>
              <Link href="/checkout">
                <button className="bg-primary text-white px-5 py-3 rounded-lg">Buy Now</button>
              </Link>
            </div>
            <h1 className="flex gap-2 items-center">
              <span className="font-bold">Available:</span>
              {productData?.availability === 'available' ? (
                <span className="text-green-600 flex gap-1">
                  In Stock <FiCheckSquare />
                </span>
              ) : (
                <span className="text-red-500">Out Of Stock</span>
              )}
            </h1>
            <h1>
              <span className="font-bold">Tags: </span> {productData?.tags}
            </h1>
            <h1>
              <span className="font-bold">Category:</span> {productData?.category}
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#FC2FAD', // Set your active tab underline color
              },
            }}
          >
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </ConfigProvider>
        </div>
      </div>
      <div className="mb-10 px-8 max-w-7xl mx-auto font-fontTwo">
        <h1 className="clash md:text-4xl text-2xl border-b-4 border-[#FC2FAD] md:w-[28%] w-[70%]">
          <span className="text-[#FC2FAD]">Related</span> Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {relatedProductData?.slice(0, 4)?.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
