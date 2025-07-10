'use client';

import { useGetUserProfileQuery } from '@/redux/apiSlices/authSlice';
import { useCreateWishListMutation, useGetWishlistQuery } from '@/redux/apiSlices/cartSlice';
import { getImageUrl } from '@/util/getImgUrl';
import { Input } from 'antd';
import { Heart, SearchIcon, ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';

interface WishlistItem {
  id: string;
  title: string;
  price: number;
  image: string;
}

const WishlistPage = () => {
  const { data: wishListList, isLoading } = useGetWishlistQuery(undefined);
  const [createWishList] = useCreateWishListMutation();
  const { data: userProfile, isLoading: isLoadingUser } = useGetUserProfileQuery(undefined);

  if (isLoading || isLoadingUser) return <div>Loading...</div>;

  const wishlist = wishListList?.data || [];
  const userId = userProfile?.data?._id;
  console.log(wishlist);

  const handleAddToWishlist = async (id: string) => {
    try {
      const res = await createWishList({ product: id, user: userId }).unwrap();
      if (res.success) {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.error('Failed to add to wishlist: ', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Wishlist</h2>
        <div className="relative w-[300px]">
          <Input
            placeholder="Search...."
            className="pl-10 h-10 rounded-lg"
            suffix={<SearchIcon className="w-5 h-5 text-gray-400" />}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist?.map((item: any, index: number) => (
          <div key={index} className="bg-[#FFF1F8] rounded-lg overflow-hidden group">
            <div className="relative">
              {/* Image Container */}
              <div className="relative aspect-square">
                <img
                  src={getImageUrl(item?.product?.feature)}
                  alt={item?.product?.productName}
                  className="w-full h-full p-2 rounded-md object-cover"
                />
                <button
                  onClick={() => handleAddToWishlist(item?.product?._id)}
                  className="absolute top-3 right-3 text-primary hover:scale-110 transition"
                >
                  <Heart className="w-6 h-6 fill-primary" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-lg text-center">{item?.product?.productName}</h3>
              <p className="text-primary text-xl font-bold text-center">${item?.product?.discountedPrice}</p>
              <button className="w-full bg-primary text-white py-2 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
