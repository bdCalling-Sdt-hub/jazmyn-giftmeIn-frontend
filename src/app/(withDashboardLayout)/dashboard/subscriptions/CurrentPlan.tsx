'use client';

import { useGetCurrentSubscriptionQuery } from '@/redux/apiSlices/cartSlice';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { PiCrown } from 'react-icons/pi';

const CurrentPlan = () => {
  const { data: currentSubscription, isLoading } = useGetCurrentSubscriptionQuery(undefined);

  if (isLoading) return <div>Loading...</div>;

  const subscription = currentSubscription?.data[0];
  // console.log(subscription);

  return (
    <div className="bg-white border rounded-lg p-8 max-w-md  text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-[#FFF1F8] p-4 rounded-full">
          <PiCrown className="size-12 text-primary" />
        </div>
      </div>

      <div className="mb-2">
        <div className="h-2 bg-gray-100 rounded-full">
          <div className="h-full w-[80%] bg-primary rounded-full"></div>
        </div>
      </div>

      {/* <p className="text-gray-600 mb-6">{subscription?.giftSentThisYear || 0} Gifts Sent This Year</p> */}
      <h2 className="text-xl font-semibold mb-6">Your Current Subscription Plan</h2>

      <div className="bg-[#FFF1F8] border border-primary rounded-lg p-4 mb-6">
        {subscription ? (
          <div className="flex items-start gap-3">
            <div className="bg-primary rounded-full p-1 mt-1">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg">{subscription?.package?.name}</h3>
              <p className="text-gray-600">{subscription?.package?.description}</p>
              <p className="text-primary font-semibold text-lg mt-1">
                ${subscription?.amountPaid} / {subscription?.package?.duration}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center text-pink-600">
            <p>No subscription found.</p>
          </div>
        )}
      </div>

      <Link href="/subscriptions">
        <button className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition">
          Change Plan
        </button>
      </Link>
    </div>
  );
};

export default CurrentPlan;
