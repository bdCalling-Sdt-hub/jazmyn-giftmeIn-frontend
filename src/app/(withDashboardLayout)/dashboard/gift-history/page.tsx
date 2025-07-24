'use client';

import { useGetUserProfileQuery } from '@/redux/apiSlices/authSlice';
import { useGetCurrentSubscriptionQuery } from '@/redux/apiSlices/cartSlice';
import { useGetGiftHistoryQuery } from '@/redux/apiSlices/productSlice';
import { Input, Table } from 'antd';
import { SearchIcon } from 'lucide-react';
import { CreditCard, LayoutList, Layers } from 'lucide-react';

interface GiftHistoryData {
  key: string;
  dated: string;
  event: string;
  recipient: string;
  gift: string;
  status: string;
}

const giftHistoryData: GiftHistoryData[] = [];

const columns = [
  {
    title: 'Serial',
    dataIndex: 'serial',
    key: 'serial',
    render: (_: any, record: any, index: number) => index + 1,
    className: 'font-medium',
  },
  {
    title: 'Event',
    dataIndex: ['event', 'eventName'],
    key: 'event',
    className: 'font-medium',
  },
  {
    title: 'Recipient',
    dataIndex: ['event', 'RecipientName'],
    key: 'recipient',
    className: 'font-medium',
  },
  {
    title: 'Gift',
    dataIndex: 'product',
    key: 'product',
    render: (_: any, record: any) => (
      <span className="font-medium">{record?.product?.map((item: any) => item.productName).join(', ')}</span>
    ),
    className: 'font-medium',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => <span className="text-green-500 font-medium">{status}</span>,
  },
];

const GiftHistoryPage = () => {
  const { data: profile, isLoading: isProfileLoading } = useGetUserProfileQuery(undefined);
  const { data: currentSubscription, isLoading } = useGetCurrentSubscriptionQuery(undefined);
  const { data: giftHistory, isLoading: isGiftHistoryLoading } = useGetGiftHistoryQuery(undefined);

  if (isLoading || isProfileLoading || isGiftHistoryLoading) return <div>Loading...</div>;

  const userData = profile?.data;
  const giftHistoryData = giftHistory?.data;
  console.log(giftHistoryData);

  const subscription = currentSubscription?.data?.find((sub: any) => sub?.user?._id === userData?._id);
  // console.log(subscription);

  return (
    <div className=" space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Gift Balance Card */}
        <div className="bg-[#FFF1F8] p-6 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[#FF1493] font-medium mb-2">Gift Balance</h3>
              <div className="text-3xl font-bold text-[#FF1493] mb-2">${subscription?.balance || 0}</div>
              <p className="text-sm text-gray-600">50% of your subscription balance was added to your gift balance</p>
            </div>
            <div className="bg-[#FF1493] p-3 rounded-full">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Spent Card */}
        <div className="bg-[#FFF1F8] p-6 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[#FF1493] font-medium mb-2">Spent</h3>
              <div className="text-3xl font-bold text-[#FF1493] mb-2">${subscription?.totalSpentPrice || 0}</div>
              <p className="text-sm text-gray-600">You've spent $50 this month on 2 thoughtful gifts.</p>
            </div>
            <div className="bg-[#FF1493] p-3 rounded-full">
              <LayoutList className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Gifting Potential Card */}
        <div className="bg-[#F8F1FF] p-6 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[#8B5CF6] font-medium mb-2">Gifting Potential</h3>
              <div className="text-3xl font-bold text-[#8B5CF6] mb-2">{subscription?.affordableProductCount || 0}</div>
              <p className="text-sm text-gray-600">Covers up to 3 standard gifts this season</p>
            </div>
            <div className="bg-[#8B5CF6] p-3 rounded-full">
              <Layers className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Header with Search */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gift History</h2>
        <div className="relative w-[300px]">
          <Input
            placeholder="Search..."
            className="pl-10 h-10 rounded-lg"
            suffix={<SearchIcon className="w-5 h-5 text-gray-400" />}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <Table
          scroll={{ x: true }}
          columns={columns}
          dataSource={giftHistoryData}
          rowKey="_id"
          pagination={{
            pageSize: 8,
            className: 'p-4',
          }}
          className="rounded-lg overflow-hidden"
        />
      </div>
    </div>
  );
};

export default GiftHistoryPage;
