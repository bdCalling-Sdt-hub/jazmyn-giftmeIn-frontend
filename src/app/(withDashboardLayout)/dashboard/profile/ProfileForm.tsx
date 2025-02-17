'use client';
import React from 'react';
import { Input, Button, Select, Form } from 'antd';
import { useGetUserProfileQuery } from '@/redux/apiSlices/authSlice';

const ProfileForm = () => {
  const { data: profile, isLoading } = useGetUserProfileQuery(undefined);

  if (isLoading) return <div>Loading...</div>;

  const userData = profile?.data;
  console.log(userData);

  return (
    <Form
      style={{
        padding: '20px',
      }}
      layout="vertical"
      className="max-w-lg mx-auto  rounded-lg "
    >
      <Form.Item label="Full Name">
        <Input defaultValue={userData?.name} />
      </Form.Item>

      <Form.Item label="Email Address">
        <Input defaultValue={userData?.email} />
      </Form.Item>

      <Form.Item label="Phone Number">
        <Input defaultValue={userData?.phoneNumber} />
      </Form.Item>

      <Form.Item label="What's your primary event ?">
        <Select defaultValue="Select an event">{/* Options can be added here */}</Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" className="bg-pink-500">
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileForm;
