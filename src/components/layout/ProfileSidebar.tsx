'use client';
import React, { useState } from 'react';
import { Menu, Modal, Upload } from 'antd';
import Image from 'next/image';
import { Edit2, User, Calendar, Gift, ShoppingBag, Heart, Crown, Settings, LogOut, CameraIcon } from 'lucide-react';
import { UploadChangeParam } from 'antd/es/upload';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { FaExclamation } from 'react-icons/fa';

const DashboardSidebar = () => {
  const [previewImage, setPreviewImage] = useState<undefined | string>('https://i.ibb.co.com/yN2vT01/me.jpg');

  const handleFileChange = ({ file }: UploadChangeParam<any>) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onload = () => {
      setPreviewImage(reader.result as string);
    };
  };
  const handleLogout = () => {
    Modal.confirm({
      centered: true,
      title: 'Close your account',
      content: 'Are you sure you want to close your account? This action cannot be undone.',
      okText: 'Confirm',
      cancelText: 'Cancel',
      icon: <FaExclamation className="mx-2" size={24} color="#F82BA9" />,
      okButtonProps: {
        style: { backgroundColor: '#F82BA9', borderColor: '#ff4d4f', color: '#fff' },
      },

      cancelButtonProps: {
        style: { color: '#F82BA9', borderColor: 'transparent', fontWeight: 'bold' },
      },

      onOk: () => {
        toast.success('Logout successfully');
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');
        window.location.href = '/auth/login';
      },
    });
  };
  const sidebarItemsMentees = [
    {
      key: 'profile',
      icon: <User size={20} />,
      label: <Link href="/dashboard/profile">My Profile</Link>,
    },
    {
      key: 'event',
      icon: <Calendar size={20} />,
      label: <Link href="/dashboard/event">Event</Link>,
    },
    {
      key: 'gift-history',
      icon: <Gift size={20} />,
      label: <Link href="/dashboard/gift-history">Gift History</Link>,
    },
    {
      key: 'order-history',
      icon: <ShoppingBag size={20} />,
      label: <Link href="/dashboard/order-history">Order History</Link>,
    },
    {
      key: 'wishlist',
      icon: <Heart size={20} />,
      label: <Link href="/dashboard/wishlist">Wishlist</Link>,
    },
    {
      key: 'subscriptions',
      icon: <Crown size={20} />,
      label: <Link href="/dashboard/subscriptions">Subscriptions</Link>,
    },
    {
      key: 'settings',
      icon: <Settings size={20} />,
      label: <Link href="/dashboard/settings">Settings</Link>,
    },
    {
      key: 'logout',
      icon: <LogOut size={20} />,
      label: 'Logout',
      onClick: handleLogout,
    },
  ];

  return (
    <div className="max-h-[572.19px] overflow-y-scroll hide-scrollbar p-2">
      <div className="flex flex-col items-center mb-2">
        <div className="relative size-[86px] rounded-full border-2 border-primary p-1">
          <Image
            width={500}
            height={500}
            src={previewImage || 'https://i.ibb.co.com/yN2vT01/me.jpg'}
            alt="Profile"
            className="w-full h-full  object-cover rounded-full"
          />
          <div className="absolute right-0 bottom-0 cursor-pointer bg-white w-8 h-8 rounded-lg text-center flex items-center justify-center">
            <Upload showUploadList={false} onChange={handleFileChange}>
              <div className="bg-primary p-2 rounded-full text-white">
                <CameraIcon size={20} />
              </div>
            </Upload>
          </div>
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-bold mb-1">Jazmyne Doe</h3>
          <p className="text-sm text-gray-600">demo@example.com</p>
        </div>
      </div>

      {/* Menu Section */}
      <Menu
        style={{
          border: 'none',
        }}
        items={sidebarItemsMentees}
        mode="vertical"
        defaultSelectedKeys={['profile']}
        className="w-full"
      ></Menu>
    </div>
  );
};

export default DashboardSidebar;
