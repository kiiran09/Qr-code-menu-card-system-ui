import React, { useState } from 'react';

const BillingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Payment Method:', paymentMethod);
    console.log('Total Amount:', totalAmount);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Billing Page</h2>
      <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block text-gray-700 font-bold mb-2">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="totalAmount" className="block text-gray-700 font-bold mb-2">
            Total Amount
          </label>
          <input
            type="number"
            id="totalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BillingPage;
