import React from 'react';
import { Link } from 'react-router-dom';

const HomePage2 = () => {
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">Welcome to My Project</h3>

      <p className="text-lg mb-8">
        This is a sample homepage for your project. You can customize it as per your requirements.
      </p>

      <div className="flex space-x-4">
        <Link to="/register" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Register
        </Link>

        <Link to="/billingpage2" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Bill
        </Link>
      </div>
    </div>
  );
};

export default HomePage2;
