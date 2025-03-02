import Tab from '@/components/Reusable/Tab';
import CurrentPlan from './CurrentPlan';
import PaymentHistory from './PaymentHistory';
import PaymentMethod from './PaymentMethod';

const SubscriptionsPage = () => {
  return (
    <div>
      <Tab
        tabs={[
          {
            key: 'current-subscriptions',
            label: 'Current Subscriptions',
            content: <CurrentPlan />,
          },
          // {
          //   key: 'payment-history',
          //   label: 'Payment History',
          //   content: <PaymentHistory />,
          // },
          //     {
          //       key: 'payment-method',
          //       label: 'Payment Method',
          //       content: <PaymentMethod />,
          //     },
        ]}
      />
    </div>
  );
};

export default SubscriptionsPage;
