'use client';

import { Table } from 'antd';
import { useState } from 'react';
import productImg1 from '../../assets/image1.jpg';
import productImg2 from '../../assets/image2.jpg';
import productImg3 from '../../assets/giftImage3.jpg';
import productImg4 from '../../assets/giftImage4.jpg';
import Link from 'next/link';

const Cart = () => {
  // Cart state
  const [cart, setCart] = useState([
    {
      key: '1',
      product: {
        image: productImg1.src,
        name: 'Gift Package',
      },
      price: 100,
      quantity: 1,
      subtotal: 100,
    },
    {
      key: '2',
      product: {
        image: productImg2.src,
        name: 'Gift Package',
      },
      price: 150,
      quantity: 2,
      subtotal: 300,
    },
    {
      key: '3',
      product: {
        image: productImg3.src,
        name: 'Gift Package',
      },
      price: 200,
      quantity: 1,
      subtotal: 200,
    },
    {
      key: '4',
      product: {
        image: productImg4.src,
        name: 'Gift Package',
      },
      price: 250,
      quantity: 3,
      subtotal: 750,
    },
  ]);

  // Update quantity
  const updateQuantity = (key, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.key === key
          ? {
              ...item,
              quantity: newQuantity,
              subtotal: newQuantity * item.price,
            }
          : item,
      ),
    );
  };

  // Remove item from cart
  const removeItem = (key) => {
    setCart((prevCart) => prevCart.filter((item) => item.key !== key));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.subtotal, 0);

  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      render: (product) => (
        <div className="flex items-center gap-4">
          <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
          <span>{product.name}</span>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity, record) => (
        <div className="flex items-center gap-4 mt-3">
          <div className="flex border font-semibold p-2 rounded-2xl border-gray-300 items-center gap-3">
            <button
              onClick={() => updateQuantity(record.key, quantity > 1 ? quantity - 1 : 1)}
              className="border bg-gray-200 rounded-2xl px-3 py-1"
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={() => updateQuantity(record.key, quantity + 1)}
              className="border bg-gray-200 rounded-2xl px-3 py-1"
            >
              +
            </button>
          </div>
        </div>
      ),
    },
    {
      title: 'Subtotal',
      dataIndex: 'subtotal',
      key: 'subtotal',
      render: (subtotal) => `$${subtotal.toFixed(2)}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <button className="text-red-500 hover:underline" onClick={() => removeItem(record.key)}>
          X
        </button>
      ),
    },
  ];

  return (
    <div className="bg-[#F8F8F8]">
      <div className="md:p-20 max-w-7xl mx-auto p-5 md:flex gap-10 w-full">
        <div className="md:w-[70%]">
          <Table
            className="border-t-8 border-t-[#F82BA9] rounded-2xl"
            dataSource={cart}
            columns={columns}
            pagination={false}
            scroll={{ x: 700 }}
          />
        </div>
        <div className="md:w-[30%] border-t-8 mt-10 md:mt-0 border-t-[#F82BA9] bg-white rounded-2xl">
          <div className=" p-6 ">
            <h1 className="text-2xl font-bold mb-4 border-b-2 pb-3">Cart Total</h1>

            <div className="flex justify-between border-b-2 pb-3 text-lg mb-2">
              <span>Subtotal:</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b-2 pb-3 text-lg mb-2">
              <span>Shipping:</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between  pb-3 text-lg mb-2">
              <span>Total:</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>

            <Link href={'/checkout'}>
              <button className="w-full mt-4 bg-[#F82BA9] text-white py-3 rounded-2xl hover:bg-[#b0397f] hover:text-black">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
