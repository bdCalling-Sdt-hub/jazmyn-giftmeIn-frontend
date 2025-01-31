'use client';

import { Input } from 'antd';
import { Heart, SearchIcon, ShoppingCart } from 'lucide-react';

interface WishlistItem {
      id: string;
      title: string;
      price: number;
      image: string;
}

const wishlistData: WishlistItem[] = [
      {
            id: '1',
            title: 'Special Gift Box',
            price: 50.0,
            image: '/images/product.jpg',
      },
      {
            id: '2',
            title: 'Special Gift Box',
            price: 50.0,
            image: '/images/product.jpg',
      },
      {
            id: '3',
            title: 'Special Gift Box',
            price: 50.0,
            image: '/images/product.jpg',
      },
      {
            id: '4',
            title: 'Special Gift Box',
            price: 50.0,
            image: '/images/product.jpg',
      },
      {
            id: '5',
            title: 'Special Gift Box',
            price: 50.0,
            image: '/images/product.jpg',
      },
      {
            id: '6',
            title: 'Special Gift Box',
            price: 50.0,
            image: '/images/product.jpg',
      },
];

const WishlistPage = () => {
      return (
            <div className="space-y-6">
                  <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold">Wishlist</h2>
                        <div className="relative w-[300px]">
                              <Input
                                    placeholder="Search..."
                                    className="pl-10 h-10 rounded-lg"
                                    suffix={<SearchIcon className="w-5 h-5 text-gray-400" />}
                              />
                        </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishlistData.map((item) => (
                              <div key={item.id} className="bg-[#FFF1F8] rounded-lg overflow-hidden group">
                                    <div className="relative">
                                          {/* Image Container */}
                                          <div className="relative aspect-square">
                                                <img
                                                      src={item.image}
                                                      alt={item.title}
                                                      className="w-full h-full object-cover"
                                                />
                                                <button className="absolute top-3 right-3 text-primary hover:scale-110 transition">
                                                      <Heart className="w-6 h-6 fill-primary" />
                                                </button>
                                          </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 space-y-2">
                                          <h3 className="font-semibold text-lg text-center">{item.title}</h3>
                                          <p className="text-primary text-xl font-bold text-center">
                                                ${item.price.toFixed(2)}
                                          </p>
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
