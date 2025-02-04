"use client";

import BreadcrumbsBanner from "@/components/common/BreadcrumbsBanner";
import {
  Checkbox,
  ConfigProvider,
  Input,
  Pagination,
  Select,
  Slider,
} from "antd";
import { Heading } from "lucide-react";
import ProductCard from "@/components/common/ProductCard";

import React from "react";

const products = [
  {
    id: "1",
    title: "Wireless Headphones",
    description: "Noise-canceling wireless headphones with deep bass.",
    price: 120,
    category: "Electronics",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/christmas-gift-box-food-decor-and-fir-tree-branch-royalty-free-image-1694638050.jpg?crop=0.668xw:1.00xh;0.210xw,0&resize=640:*",
  },
  {
    id: "2",
    title: "Smartphone",
    description: "Latest 5G smartphone with AMOLED display.",
    price: 899,
    category: "Electronics",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/christmas-gift-box-food-decor-and-fir-tree-branch-royalty-free-image-1694638050.jpg?crop=0.668xw:1.00xh;0.210xw,0&resize=640:*",
  },
  {
    id: "3",
    title: "Gaming Laptop",
    description: "High-performance gaming laptop with RTX graphics.",
    price: 1500,
    category: "Computers",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/christmas-gift-box-food-decor-and-fir-tree-branch-royalty-free-image-1694638050.jpg?crop=0.668xw:1.00xh;0.210xw,0&resize=640:*",
  },
  {
    id: "4",
    title: "Running Shoes",
    description: "Comfortable running shoes for all terrains.",
    price: 80,
    category: "Footwear",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/christmas-gift-box-food-decor-and-fir-tree-branch-royalty-free-image-1694638050.jpg?crop=0.668xw:1.00xh;0.210xw,0&resize=640:*",
  },
  {
    id: "5",
    title: "Leather Wallet",
    description: "Genuine leather wallet with RFID protection.",
    price: 50,
    category: "Accessories",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/christmas-gift-box-food-decor-and-fir-tree-branch-royalty-free-image-1694638050.jpg?crop=0.668xw:1.00xh;0.210xw,0&resize=640:*",
  },
  {
    id: "6",
    title: "Backpack",
    description: "Water-resistant travel backpack with multiple compartments.",
    price: 65,
    category: "Bags",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/christmas-gift-box-food-decor-and-fir-tree-branch-royalty-free-image-1694638050.jpg?crop=0.668xw:1.00xh;0.210xw,0&resize=640:*",
  },
  {
    id: "7",
    title: "Smartwatch",
    description: "Feature-rich smartwatch with fitness tracking.",
    price: 199,
    category: "Wearable",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/christmas-gift-box-food-decor-and-fir-tree-branch-royalty-free-image-1694638050.jpg?crop=0.668xw:1.00xh;0.210xw,0&resize=640:*",
  },
  {
    id: "8",
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with surround sound.",
    price: 99,
    category: "Electronics",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/christmas-gift-box-food-decor-and-fir-tree-branch-royalty-free-image-1694638050.jpg?crop=0.668xw:1.00xh;0.210xw,0&resize=640:*",
  },
  {
    id: "9",
    title: "Sunglasses",
    description: "Polarized sunglasses with UV protection.",
    price: 75,
    category: "Accessories",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/christmas-gift-box-food-decor-and-fir-tree-branch-royalty-free-image-1694638050.jpg?crop=0.668xw:1.00xh;0.210xw,0&resize=640:*",
  },
  {
    id: "10",
    title: "Coffee Maker",
    description: "Automatic coffee maker with temperature control.",
    price: 120,
    category: "Home Appliances",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/christmas-gift-box-food-decor-and-fir-tree-branch-royalty-free-image-1694638050.jpg?crop=0.668xw:1.00xh;0.210xw,0&resize=640:*",
  },
];

const categories = [
  {
    _id: "1",
    title: "Special Gift Box",
    price: 50,
  },
  {
    _id: "2",
    title: "Gifts for Him",
    price: 75,
  },
  {
    _id: "3",
    title: "Gifts for Her",
    price: 100,
  },
  {
    _id: "4",
    title: "Gifts for Kids",
    price: 25,
  },
  {
    _id: "5",
    title: "Gifts for Home",
    price: 150,
  },
  {
    _id: "6",
    title: "Gifts for Pets",
    price: 20,
  },
  {
    _id: "7",
    title: "Gifts for Occasions",
    price: 50,
  },
];

const page = () => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    if (checked) {
      setCheckedCategories([...checkedCategories, value]);
    } else {
      setCheckedCategories(checkedCategories.filter((id) => id !== value));
    }
  };

  return (
    <div className=" bg-slate-50">
      <BreadcrumbsBanner pageName={"Shop"} routeName={"Shop"} />
      <div className="container">
        <div className="md:flex mt-10 justify-center gap-10">
          <div className="md:w-[30%]">
            <div className="bg-white shadow-md p-5 space-y-2 rounded-2xl">
              <h1 className="text-xl font-semibold uppercase text-[#160E4B]">
                Search
              </h1>
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full max-w-md px-4 py-2 mb-5"
              />
            </div>

            <div className="my-5 bg-white shadow-md p-5 space-y-2 rounded-2xl">
              <h1 className="text-xl font-semibold uppercase text-[#160E4B]">
                Categories
              </h1>
              <div>
                {categories?.map((item) => (
                  <div
                    key={item._id}
                    className="my-2 flex items-center justify-between"
                  >
                    <div className="space-x-5">
                      <ConfigProvider
                        theme={{
                          token: {
                            colorPrimary: "#FC2FAD",
                          },
                        }}
                      >
                        <Checkbox
                          className="w-5 h-5"
                          id={item._id}
                          name={item.title}
                          value={item._id} // Use `_id` for filtering
                          onChange={handleCheckboxChange}
                        />
                      </ConfigProvider>
                      <label className="text-xl" htmlFor={item._id}>
                        {item.title}
                      </label>
                    </div>
                    <span className="ml-2 text-xl">({"11"})</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-5 bg-white shadow-md p-5 space-y-2 rounded-2xl">
              <h1 className="text-xl font-semibold uppercase text-[#160E4B]">
                Filter By Price
              </h1>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#FC2FAD",
                  },
                }}
              >
                <Slider range defaultValue={[0.0, 1000.0]} />
              </ConfigProvider>
              <p className="font-bold">Price: $0.00 - $1000.00</p>
            </div>
            <div className="my-5 bg-white shadow-md p-5 space-y-2 rounded-2xl">
              <h1 className="text-xl font-semibold uppercase text-[#160E4B]">
                Sales
              </h1>
              <div className="space-y-2">
                <div className="space-x-5">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#FC2FAD",
                      },
                    }}
                  >
                    <Checkbox
                      className="w-5 h-5"
                      id="onSale"
                      name="onSale"
                      value="onSale"
                      onChange={handleCheckboxChange}
                    />
                  </ConfigProvider>
                  <label className="text-xl" htmlFor="onSale">
                    On Sale
                  </label>
                </div>
                <div className="space-x-5">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#FC2FAD",
                      },
                    }}
                  >
                    <Checkbox
                      className="w-5 h-5"
                      id="outOfStock"
                      name="outOfStock"
                      value="outOfStock"
                      onChange={handleCheckboxChange}
                    />
                  </ConfigProvider>
                  <label className="text-xl" htmlFor="outOfStock">
                    Out of Stock
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[70%] mb-20">
            <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
              {products?.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Pagination pageSize={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
