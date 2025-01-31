'use client';
import { Table } from 'antd';

interface PaymentData {
      key: string;
      date: string;
      planName: string;
      amount: string;
      billingCycle: string;
      status: string;
}

const paymentData: PaymentData[] = [
      {
            key: '1',
            date: 'Jan 1, 2024',
            planName: 'Little Extra',
            amount: '$30',
            billingCycle: 'Monthly',
            status: 'Paid',
      },
      {
            key: '2',
            date: 'Jan 1, 2024',
            planName: 'Little Extra',
            amount: '$30',
            billingCycle: 'Monthly',
            status: 'Paid',
      },
      {
            key: '3',
            date: 'Jan 1, 2024',
            planName: 'Little Extra',
            amount: '$30',
            billingCycle: 'Monthly',
            status: 'Paid',
      },
      {
            key: '4',
            date: 'Jan 1, 2024',
            planName: 'Little Extra',
            amount: '$30',
            billingCycle: 'Monthly',
            status: 'Paid',
      },
      {
            key: '5',
            date: 'Jan 1, 2024',
            planName: 'Little Extra',
            amount: '$30',
            billingCycle: 'Monthly',
            status: 'Paid',
      },
];

const columns = [
      {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            className: 'font-medium',
      },
      {
            title: 'Plan Name',
            dataIndex: 'planName',
            key: 'planName',
            className: 'font-medium',
      },
      {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            className: 'font-medium',
      },
      {
            title: 'Billing Cycle',
            dataIndex: 'billingCycle',
            key: 'billingCycle',
            className: 'font-medium',
      },
      {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => <span className="text-green-500 font-medium">{status}</span>,
      },
];

const PaymentHistory = () => {
      return (
            <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Payment History</h2>

                  <div className="bg-white rounded-lg border">
                        <Table
                              scroll={{ x: true }}
                              columns={columns}
                              dataSource={paymentData}
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

export default PaymentHistory;
