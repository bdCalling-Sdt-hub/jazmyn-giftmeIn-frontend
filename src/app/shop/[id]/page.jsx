'use client';

import { FaCheckCircle, FaStar } from 'react-icons/fa';
import ProductCard from '../../../components/common/ProductCard';
import { useEffect, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { ConfigProvider, Tabs } from 'antd';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  useGetShopifyProductsQuery,
  useGetSingleProductQuery,
  useGetSingleShopifyProductQuery,
} from '@/redux/apiSlices/productSlice';
import { getImageUrl } from '@/util/getImgUrl';
import { useAddToCartMutation, useGetCartQuery } from '@/redux/apiSlices/cartSlice';
import { useGetUserProfileQuery } from '@/redux/apiSlices/authSlice';

const Product = () => {
  const [mainImage, setMainImage] = useState('');
  const [selectedColors, setSelectedColors] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const { id } = useParams();

  const { data: productData, isLoading } = useGetSingleProductQuery(id);
  // const { data: singleShopifyProduct, isLoading: shopifyProductLoading } = useGetSingleProductQuery(id);
  const [addToCart] = useAddToCartMutation();
  const { data: userProfile, isLoading: userProfileLoading } = useGetUserProfileQuery();
  const { data: cartItems, isLoading: cartLoading } = useGetCartQuery();

  useEffect(() => {
    if (productData) {
      setMainImage(productData?.data?.feature);
    }
  }, [productData]);

  if (isLoading || userProfileLoading || cartLoading) {
    return <h2>Loading...</h2>;
  }

  const product = productData?.data;

  const userId = userProfile?.data?._id;
  const cartData = cartItems?.data;
  console.log(product);

  // Function to calculate total price
  const totalPrice = product?.discountedPrice * quantity;

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: <p className="md:text-xl">Description</p>,
      children: product?.description,
    },
    {
      key: '2',
      label: <p className="md:text-xl">Additional Information</p>,
      children: product?.additionalInfo,
    },
  ];

  const handleAddToCart = async (product) => {
    const data = {
      user: userId,
      variations: {
        size: selectedSize,
        color: selectedColors,
        quantity: quantity,
        product: product?._id,
      },
    };

    const handleAddToCart = async (product) => {
      const data = {
        user: userId,
        variations: {
          size: selectedSize,
          color: selectedColors,
          quantity: quantity,
          product: product?._id,
        },
      };
    };

    // console.log('cart data', data);
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (!selectedColors) {
      toast.error('Please select a color');
      return;
    }

    try {
      const res = await addToCart(data).unwrap();
      if (res.success) {
        toast.success('Added to cart');
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
      <div className="md:p-28 p-8 max-w-7xl mx-auto font-fontTwo">
        <div className="md:flex items-center justify-center gap-5">
          <div className="md:w-[45%] flex flex-col items-center">
            <div className="w-full mb-5">
              <img
                className="md:w-[600px] rounded-2xl object-contain w-[350px] h-[300px] md:h-[440px]"
                src={getImageUrl(mainImage)}
                alt="Main Image"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              <img
                src={getImageUrl(product?.additional?.[0])}
                alt="Thumbnail 1"
                className="cursor-pointer object-contain md:h-28 md:w-28 h-20 w-20 transition-transform transform hover:scale-110"
                onClick={() => setMainImage(product?.additional?.[0])}
              />
              {product?.additional?.[1] && (
                <img
                  src={getImageUrl(product?.additional[1])}
                  alt="Thumbnail 2"
                  className="cursor-pointer object-contain md:h-28 md:w-28 h-20 w-20 transition-transform transform hover:scale-110"
                  onClick={() => setMainImage(product?.additional[1])}
                />
              )}
              {product?.additional?.[2] && (
                <img
                  src={getImageUrl(product?.additional[2])}
                  alt="Thumbnail 3"
                  className="cursor-pointer object-contain md:h-28 md:w-28 h-20 w-20 transition-transform transform hover:scale-110"
                  onClick={() => setMainImage(product?.additional[2])}
                />
              )}
              {product?.additional?.[3] && (
                <img
                  src={getImageUrl(product?.additional[3])}
                  alt="Thumbnail 4"
                  className="cursor-pointer object-contain md:h-28 md:w-28 h-20 w-20 transition-transform transform hover:scale-110"
                  onClick={() => setMainImage(product?.additional[3])}
                />
              )}
            </div>
          </div>
          <div className="md:space-y-4 md:w-[55%] mt-7 md:mt-0">
            <h1 className="md:text-3xl text-2xl clash">{product?.productName}</h1>

            <div className=" relative flex gap-3 text-primary">
              {product?.discountedPrice ? (
                <div>
                  <p className="line-through text-gray-500">${product?.regularPrice}</p>
                  <p className="absolute font-bold top-3 left-0 text-3xl ">${product?.discountedPrice}</p>
                </div>
              ) : (
                <p className="absolute font-bold top-4 left-0 text-2xl ">{product?.regularPrice}</p>
              )}
            </div>

            <div className="flex items-center gap-10 pt-5 md:mt-0">
              <h1 className="font-bold text-2xl">Size:</h1>
              <div>
                <div className="flex flex-wrap gap-2">
                  {product?.size?.map((size) => (
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
              <div className="flex gap-2">
                {product?.color?.map((color) => (
                  <label key={color} className="cursor-pointer relative">
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      className="hidden"
                      onChange={() => setSelectedColors(color)}
                    />
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                        selectedColors === color ? 'border-black' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    >
                      {selectedColors === color && (
                        <FaCheckCircle size={30} className={`absolute text-white bg-primary rounded-full p-1`} />
                      )}
                    </div>
                  </label>
                ))}
              </div>
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
                onClick={() => handleAddToCart(product)}
                className=" text-[#FC2FAD] border border-[#FC2FAD] px-5 py-3 rounded-lg"
              >
                Add to Cart
              </button>
              {cartData?.totalItems > 0 && (
                <Link href="/checkout">
                  <button className="bg-primary text-white px-5 py-3 rounded-lg">Buy Now</button>
                </Link>
              )}
            </div>
            <h1 className="flex gap-2 items-center">
              <span className="font-bold">Available:</span>
              {product?.availability === 'inStock' ? (
                <span className="text-green-600 flex gap-1">
                  In Stock <FiCheckSquare />
                </span>
              ) : (
                <span className="text-red-500">Out Of Stock</span>
              )}
            </h1>
            <h1>
              <span className="font-bold">Tags: </span> {product?.tag?.map((tag) => tag).join(', ')}
            </h1>
            <h1>
              <span className="font-bold">Category:</span> {product?.category}
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#FC2FAD',
              },
            }}
          >
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </ConfigProvider>
        </div>
      </div>

      {/* <div dangerouslySetInnerHTML={{ __html: product?.body_html }} /> */}

      <div className="mb-10 px-8 max-w-7xl mx-auto font-fontTwo">
        <h1 className="clash md:text-4xl text-2xl border-b-4 border-[#FC2FAD] md:w-[28%] w-[70%]">
          <span className="text-[#FC2FAD]">Related</span> Products
        </h1>
        {product?.relatedProducts?.length === 0 ? (
          <p className="text-center mt-10">No related products found.</p>
        ) : (
          <div className="grid grid-cols-1 mt-10 md:grid-cols-4">
            {product?.relatedProducts?.slice(0, 4)?.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
