'use client';

import Confetti from 'react-confetti';

const PaymentSuccessPage = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Confetti width={1900} height={990} />
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50">
        <h1 className="text-3xl font-bold text-pink-600">Payment Successful!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Thank you for your order. Your payment has been processed successfully.
        </p>
        <p className="mt-2 text-md text-gray-600">
          You will receive a confirmation email shortly with the details of your transaction.
        </p>

        <button className="mt-8 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-300">
          <a href="/">Go to Home</a>
        </button>
      </div>
    </>
  );
};

export default PaymentSuccessPage;
