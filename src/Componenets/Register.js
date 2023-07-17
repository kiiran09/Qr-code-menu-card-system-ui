import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [customer, setCustomer] = useState({
    id: '',
    firstName: '',
    lastName: '',
    contactNo: '',
  });

  const navigate = useNavigate();

  const generateCustomerId = () => {
    // Replace with your logic for generating a unique customer ID
    // This could involve using a database, generating a random ID, or any other method
    // that suits your requirements.
    // Example: return someGeneratedId;
  };

  const handleRegister = () => {
    // Validate form data and perform registration logic

    // Assuming form data is valid
    const customerInfo = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      contactNo: customer.contactNo,
    };

    const customerId = generateCustomerId();

    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      id: customerId,
    }));

    navigate("/billingpage2", {
      state: {
        selectedItems: [],
        customerInfo: customerInfo,
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  return (
    <div className="flex max-w-2xl shadow border-b">
      <div className="px-3 py-8">
        <div className="font-thin text-2xl tracking-wider pl-20 text-purple-600">
          <h1>Register Yourself</h1>
        </div>
        <p className="font-thin tracking-wider pl-7">
          (Then you will be redirected to your page)
        </p>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-purple-500 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={customer.firstName}
            onChange={handleChange}
            className="h-10 w-96 border px-2 py-2 mt-2 hover:border-purple-600"
          />
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-purple-500 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={customer.lastName}
            onChange={handleChange}
            className="h-10 w-96 border px-2 py-2 mt-2"
          />
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-purple-500 text-sm font-normal">
            Contact No
          </label>
          <input
            type="text"
            name="contactNo"
            value={customer.contactNo}
            onChange={handleChange}
            className="h-10 w-96 border px-2 py-2 mt-2"
          />
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4">
          <Link
            to="/breakfast"
            className="rounded text-white font-semibold bg-green-600 hover:bg-green-800 py-2 px-6 mt-2"
            onClick={handleRegister}
          >
            Save
          </Link>

          <button
            className="rounded text-white font-semibold bg-red-600 hover:bg-red-800 py-2 px-6 mt-2"
            onClick={() => setCustomer({})}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
