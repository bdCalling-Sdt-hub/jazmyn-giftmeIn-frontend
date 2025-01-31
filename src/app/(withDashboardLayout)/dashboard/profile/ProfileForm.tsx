'use client';
import React from 'react';
import { Input, Button, Select, Form } from 'antd';

const ProfileForm = () => {
      return (
            <Form
                  style={{
                        padding: '20px',
                  }}
                  layout="vertical"
                  className="max-w-lg mx-auto  rounded-lg "
            >
                  <Form.Item label="Full Name">
                        <Input defaultValue="Sazzad Chowdhury" />
                  </Form.Item>

                  <Form.Item label="Email Address">
                        <Input defaultValue="demo@gmail.com" />
                  </Form.Item>

                  <Form.Item label="Phone Number">
                        <Input defaultValue="+88 01916333904" />
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
