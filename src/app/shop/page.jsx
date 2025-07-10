'use client';

import BreadcrumbsBanner from '@/components/common/BreadcrumbsBanner';
import { Checkbox, ConfigProvider, Input, Pagination, Select, Slider, Spin } from 'antd';
import ProductCard from '@/components/common/ProductCard';
import debounce from 'lodash/debounce';
import React, { useEffect, useState } from 'react';
import {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useGetShopifyProductsQuery,
} from '@/redux/apiSlices/productSlice';
import { useCreateWishListMutation, useGetCartQuery, useGetWishlistQuery } from '@/redux/apiSlices/cartSlice';
import { FaHeart } from 'react-icons/fa'; // Import heart icon
import { useGetUserProfileQuery } from '@/redux/apiSlices/authSlice';
import toast from 'react-hot-toast';

const page = () => {
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 3000000]);
  const [debouncedPriceRange, setDebouncedPriceRange] = useState(priceRange);
  const [availability, setAvailability] = useState('inStock');

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedPriceRange(priceRange);
    }, 500);

    handler();
    return () => handler.cancel();
  }, [priceRange]);

  const { data: products, isLoading } = useGetAllProductsQuery({
    categoryId: checkedCategories,
    minPrice: debouncedPriceRange[0],
    maxPrice: debouncedPriceRange[1],
    availability,
  });

  const { data: shopifyProduct, isLoading: isLoadingShopify } = useGetShopifyProductsQuery();
  const { data: wishList, isLoading: isLoadingWishList } = useGetWishlistQuery();
  const { data: categories, isLoading: isLoadingCategories } = useGetCategoriesQuery();
  const { data: userProfile, isLoading: isLoadingUser } = useGetUserProfileQuery();

  const [createWishList] = useCreateWishListMutation();

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedCategories([...checkedCategories, value]);
    } else {
      setCheckedCategories(checkedCategories.filter((id) => id !== value));
    }
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.value);
  };

  if (isLoading || isLoadingCategories || isLoadingWishList || isLoadingShopify || isLoadingUser) {
    return <p>Loading...</p>;
  }

  const productsData = products?.data;
  const shopifyProductsData = shopifyProduct?.data;
  const categoriesData = categories?.data?.data;
  const wishListData = wishList?.data;
  const userId = userProfile?.data?._id;
  // console.log(shopifyProductsData);

  const filteredProductsData = productsData?.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  // Extract wishlist product IDs

  const wishListByUserId = wishListData?.filter((item) => item?.user === userId);

  const wishlistedProductIds = wishListByUserId?.map((item) => item?.product?._id) || [];

  const handleAddToWishlist = async (productId) => {
    const data = {
      product: productId,
      user: userId,
    };

    console.log(data);

    try {
      const res = await createWishList(data).unwrap();
      if (res.success) {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.error('Failed to add to wishlist: ', error);
    }
  };

  return (
    <div className="bg-slate-50">
      <BreadcrumbsBanner pageName="Shop" routeName="Shop" />
      <div className="container">
        <div className="md:flex mt-10 justify-center gap-10">
          <div className="md:w-[30%]">
            {/* Search Bar */}
            <div className="bg-white shadow-md p-5 space-y-2 rounded-2xl">
              <h1 className="text-xl font-semibold uppercase text-[#160E4B]">Search</h1>
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full max-w-md px-4 py-2 mb-5"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            {/* Categories */}
            <div className="my-5 bg-white shadow-md p-5 space-y-2 rounded-2xl">
              <h1 className="text-xl font-semibold uppercase text-[#160E4B]">Categories</h1>
              <div>
                {categoriesData?.map((item) => (
                  <div key={item._id} className="my-2 flex items-center justify-between">
                    <div className="space-x-5">
                      <ConfigProvider theme={{ token: { colorPrimary: '#FC2FAD' } }}>
                        <Checkbox
                          className="w-5 h-5"
                          id={item._id}
                          name={item.categoryName}
                          value={item._id}
                          onChange={handleCheckboxChange}
                        />
                      </ConfigProvider>
                      <label className="text-xl" htmlFor={item._id}>
                        {item.categoryName}
                      </label>
                    </div>
                    <span className="ml-2 text-xl">({item.totalProducts})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="my-5 bg-white shadow-md p-5 space-y-2 rounded-2xl">
              <h1 className="text-xl font-semibold uppercase text-[#160E4B]">Filter By Price</h1>
              <ConfigProvider theme={{ token: { colorPrimary: '#FC2FAD' } }}>
                <Slider range max={1000} min={0} value={priceRange} onChange={handlePriceChange} />
              </ConfigProvider>
              <p className="font-bold">
                Price: ${priceRange[0]}.00 - ${priceRange[1]}.00
              </p>
            </div>

            {/* Availability Filter */}
            <div className="my-5 bg-white shadow-md p-5 space-y-2 rounded-2xl">
              <h1 className="text-xl font-semibold uppercase text-[#160E4B]">Availability</h1>
              <div className="space-y-2">
                <div className="space-x-5">
                  <ConfigProvider theme={{ token: { colorPrimary: '#FC2FAD' } }}>
                    <Checkbox
                      className="w-5 h-5"
                      id="inStock"
                      name="availability"
                      value="inStock"
                      checked={availability === 'inStock'}
                      onChange={handleAvailabilityChange}
                    />
                  </ConfigProvider>
                  <label className="text-xl" htmlFor="inStock">
                    In Stock
                  </label>
                </div>
                <div className="space-x-5">
                  <ConfigProvider theme={{ token: { colorPrimary: '#FC2FAD' } }}>
                    <Checkbox
                      className="w-5 h-5"
                      id="outOfStock"
                      name="availability"
                      value="outOfStock"
                      checked={availability === 'outOfStock'}
                      onChange={handleAvailabilityChange}
                    />
                  </ConfigProvider>
                  <label className="text-xl" htmlFor="outOfStock">
                    Out of Stock
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Product Cards */}
          <div className="md:w-[70%] mb-20">
            {isLoading ? (
              <div className="flex items-center justify-center mt-10">
                <Spin size="large" />
              </div>
            ) : filteredProductsData && filteredProductsData.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
                {filteredProductsData?.map((product) => (
                  <div key={product._id} className="relative h-full">
                    <div className="h-full flex flex-col">
                      <ProductCard product={product} />
                    </div>
                    {wishlistedProductIds.includes(product._id) ? (
                      <FaHeart
                        onClick={() => handleAddToWishlist(product._id)}
                        className="absolute top-4 -right-3 text-red-500 cursor-pointer"
                        size={24}
                      />
                    ) : (
                      <FaHeart
                        onClick={() => handleAddToWishlist(product._id)}
                        className="absolute cursor-pointer top-4 -right-3 text-black"
                        size={24}
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-xl font-semibold text-gray-500 mt-10">No products found.</p>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <Pagination pageSize={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
