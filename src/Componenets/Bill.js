import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Bill = () => {
  const location = useLocation();
  const { totalAmount: totalPrice } = location.state || { totalAmount: 0 };

  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Payment Method:", paymentMethod);
    console.log("Selected Items:", selectedItems);
    console.log("Total Amount:", totalPrice);
  };

  useEffect(() => {
    // Fetch or calculate selected items based on your logic
    // Here, I'm setting it to an empty array for demonstration purposes
    setSelectedItems([]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Billing Page</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="paymentMethod"
              className="block text-gray-700 font-bold mb-2"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select payment method</option>
              <option value="credit_card">Credit Card</option>
              <option value="debit_card">Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-bold">Total Amount: ${totalPrice}</h3>
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bill;
