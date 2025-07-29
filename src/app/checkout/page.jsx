'use client';

import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/giftImage3.jpg';
import Image from 'next/image';
import { Button, Checkbox, Form, Input, Modal, Select } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaGift } from 'react-icons/fa';
import {
  useCreateOrderMutation,
  useCreateOrderWithGiftBalanceMutation,
  useGetCartQuery,
  useGetCurrentSubscriptionQuery,
} from '@/redux/apiSlices/cartSlice';
import { getImageUrl } from '@/util/getImgUrl';
import toast from 'react-hot-toast';
const { Option } = Select;

const CheckoutPage = () => {
  const [form] = Form.useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isGiftModalVisible, setIsGiftModalVisible] = useState(false);
  const [createOrder] = useCreateOrderMutation();
  const [createOrderWithGiftBalance] = useCreateOrderWithGiftBalanceMutation();

  const { data: cartItems, isLoading } = useGetCartQuery();
  const { data: currentSubscription, isLoading: isSubLoading } = useGetCurrentSubscriptionQuery(undefined);

  if (isLoading || isSubLoading) return <h2>Loading...</h2>;
  const cartData = cartItems?.data?.data;
  const { totalPrice } = cartItems?.data;
  const availableGiftBalance = currentSubscription?.data?.[0]?.balance || 0;

  const onFinish = async (values) => {
    const data = {
      products: cartData?.map((item) => ({
        id: item?._id,
        productName: item?.variations?.[0]?.product?.productName,
        price: item?.variations?.[0]?.product?.discountedPrice,
        quantity: item?.variations?.[0]?.quantity,
        size: item?.variations?.[0]?.size,
        color: item?.variations?.color,
      })),
      ...values,
    };

    try {
      const res = await createOrder(data).unwrap();
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

  const handleGiftBalanceClick = () => {
    setIsGiftModalVisible(true);
  };

  const handleGiftModalOk = () => {
    setIsGiftModalVisible(false);
  };

  const handleGiftModalCancel = () => {
    setIsGiftModalVisible(false);
  };

  const handlePurchaseWithGift = async () => {
    if (availableGiftBalance >= totalPrice) {
      const giftOrderData = {
        amountPaid: totalPrice,
        status: 'completed',
        orderDetails: {
          userName: form.getFieldValue('userName'),
          userEmail: form.getFieldValue('userEmail'),
          country: form.getFieldValue('country'),
          city: form.getFieldValue('city'),
          streetAddress: form.getFieldValue('streetAddress'),
          postCode: form.getFieldValue('postCode'),
          orderMessage: form.getFieldValue('orderMessage'),
        },
        products: cartData?.map((item) => ({
          id: item?._id,
          productName: item?.variations?.[0]?.product?.productName,
          price: item?.variations?.[0]?.product?.discountedPrice,
          quantity: item?.variations?.[0]?.quantity,
          size: item?.variations?.[0]?.size,
          color: item?.variations?.color,
        })),
      };

      console.log('savavbsdhsrthejntyhjn', giftOrderData);

      try {
        const res = await createOrderWithGiftBalance(giftOrderData).unwrap();
        console.log('Gift balance order:', res);
        setIsGiftModalVisible(false);
        setIsModalVisible(true);
        toast.success('Order placed successfully using gift balance!');
      } catch (error) {
        console.log(error);
        toast.error(error?.data?.message || 'Something went wrong');
      }
    }
  };

  const isGiftBalanceSufficient = availableGiftBalance >= totalPrice;

  return (
    <div className="max-w-[1200px] min-h-screen flex justify-center items-center mx-auto px-4 md:px-10">
      <Form form={form} layout="vertical" onFinish={onFinish} className="w-full">
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
              {cartData?.map((product) => (
                <div key={product._id} className="flex border-b pb-2 items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      className="w-16 h-16 object-cover rounded-lg"
                      src={getImageUrl(product?.variations?.[0]?.product?.feature)}
                      width={50}
                      height={50}
                      alt={product.title}
                    />
                    <div>
                      <p>{product?.variations?.[0]?.product?.productName}</p>
                      <p>
                        {product?.variations?.[0]?.quantity} x ${product?.variations[0]?.product?.discountedPrice}
                      </p>
                    </div>
                  </div>
                  <p>${product?.variations?.[0]?.product?.discountedPrice * product?.variations?.[0]?.quantity}</p>
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
              <h1 className="text-center mt-3">Or</h1>
              <Button
                disabled={!isChecked}
                className="bg-[#FC2FAD] rounded-lg text-white w-full py-2 mt-3"
                onClick={handleGiftBalanceClick}
              >
                Use Gift Balance
              </Button>
            </div>
          </div>
        </div>
      </Form>

      {/* Payment Complete Modal */}
      <Modal
        title="Payment Complete"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        footer={[
          // <Link key="home" href={'/'}>
          <Button
            onClick={() => (window.location.href = '/')}
            className="bg-[#FC2FAD] text-white mx-auto rounded-lg py-2"
          >
            Go to Home
          </Button>,
          // </Link>,
        ]}
        className="border-t-8 border-[#FC2FAD] rounded-lg"
      >
        <div className="flex flex-col items-center text-center py-10">
          <FaCheckCircle className="text-[#FC2FAD]" size={80} />
          <p className="text-lg font-bold text-[#FC2FAD]">Thank you for your order!</p>
          <p className="text-gray-500">We'll notify you when your order ships.</p>
        </div>
      </Modal>

      {/* Gift Balance Modal */}
      <Modal
        title={
          <div className="flex items-center gap-2">
            <FaGift className="text-[#FC2FAD]" />
            <span>Gift Balance</span>
          </div>
        }
        open={isGiftModalVisible}
        onOk={handleGiftModalOk}
        onCancel={handleGiftModalCancel}
        footer={[
          <Button key="cancel" onClick={handleGiftModalCancel}>
            Cancel
          </Button>,
          <Button
            key="purchase"
            className="bg-[#FC2FAD] text-white"
            disabled={!isGiftBalanceSufficient}
            onClick={handlePurchaseWithGift}
          >
            Purchase with Gift Balance
          </Button>,
        ]}
        className="border-t-8 border-[#FC2FAD] rounded-lg"
      >
        <div className="py-4">
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Available Gift Balance:</span>
              <span className="text-lg font-semibold text-green-600">${availableGiftBalance.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Cart Total:</span>
              <span className="text-lg font-semibold text-[#FC2FAD]">${totalPrice?.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Remaining Balance:</span>
                <span
                  className={`text-lg font-semibold ${isGiftBalanceSufficient ? 'text-green-600' : 'text-red-600'}`}
                >
                  ${Math.max(0, availableGiftBalance - totalPrice).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {!isGiftBalanceSufficient && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="text-red-600 text-sm font-medium">
                ⚠️ Insufficient gift balance. You need an additional ${(totalPrice - availableGiftBalance).toFixed(2)}{' '}
                to complete this purchase.
              </p>
            </div>
          )}

          {isGiftBalanceSufficient && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
              <p className="text-green-600 text-sm font-medium">
                ✅ You have sufficient balance to complete this purchase!
              </p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
