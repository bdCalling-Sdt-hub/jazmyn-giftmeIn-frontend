'use client';
import { useGetUserProfileQuery } from '@/redux/apiSlices/authSlice';
import { useCreateEventMutation, useGetEventCategoriesQuery } from '@/redux/apiSlices/eventSlice';
import { Form, Input, Select, DatePicker, Button, Spin } from 'antd';
import toast from 'react-hot-toast';

const AddEvent = () => {
  const [form] = Form.useForm();

  const [createEvent] = useCreateEventMutation();
  const { data: categoryData, isLoading } = useGetEventCategoriesQuery(undefined);
  const { data: profileData, isLoading: isProfileLoading } = useGetUserProfileQuery(undefined);

  if (isLoading || isProfileLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin />
      </div>
    );
  }

  const cat = categoryData?.data || [];
  const userId = profileData?.data?._id || '';

  const onSubmit = async (values: any) => {
    try {
      const formattedData = {
        ...values,
        user: userId,
        category: Array.isArray(values.category) ? values.category[0] : values.category,
        eventDate: values.eventDate?.format('YYYY-MM-DD'),
      };

      const res = await createEvent(formattedData).unwrap();
      if (res.success) {
        toast.success(res?.message);
        form.resetFields();
      }
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Add a new event</h2>
        <p className="text-gray-600">Keep your celebrations organized and never miss a special moment!</p>
      </div>
      <Form
        layout="vertical"
        form={form}
        name="add-event-form"
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
          rules={[{ required: true, message: 'Please select or enter a category!' }]}
          tooltip="Can't find a suitable category? Just type your own!"
        >
          <Select
            mode="tags"
            placeholder="Select or add a category"
            value={form.getFieldValue('category')}
            onChange={(val) => {
              const latest = val[val.length - 1]; // Grab the most recent entry
              form.setFieldsValue({ category: [latest] }); // Force single value array
            }}
            tokenSeparators={[',']}
            options={cat?.map((category: any) => ({
              value: category.eventCategory,
              label: category.eventCategory,
            }))}
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
