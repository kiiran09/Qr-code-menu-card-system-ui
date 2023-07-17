import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const BillingPage2 = () => {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  const customerInfo = location.state?.customerInfo || {};

  let totalPrice = 0;

  if (selectedItems.length > 0) {
    totalPrice = selectedItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);  
  }

  const navigate = useNavigate();

  const handlePayBill = () => {
    navigate("/paymentsuccess", { state: { totalAmount: totalPrice } });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="pl-36 font-thin text-2xl mt-3 mb-3 mx-auto">Your Bill</h2>

        <p className="font-serif font-semibold pl-3">
        Name: {customerInfo.firstName} {customerInfo.lastName}
      </p>
      <p className="font-serif font-semibold pl-3">
        Contact No.: {customerInfo.contactNo}
      </p>

      {selectedItems.length === 0 ? (
        <div>
          <p className="pl-36 font-thin mt-24">No Items Selected</p>
        </div>
      ) : (
        <table className="max-w-4xl border-collapse mt-8 mx-3">
          <thead className="font-semibold">
            <tr>
              <th className="border px-4 py-2">Item Name</th>
              <th className="border px-4 py-2">Item Quantity</th>
              <th className="border px-4 py-2">Item Price</th>
              <th className="border px-4 py-2">Total Price</th>
            </tr>
          </thead>

          <tbody className="font-serif">
            {selectedItems.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">{item.price}</td>
                <td className="border px-4 py-2">
                  {item.price * item.quantity}
                </td>
              </tr>
            ))}

            <tr>
              <td className="border px-4 py-2 font-semibold">Total</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">{totalPrice}</td>
            </tr>
          </tbody>
        </table>
      )}

      <button
        className="bg-purple-500 rounded-sm mx-6 justify-center mt-3 px-2 text-white"
        onClick={handlePayBill}
      >
        Pay Bill
      </button>
    </div>
  );
};

export default BillingPage2;
