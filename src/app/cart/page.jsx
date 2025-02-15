'use client';

import { Table } from 'antd';
import Link from 'next/link';
import { useGetCartQuery, useUpdateCartQuantityMutation } from '@/redux/apiSlices/cartSlice';
import { getImageUrl } from '@/util/getImgUrl';

const Cart = () => {
  const { data: cartData, isLoading } = useGetCartQuery();
  const [updateCart] = useUpdateCartQuantityMutation();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const cartItems = cartData?.data || [];

  // Update quantity
  const updateQuantity = async (record, newQuantity) => {
    const data = {
      quantity: newQuantity,
      productId: record?.variations?.product[0]?._id,
    };
    console.log(record, newQuantity);
    const itemToUpdate = cartItems.find((item) => item._id === record?._id);
    if (itemToUpdate) {
      await updateCart({ id: itemToUpdate._id, data });
    }
  };

  // Remove item from cart
  const removeItem = (key) => {
    // Implement remove item logic here, possibly another mutation
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => {
    const subtotal = item?.variations?.product[0]?.discountedPrice * item?.variations?.quantity;
    return sum + (subtotal || 0);
  }, 0);

  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      render: (_, record) => (
        <div className="flex items-center gap-4">
          <img
            src={getImageUrl(record?.variations?.product[0]?.featureImage)}
            alt={record?.variations?.product[0]?.productName}
            className="w-16 h-16 object-cover"
          />
          <span>{record?.variations?.product[0]?.productName}</span>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (_, record) => <span>${record?.variations?.product[0]?.discountedPrice?.toFixed(2)}</span>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity, record) => {
        // console.log(record);
        return (
          <div className="flex items-center gap-4 mt-3">
            <div className="flex border font-semibold p-2 rounded-2xl border-gray-300 items-center gap-3">
              <button
                onClick={() =>
                  updateQuantity(record, record?.variations?.quantity > 1 ? record?.variations?.quantity - 1 : 1)
                }
                className="border bg-gray-200 rounded-2xl px-3 py-1"
              >
                -
              </button>
              <span className="text-xl">{record?.variations?.quantity}</span>
              <button
                onClick={() => updateQuantity(record, record?.variations?.quantity + 1)}
                className="border bg-gray-200 rounded-2xl px-3 py-1"
              >
                +
              </button>
            </div>
          </div>
        );
      },
    },
    {
      title: 'Subtotal',
      dataIndex: 'subtotal',
      key: 'subtotal',
      render: (_, record) => (
        <span>${(record?.variations?.product[0]?.discountedPrice * record?.variations?.quantity)?.toFixed(2)}</span>
      ),
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
            dataSource={cartItems}
            columns={columns}
            pagination={false}
            scroll={{ x: 700 }}
            rowKey="_id"
          />
        </div>
        <div className="md:w-[30%] border-t-8 mt-10 md:mt-0 border-t-[#F82BA9] bg-white rounded-2xl">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 border-b-2 pb-3">Cart Total</h1>

            <div className="flex justify-between border-b-2 pb-3 text-lg mb-2">
              <span>Subtotal:</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b-2 pb-3 text-lg mb-2">
              <span>Shipping:</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between pb-3 text-lg mb-2">
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
