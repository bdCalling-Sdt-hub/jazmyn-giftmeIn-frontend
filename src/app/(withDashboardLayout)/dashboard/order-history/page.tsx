'use client';

import { Input, Table } from 'antd';
import { Eye, SearchIcon } from 'lucide-react';

interface OrderHistoryData {
      key: string;
      orderNo: string;
      date: string;
      product: string;
      total: string;
      status: string;
}

const orderHistoryData: OrderHistoryData[] = [
      {
            key: '1',
            orderNo: '#28VR5K59',
            date: '10 March, 2024',
            product: 'Personalized Jewelry Box',
            total: '$50',
            status: 'Delivered',
      },
      {
            key: '2',
            orderNo: '#28VR5K59',
            date: '10 March, 2024',
            product: 'Personalized Jewelry Box',
            total: '$50',
            status: 'Delivered',
      },
      {
            key: '3',
            orderNo: '#28VR5K59',
            date: '10 March, 2024',
            product: 'Personalized Jewelry Box',
            total: '$50',
            status: 'Delivered',
      },
      {
            key: '4',
            orderNo: '#28VR5K59',
            date: '10 March, 2024',
            product: 'Personalized Jewelry Box',
            total: '$50',
            status: 'Delivered',
      },
      {
            key: '5',
            orderNo: '#28VR5K59',
            date: '10 March, 2024',
            product: 'Personalized Jewelry Box',
            total: '$50',
            status: 'Delivered',
      },
];

const columns = [
      {
            title: '#Order No',
            dataIndex: 'orderNo',
            key: 'orderNo',
            className: 'font-medium',
      },
      {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            className: 'font-medium',
      },
      {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
            className: 'font-medium',
      },
      {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            className: 'font-medium',
      },
      {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => <span className="text-green-500 font-medium">{status}</span>,
      },
      {
            title: 'Action',
            key: 'action',
            render: () => (
                  <button className="hover:text-primary">
                        <Eye className="w-5 h-5" />
                  </button>
            ),
      },
];

const OrderHistoryPage = () => {
      return (
            <div className=" space-y-6">
                  <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Order History</h2>
                        <div className="relative w-[300px]">
                              <Input
                                    placeholder="Search..."
                                    className="pl-10 h-10 rounded-lg"
                                    suffix={<SearchIcon className="w-5 h-5 text-gray-400" />}
                              />
                        </div>
                  </div>

                  <div className="bg-white rounded-lg shadow">
                        <Table
                              columns={columns}
                              dataSource={orderHistoryData}
                              pagination={{
                                    pageSize: 8,
                                    className: 'p-4',
                              }}
                              className="rounded-lg overflow-hidden"
                        />
                  </div>

                  <div className="flex justify-center">
                        <button className="bg-primary text-white px-8 py-2 rounded-full hover:opacity-90 transition">
                              View All
                        </button>
                  </div>
            </div>
      );
};

export default OrderHistoryPage;
