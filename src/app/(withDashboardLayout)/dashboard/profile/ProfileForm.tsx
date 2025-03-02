'use client';
import React from 'react';
import { Input, Button, Form } from 'antd';
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from '@/redux/apiSlices/authSlice';

import { toast } from 'react-hot-toast';

const ProfileForm = () => {
  const { data: profile, isLoading } = useGetUserProfileQuery(undefined);
  const [updateUserProfile] = useUpdateUserProfileMutation();

  if (isLoading) return <div>Loading...</div>;

  const userData = profile?.data;
  console.log(userData);

  const onSubmit = async (values: any) => {
    try {
      const res = await updateUserProfile(values).unwrap();
      if (res.success) {
        toast.success(res?.message);
      }
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Form
      initialValues={{
        name: userData?.name,
        email: userData?.email,
        phone: userData?.phone,
      }}
      onFinish={onSubmit}
      style={{
        padding: '20px',
      }}
      layout="vertical"
      className="max-w-lg mx-auto  rounded-lg "
    >
      <Form.Item name="name" label="Full Name">
        <Input />
      </Form.Item>

      <Form.Item name="email" label="Email Address">
        <Input />
      </Form.Item>

      <Form.Item name="phone" label="Phone Number">
        <Input />
      </Form.Item>

      {/* <Form.Item label="What's your primary event ?">
        <Select defaultValue="Select an event"></Select>
      </Form.Item> */}

      <Form.Item>
        <Button type="primary" htmlType="submit" className="bg-pink-500">
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileForm;
