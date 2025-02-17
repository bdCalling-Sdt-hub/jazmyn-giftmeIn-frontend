'use client';

import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/giftImage3.jpg';
import Image from 'next/image';
import { Button, Checkbox, Form, Input, Modal, Select } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import { useCreateOrderMutation, useGetCartQuery } from '@/redux/apiSlices/cartSlice';
import { getImageUrl } from '@/util/getImgUrl';
import toast from 'react-hot-toast';
const { Option } = Select;

const CheckoutPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createOrder] = useCreateOrderMutation();

  const { data: cartItems, isLoading } = useGetCartQuery();

  if (isLoading) return <h2>Loading...</h2>;
  const cartData = cartItems?.data?.data;
  const { totalPrice } = cartItems?.data;
  console.log(cartData);

  const onFinish = async (values) => {
    const data = {
      products: [
        ...cartData?.map((item) => ({
          id: item?._id,
          quantity: item?.variations?.quantity,
          size: item?.variations?.size,
          color: item?.variations?.color,
          price: item?.variations?.quantity * item?.variations?.product[0]?.discountedPrice,
        })),
      ],
      ...values,
    };

    try {
      const res = await createOrder(data).unwrap();
      console.log(res);
      if (res.data?.paymentUrl) {
        window.location.href = res.data?.paymentUrl;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="max-w-[1200px] min-h-screen flex justify-center items-center mx-auto px-4 md:px-10">
      <Form layout="vertical" onFinish={onFinish} className="w-full">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Billing Address */}
          <div className="w-full md:w-[60%] bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Billing Address</h2>
            <Form.Item label="Full Name" name="userName" rules={[{ required: true, message: 'Full name is required' }]}>
              <Input placeholder="Enter your full name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="userEmail"
              rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <div className="flex flex-col md:flex-row gap-4">
              <Form.Item
                className="w-full md:w-1/2"
                label="Country"
                name="country"
                rules={[{ required: true, message: 'Country is required' }]}
              >
                <Select placeholder="Select your country">
                  <Option value="USA">USA</Option>
                  <Option value="Canada">Canada</Option>
                  <Option value="UK">UK</Option>
                </Select>
              </Form.Item>
              <Form.Item
                className="w-full md:w-1/2"
                label="City"
                name="city"
                rules={[{ required: true, message: 'City is required' }]}
              >
                <Input placeholder="Enter your city" />
              </Form.Item>
            </div>
            <Form.Item
              label="Street Address"
              name="streetAddress"
              rules={[{ required: true, message: 'Street address is required' }]}
            >
              <Input placeholder="Enter your street address" />
            </Form.Item>
            <Form.Item label="Post Code" name="postCode">
              <Input placeholder="Enter your post code" />
            </Form.Item>
            <Form.Item label="Your Message for Order" name="orderMessage">
              <Input.TextArea rows={4} placeholder="Enter any special instructions" />
            </Form.Item>
          </div>

          {/* Order Summary */}
          <div className="w-full md:w-[50%] bg-pink-100 p-4 rounded-lg">
            <h1 className="text-2xl font-semibold text-center">Your Order Summary</h1>
            <div className="rounded-lg bg-white p-4 mt-4">
              {cartData.map((product) => (
                <div key={product._id} className="flex border-b pb-2 items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      className="w-16 h-16 object-cover rounded-lg"
                      src={getImageUrl(product?.variations?.product[0]?.featureImage)}
                      width={50}
                      height={50}
                      alt={product.title}
                    />
                    <div>
                      <p>{product?.variations?.product[0]?.productName}</p>
                      <p>
                        {product?.variations?.quantity} x ${product?.variations?.product[0]?.discountedPrice}
                      </p>
                    </div>
                  </div>
                  <p>${product?.variations?.product[0]?.discountedPrice * product?.variations?.quantity}</p>
                </div>
              ))}
              <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                <p>Subtotal</p>
                <p>{totalPrice?.toFixed(2)}</p>
              </div>
              <div className="flex justify-between border-t pt-2">
                <p>Shipping</p>
                <p>$0.00</p>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <p>Total</p>
                <p className="text-[#FC2FAD]">{totalPrice?.toFixed(2)}</p>
              </div>
              <Checkbox checked={isChecked} onChange={handleCheckboxChange} className="block mt-4">
                I agree to the terms and conditions.
              </Checkbox>
              <Button
                disabled={!isChecked}
                htmlType="submit"
                className="bg-[#FC2FAD] rounded-lg text-white w-full py-2 mt-3"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </Form>

      <Modal
        title="Payment Complete"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        footer={[
          <Link key="home" href={'/'}>
            <Button className="bg-[#FC2FAD] text-white mx-auto rounded-lg py-2" onClick={handleOk}>
              Go to Home
            </Button>
          </Link>,
        ]}
        className="border-t-8 border-[#FC2FAD] rounded-lg"
      >
        <div className="flex flex-col items-center text-center py-10">
          <FaCheckCircle className="text-[#FC2FAD]" size={80} />
          <p className="text-lg font-bold text-[#FC2FAD]">Thank you for your order!</p>
          <p className="text-gray-500">We’ll notify you when your order ships.</p>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
