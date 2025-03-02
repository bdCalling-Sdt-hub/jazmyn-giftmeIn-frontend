'use client';

import { useGetOrdersQuery } from '@/redux/apiSlices/cartSlice';
import { Input, Table, Tooltip } from 'antd';
import { Eye, SearchIcon } from 'lucide-react';
import moment from 'moment';

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
    title: 'Serial No.',
    dataIndex: 'serialNo',
    key: 'serialNo',
    className: 'font-medium',
    render: (text: string, record: OrderHistoryData, index: number) => <span>{index + 1}</span>,
  },
  {
    title: 'Order Id',
    dataIndex: '_id',
    key: '_id',
    className: 'font-medium',
    render: (text: string) => <Tooltip title={text}>{text?.slice(0, 8) + '...'}</Tooltip>,
  },

  {
    title: 'Product',
    dataIndex: 'products',
    key: 'products',
    className: 'font-medium',
    render: (_: any, record: any) => <span>{record?.products?.map((product: any) => product?.name)?.join(', ')}</span>,
  },
  {
    title: 'Total',
    dataIndex: 'price',
    key: 'price',
    className: 'font-medium',
    render: (_: any, record: any) => (
      <span>
        {record?.products?.reduce((acc: number, product: any) => acc + product?.price * product?.quantity, 0)}
      </span>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    className: 'font-medium w-[17%]',
    render: (text: string) => <span>{moment(text).format('DD MMM, YYYY hh:mm A')}</span>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => <span className="text-green-500 font-medium">{status}</span>,
  },
  //   {
  //     title: 'Action',
  //     key: 'action',
  //     render: () => (
  //       <button className="hover:text-primary">
  //         <Eye className="w-5 h-5" />
  //       </button>
  //     ),
  //   },
];

const OrderHistoryPage = () => {
  const { data: getOrders, isLoading } = useGetOrdersQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  const orders = getOrders?.data
    ?.slice()
    .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  console.log(orders);

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
          scroll={{ x: true }}
          columns={columns}
          dataSource={orders}
          rowKey="_id"
          pagination={{
            pageSize: 8,
            className: 'p-4',
          }}
          className="rounded-lg overflow-hidden"
        />
      </div>

      {/* <div className="flex justify-center">
        <button className="bg-primary text-white px-8 py-2 rounded-full hover:opacity-90 transition">View All</button>
      </div> */}
    </div>
  );
};

export default OrderHistoryPage;
