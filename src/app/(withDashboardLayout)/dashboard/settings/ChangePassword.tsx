import { Form, Input, Button } from 'antd';

const ChangePassword = () => {
      const [form] = Form.useForm();

      const onFinish = (values: any) => {
            console.log('Received values of form: ', values);
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
                              name="oldpassword"
                              rules={[{ required: true, message: 'Please input your old password!' }]}
                        >
                              <Input.Password />
                        </Form.Item>

                        <Form.Item
                              label="New Password"
                              name="newpassword"
                              rules={[{ required: true, message: 'Please input your new password!' }]}
                        >
                              <Input.Password />
                        </Form.Item>

                        <Form.Item
                              label="Confirm Password"
                              name="confirmpassword"
                              rules={[
                                    { required: true, message: 'Please confirm your password!' },
                                    ({ getFieldValue }) => ({
                                          validator(_, value) {
                                                if (!value || getFieldValue('newpassword') === value) {
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
                                    Update
                              </Button>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default ChangePassword;
