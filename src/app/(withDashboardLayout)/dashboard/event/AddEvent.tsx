'use client';
import { Form, Input, Select, DatePicker, Button } from 'antd';

const AddEvent = () => {
      const [form] = Form.useForm();

      const onSubmit = (values: any) => {
            console.log(values);
            form.resetFields();
      };

      return (
            <div className=" ">
                  <div className="text-center">
                        <h2 className="text-2xl font-bold mb-2">Add a new event</h2>
                        <p className="text-gray-600">
                              Keep your celebrations organized and never miss a special moment!
                        </p>
                  </div>
                  <Form
                        layout="vertical"
                        form={form}
                        name="basic"
                        requiredMark={false}
                        initialValues={{ remember: true }}
                        onFinish={onSubmit}
                  >
                        <Form.Item
                              label="Event Name"
                              name="eventName"
                              rules={[{ required: true, message: 'Please input event name!' }]}
                        >
                              <Input placeholder="What's the occasion? (e.g., Sarah's Birthday)" />
                        </Form.Item>

                        <Form.Item
                              label="Event Category"
                              name="category"
                              rules={[{ required: true, message: 'Please select category!' }]}
                        >
                              <Select
                                    placeholder="Select category"
                                    options={[
                                          { value: 'birthday', label: 'Birthday' },
                                          { value: 'anniversary', label: 'Anniversary' },
                                          { value: 'wedding', label: 'Wedding' },
                                          { value: 'other', label: 'Other' },
                                    ]}
                              />
                        </Form.Item>

                        <Form.Item
                              label="Event Date"
                              name="date"
                              rules={[{ required: true, message: 'Please input event date!' }]}
                        >
                              <DatePicker className="w-full" placeholder="dd/mm/yyyy" />
                        </Form.Item>

                        <Form.Item
                              label="Recipient's Name"
                              name="recipientName"
                              rules={[{ required: true, message: 'Please input recipient name!' }]}
                        >
                              <Input placeholder="Who's this for? (e.g., Sarah)" />
                        </Form.Item>

                        <Form.Item
                              label="Gift Preferences"
                              name="preferences"
                              rules={[{ required: true, message: 'Please select preferences!' }]}
                        >
                              <Select
                                    mode="multiple"
                                    placeholder="Select preferences"
                                    options={[
                                          { value: 'electronics', label: 'Electronics' },
                                          { value: 'fashion', label: 'Fashion' },
                                          { value: 'books', label: 'Books' },
                                          { value: 'home', label: 'Home & Living' },
                                          { value: 'sports', label: 'Sports' },
                                    ]}
                              />
                        </Form.Item>

                        <Form.Item>
                              <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                                    Save Event
                              </Button>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default AddEvent;
