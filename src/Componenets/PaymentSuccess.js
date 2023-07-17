import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-11 bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Payment Successful</h2>
        <p className="text-green-600 font-semibold mb-4">
          Thank you for your payment!
        </p>
        <p className="text-gray-700">
          Your payment has been successfully processed.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
