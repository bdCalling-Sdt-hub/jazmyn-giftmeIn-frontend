'use client';
import { useOtpVerifyMutation } from '@/redux/apiSlices/authSlice';
import { Button, Form, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import OTPInput from 'react-otp-input';

const { Text } = Typography;

const VerifyOtp = () => {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');

  const [verifyOtp, isLoading] = useOtpVerifyMutation();

  useEffect(() => {
    const emailFromQuery = new URLSearchParams(window.location.search).get('email');
    setEmail(emailFromQuery);
  }, []);

  //console.log(email);

  const onFinish = async (values) => {
    const data = {
      email: email,
      oneTimeCode: Number(otp),
    };

    try {
      const res = await verifyOtp(data).unwrap();
      if (res.success) {
        toast.success(res?.message || 'OTP verified successfully');
        router.push('/auth/login');
      } else {
        toast.error(res?.message || 'OTP verification failed');
      }
    } catch (error) {
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  const handleResendEmail = async () => {};
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[500px] h-[800px] ">
        <div className=" mb-6">
          <h1 className="text-[25px] font-semibold mb-6 text-primary ">Verification code</h1>
          <p className=" ">
            We&apos;ll send a verification code to your email. Check your inbox and enter the code here.
          </p>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <div className="flex items-center justify-center mb-6">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              inputStyle={{
                height: 50,
                width: 50,
                borderRadius: '8px',
                margin: '16px',
                fontSize: '20px',
                border: '1px solid #818181',
                color: '#2B2A2A',
                outline: 'none',
                marginBottom: 10,
              }}
              renderInput={(props) => <input {...props} />}
            />
          </div>

          <div className="flex items-center justify-between mb-6 ">
            <Text>Don&apos;t received code?</Text>

            <p
              onClick={handleResendEmail}
              className="login-form-forgot underline font-medium"
              style={{ color: '#00B047', cursor: 'pointer' }}
            >
              Resend
            </p>
          </div>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              htmlType="submit"
              style={{
                width: '100%',
                height: 40,
                border: '1px solid #d9d9d9',
                outline: 'none',
                boxShadow: 'none',
                background: '#0A2369',
                color: 'white',
              }}
            >
              Verify
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default VerifyOtp;
