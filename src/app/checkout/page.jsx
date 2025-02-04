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
    <div className="max-w-[1200px] min-h-screen flex justify-center items-center mx-auto">
      <Form layout="vertical" onFinish={onFinish}>
        <div className="flex gap-10">
          <div className="w-[60%] bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Billing Address</h2>
            <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Full name is required' }]}>
              <Input placeholder="Enter your full name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <div className="flex gap-4 w-full">
              <div className="w-1/2">
                <Form.Item label="Country" name="country" rules={[{ required: true, message: 'Country is required' }]}>
                  <Select placeholder="Select your country">
                    <Option value="USA">USA</Option>
                    <Option value="Canada">Canada</Option>
                    <Option value="UK">UK</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="w-1/2">
                <Form.Item label="City" name="city" rules={[{ required: true, message: 'City is required' }]}>
                  <Input placeholder="Enter your city" />
                </Form.Item>
              </div>
            </div>
            <div className="flex gap-4">
              <Form.Item
                label="Street Address"
                name="streetAddress"
                rules={[{ required: true, message: 'Street address is required' }]}
              >
                <Input placeholder="Enter your street address" />
              </Form.Item>
              <Form.Item label="State" name="state">
                <Input placeholder="Enter your state" />
              </Form.Item>
              <Form.Item label="Post Code" name="postCode">
                <Input placeholder="Enter your post code" />
              </Form.Item>
            </div>
            <Form.Item label="Your Message for Order" name="message">
              <Input.TextArea rows={4} placeholder="Enter any special instructions" />
            </Form.Item>
            <Form.Item
              label={<h1 className="text-2xl font-semibold my-5">Payment Method</h1>}
              name="paymentMethod"
              rules={[{ required: true, message: 'Payment method is required' }]}
            >
              <Checkbox.Group style={{ display: 'flex', flexDirection: 'column' }}>
                <Checkbox value="giftBalance">Use Gift Balance</Checkbox>
                <Checkbox value="cardPayment">Card Payment</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </div>
          <div className="w-[50%] bg-pink-100 p-3">
            <h1 className="text-2xl font-semibold text-center">Your Order Summary</h1>
            <div className="rounded-lg bg-white p-4 m-5">
              <div className="flex font-semibold justify-between pb-3 border-b-4">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              <div className="space-y-2 mt-5">
                {products.map((product) => (
                  <div key={product.id} className="flex border-b-4 pb-2 items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        className="w-16 h-16 rounded-lg"
                        src={product.image}
                        width={50}
                        height={50}
                        alt={product.title}
                      />
                      <div className="flex flex-col">
                        <p>{product.title}</p>
                        <p>1 x $40.00</p>
                      </div>
                    </div>
                    <p>${product.price}</p>
                  </div>
                ))}
                <div className="flex justify-between border-b-4 pb-2">
                  <h1 className="font-semibold">Subtotal</h1>
                  <p>$56</p>
                </div>
                <div className="flex justify-between border-b-4 pb-2">
                  <h1 className="font-semibold">Shipping</h1>
                  <p>$6</p>
                </div>
                <div className="flex justify-between pb-2">
                  <h1 className="font-bold">Total</h1>
                  <p className="font-bold text-[#FC2FAD] text-2xl">$62</p>
                </div>
              </div>
              <div className="px-5 py-2 space-y-2">
                <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
                  I have read and agree to the terms and conditions.
                </Checkbox>
                <div>
                  <Button
                    disabled={!isChecked}
                    htmlType="submit"
                    className={`!bg-[#FC2FAD] !rounded-lg !text-xl !py-6 !text-white w-full ${
                      !isChecked ? '!bg-pink-300' : ''
                    }`}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
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
          <Link href={'/'}>
            <Button key="home" className=" bg-[#FC2FAD] text-white  mx-auto rounded-3xl py-2" onClick={handleOk}>
              Go to Home
            </Button>
          </Link>,
        ]}
        className="border-t-8 border-t-[#FC2FAD] rounded-2xl"
      >
        <div className="flex flex-col items-center text-center py-20 justify-center">
          <FaCheckCircle className="text-[#FC2FAD]" size={80} />
          <p className="my-2 text-lg font-bold text-[#FC2FAD]">Thank you for your order! Your payment is complete.</p>
          <p className=" text-gray-500">
            We’ll notify you as soon as your order is on its way. If you have any questions or need assistance, feel
            free to contact our support team.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
