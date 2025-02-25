import { useChangePasswordMutation } from '@/redux/apiSlices/authSlice';
import { Form, Input, Button } from 'antd';
import toast from 'react-hot-toast';

const ChangePassword = () => {
  const [form] = Form.useForm();

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const onFinish = async (values: any) => {
    try {
      const res = await changePassword(values).unwrap();
      if (res.success) {
        toast.success(res?.message);
        form.resetFields();
      }
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="w-full space-y-3  max-w-lg p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <Form
        requiredMark={false}
        layout="vertical"
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Old Password"
          name="currentPassword"
          rules={[{ required: true, message: 'Please input your old password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[{ required: true, message: 'Please input your new password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={['newPassword']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item style={{ textAlign: 'end' }}>
          <Button type="primary" htmlType="submit">
            {isLoading ? 'Loading...' : 'Change Password'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePassword;
