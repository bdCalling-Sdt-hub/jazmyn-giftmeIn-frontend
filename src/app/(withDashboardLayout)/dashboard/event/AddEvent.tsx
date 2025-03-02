'use client';
import { useCreateEventMutation } from '@/redux/apiSlices/eventSlice';
import { useGetCategoriesQuery } from '@/redux/apiSlices/productSlice';
import { Form, Input, Select, DatePicker, Button, Spin } from 'antd';
import toast from 'react-hot-toast';

const AddEvent = () => {
  const [form] = Form.useForm();

  const [createEvent] = useCreateEventMutation();
  const { data: categoryData, isLoading } = useGetCategoriesQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin></Spin>
      </div>
    );
  }

  //   const categoryOptions = categoryData?.data?.map((category: any) => ({
  //     value: category._id,
  //     label: category.categoryName,
  //   }));

  const cat = categoryData?.data?.data || [];
  //   console.log(cat);

  const onSubmit = async (values: any) => {
    try {
      const res = await createEvent(values).unwrap();
      if (res.success) {
        toast.success(res?.message);
        form.resetFields();
      }
    } catch (error: any) {
      toast.error(error?.message || 'Something went wrong');
    }
    console.log(values);
    form.resetFields();
  };

  return (
    <div className=" ">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Add a new event</h2>
        <p className="text-gray-600">Keep your celebrations organized and never miss a special moment!</p>
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
            options={cat?.map((category: any) => ({ value: category._id, label: category.categoryName }))}
          />
        </Form.Item>

        <Form.Item
          label="Event Date"
          name="eventDate"
          rules={[{ required: true, message: 'Please input event date!' }]}
        >
          <DatePicker className="w-full" placeholder="dd/mm/yyyy" />
        </Form.Item>

        <Form.Item
          label="Recipient's Name"
          name="RecipientName"
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
