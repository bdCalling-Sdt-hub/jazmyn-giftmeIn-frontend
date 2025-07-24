'use client';
import { useEffect } from 'react';
import { useGetUserProfileQuery } from '@/redux/apiSlices/authSlice';
import {
  useCreateEventMutation,
  useUpdateEventMutation,
  useGetEventCategoriesQuery,
} from '@/redux/apiSlices/eventSlice';
import { Form, Input, Select, DatePicker, Button, Spin, Switch } from 'antd';
import toast from 'react-hot-toast';
import dayjs from 'dayjs';

const AddEvent = ({ event, onClose }: { event?: any; onClose?: () => void }) => {
  const [form] = Form.useForm();

  const [createEvent] = useCreateEventMutation();
  const [updateEvent] = useUpdateEventMutation();
  const { data: categoryData, isLoading } = useGetEventCategoriesQuery(undefined);
  const { data: profileData, isLoading: isProfileLoading } = useGetUserProfileQuery(undefined);

  const isEditMode = Boolean(event);

  useEffect(() => {
    if (event) {
      form.setFieldsValue({
        eventName: event.eventName,
        phone: event.phone,
        address: event.address,
        category: [event.category],
        eventDate: dayjs(event.eventDate),
        RecipientName: event.RecipientName,
        preferences: event.preferences,
        status: event.status === 'active' || event.status === true,
      });
    } else {
      // Set default status to true (active) for new events
      form.setFieldsValue({
        status: true,
      });
    }
  }, [event, form]);

  if (isLoading || isProfileLoading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
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
        status: values.status ? 'active' : 'inactive',
      };

      const res = isEditMode
        ? await updateEvent({ id: event._id, ...formattedData }).unwrap()
        : await createEvent(formattedData).unwrap();

      toast.success(res?.message || `${isEditMode ? 'Updated' : 'Created'} successfully`);
      form.resetFields();
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">{isEditMode ? 'Edit Event' : 'Add a new event'}</h2>
        <p className="text-gray-600">
          {isEditMode
            ? 'Update event details and keep your schedule sharp.'
            : 'Keep your celebrations organized and never miss a special moment!'}
        </p>
      </div>
      <Form
        layout="vertical"
        form={form}
        name="event-form"
        requiredMark={false}
        initialValues={{ status: true }} // Default status for new events
        onFinish={onSubmit}
      >
        <Form.Item
          label="Event Name"
          name="eventName"
          rules={[{ required: true, message: 'Please input event name!' }]}
        >
          <Input placeholder="What's the occasion? (e.g., Sarah's Birthday)" />
        </Form.Item>

        <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please input contact number!' }]}>
          <Input placeholder="Valid phone number" />
        </Form.Item>

        <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please input address!' }]}>
          <Input placeholder="Event address or location" />
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
            onChange={(val) => {
              const latest = val[val.length - 1];
              form.setFieldsValue({ category: [latest] });
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
              { value: 'Electronics', label: 'Electronics' },
              { value: 'Fashion', label: 'Fashion' },
              { value: 'Books', label: 'Books' },
              { value: 'Home & Living', label: 'Home & Living' },
              { value: 'Sports', label: 'Sports' },
            ]}
          />
        </Form.Item>

        <Form.Item label="Status" name="status" valuePropName="checked">
          <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
        </Form.Item>

        <Form.Item>
          <Button style={{ width: '100%' }} type="primary" htmlType="submit">
            {isEditMode ? 'Update Event' : 'Save Event'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddEvent;
