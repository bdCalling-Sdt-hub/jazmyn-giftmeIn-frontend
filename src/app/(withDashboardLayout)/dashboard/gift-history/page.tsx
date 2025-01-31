'use client';

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

const giftHistoryData: GiftHistoryData[] = [
      {
            key: '1',
            dated: '10 March, 2024',
            event: "Emma's Birthday",
            recipient: 'Emma Watson',
            gift: 'Personalized Gift',
            status: 'Delivered',
      },
      {
            key: '2',
            dated: '10 March, 2024',
            event: "Emma's Birthday",
            recipient: 'Emma Watson',
            gift: 'Personalized Gift',
            status: 'Delivered',
      },
      {
            key: '3',
            dated: '10 March, 2024',
            event: "Emma's Birthday",
            recipient: 'Emma Watson',
            gift: 'Personalized Gift',
            status: 'Delivered',
      },
      {
            key: '4',
            dated: '10 March, 2024',
            event: "Emma's Birthday",
            recipient: 'Emma Watson',
            gift: 'Personalized Gift',
            status: 'Delivered',
      },
      {
            key: '5',
            dated: '10 March, 2024',
            event: "Emma's Birthday",
            recipient: 'Emma Watson',
            gift: 'Personalized Gift',
            status: 'Delivered',
      },
];

const columns = [
      {
            title: 'Dated',
            dataIndex: 'dated',
            key: 'dated',
            className: 'font-medium',
      },
      {
            title: 'Event',
            dataIndex: 'event',
            key: 'event',
            className: 'font-medium',
      },
      {
            title: 'Recipient',
            dataIndex: 'recipient',
            key: 'recipient',
            className: 'font-medium',
      },
      {
            title: 'Gift',
            dataIndex: 'gift',
            key: 'gift',
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
      return (
            <div className=" space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Gift Balance Card */}
                        <div className="bg-[#FFF1F8] p-6 rounded-lg">
                              <div className="flex justify-between items-start">
                                    <div>
                                          <h3 className="text-[#FF1493] font-medium mb-2">Gift Balance</h3>
                                          <div className="text-3xl font-bold text-[#FF1493] mb-2">$150</div>
                                          <p className="text-sm text-gray-600">
                                                Grows monthly: 60% of your plan + $15 per add-on gift
                                          </p>
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
                                          <div className="text-3xl font-bold text-[#FF1493] mb-2">$50</div>
                                          <p className="text-sm text-gray-600">
                                                You've spent $50 this month on 2 thoughtful gifts.
                                          </p>
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
                                          <div className="text-3xl font-bold text-[#8B5CF6] mb-2">3</div>
                                          <p className="text-sm text-gray-600">
                                                Covers up to 3 standard gifts this season
                                          </p>
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
                              columns={columns}
                              dataSource={giftHistoryData}
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
