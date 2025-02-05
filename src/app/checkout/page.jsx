'use client';

import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/giftImage3.jpg';
import Image from 'next/image';
import { Button, Checkbox, Form, Input, Modal, Select } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
const { Option } = Select;

const products = [
  { id: 1, title: 'Product 1', price: 29.99, quantity: 1, image: Image1 },
  { id: 2, title: 'Product 2', price: 49.99, quantity: 1, image: Image2 },
  { id: 3, title: 'Product 3', price: 19.99, quantity: 1, image: Image3 },
];

const CheckoutPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values) => {
    console.log('Form Values:', values);
    setIsModalVisible(true);
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
            <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Full name is required' }]}>
              <Input placeholder="Enter your full name" />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}>
              <Input placeholder="Enter your email" />
            </Form.Item>
            <div className="flex flex-col md:flex-row gap-4">
              <Form.Item className="w-full md:w-1/2" label="Country" name="country" rules={[{ required: true, message: 'Country is required' }]}>
                <Select placeholder="Select your country">
                  <Option value="USA">USA</Option>
                  <Option value="Canada">Canada</Option>
                  <Option value="UK">UK</Option>
                </Select>
              </Form.Item>
              <Form.Item className="w-full md:w-1/2" label="City" name="city" rules={[{ required: true, message: 'City is required' }]}>
                <Input placeholder="Enter your city" />
              </Form.Item>
            </div>
            <Form.Item label="Street Address" name="streetAddress" rules={[{ required: true, message: 'Street address is required' }]}>
              <Input placeholder="Enter your street address" />
            </Form.Item>
            <Form.Item label="Post Code" name="postCode">
              <Input placeholder="Enter your post code" />
            </Form.Item>
            <Form.Item label="Your Message for Order" name="message">
              <Input.TextArea rows={4} placeholder="Enter any special instructions" />
            </Form.Item>
          </div>
          
          {/* Order Summary */}
          <div className="w-full md:w-[50%] bg-pink-100 p-4 rounded-lg">
            <h1 className="text-2xl font-semibold text-center">Your Order Summary</h1>
            <div className="rounded-lg bg-white p-4 mt-4">
              {products.map((product) => (
                <div key={product.id} className="flex border-b pb-2 items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image className="w-16 h-16 object-cover rounded-lg" src={product.image} width={50} height={50} alt={product.title} />
                    <div>
                      <p>{product.title}</p>
                      <p>1 x ${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              ))}
              <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                <p>Subtotal</p>
                <p>$56.00</p>
              </div>
              <div className="flex justify-between border-t pt-2">
                <p>Shipping</p>
                <p>$6.00</p>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <p>Total</p>
                <p className="text-[#FC2FAD]">$62.00</p>
              </div>
              <Checkbox checked={isChecked} onChange={handleCheckboxChange} className="block mt-4">
                I agree to the terms and conditions.
              </Checkbox>
              <Button disabled={!isChecked} htmlType="submit" className="bg-[#FC2FAD] rounded-lg text-white w-full py-2 mt-3">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </Form>

      <Modal title="Payment Complete" open={isModalVisible} onOk={handleOk} onCancel={handleOk} footer={[
          <Link key="home" href={'/'}>
            <Button className="bg-[#FC2FAD] text-white mx-auto rounded-lg py-2" onClick={handleOk}>
              Go to Home
            </Button>
          </Link>
        ]} className="border-t-8 border-[#FC2FAD] rounded-lg">
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
