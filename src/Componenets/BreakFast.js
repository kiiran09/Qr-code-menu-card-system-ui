import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const BreakFast = () => {
  const menuItems = [
    {
      name: "Poha",
      description: "Enjoy a delicious breakfast to start your day.",
      price: "30",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Poha-Recipe-500x500.jpg",
    },
    {
      name: "Idli Sambar",
      description: "Delicious and fulfilling lunch options.",
      price: "40",
      image:
        "https://shwetainthekitchen.com/wp-content/uploads/2022/01/Idli-Sambar-500x500.jpg",
    },
    {
      name: "Dosa",
      description: "A variety of dinner options to satisfy your appetite.",
      price: "55",
      image:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/dosa-recipe-3.jpg",
    },
    {
      name: "Upma",
      description: "Indulge in our sweet and delightful desserts.",
      price: "20",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/upma-recipe.jpg",
    },
    {
      name: "Allo Paratha",
      description: "Enjoy a delicious breakfast to start your day.",
      price: "50",
      image:
        "https://static.toiimg.com/thumb/53109843.cms?imgsize=244340&width=800&height=800",
    },
    {
      name: "Medu Vada",
      description: "Delicious and fulfilling lunch options.",
      price: "40",
      image:
        "https://im.rediff.com/travel-living/2015/apr/144302c33c547d28928409d18e3cf130093b56e8.jpg",
    },
    {
      name: "Sabudana Khichadi",
      description: "A variety of dinner options to satisfy your appetite.",
      price: "50",
      image:
        "https://www.indianveggiedelight.com/wp-content/uploads/2021/10/sabudana-khichdi-1-featured.jpg",
    },
    {
      name: "Thepla",
      description: "Indulge in our sweet and delightful desserts.",
      price: "30",
      image:
        "https://arpitasfoodpod.com/wp-content/uploads/2021/11/ABD07939-1F47-4174-9B1D-F9FD34D32981.jpeg",
    },
  ];

  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    contactNo: "",
  });

  const [itemQuantities, setItemQuantities] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);

  const handleQuantityChange = (itemName, quantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: quantity,
    }));
  };

  useEffect(() => {
    setSelectedItems(menuItems.filter((item) => itemQuantities[item.name] > 0));
  }, [itemQuantities]);

  const navigate = useNavigate();

  const handleOrder = () => {
    const items = Object.entries(itemQuantities)
      .filter(([itemName, quantity]) => quantity > 0)
      .map(([itemName, quantity]) => ({
        name: itemName,
        quantity: quantity,
        price: menuItems.find((item) => item.name === itemName)?.price || "",
      }));

    navigate("/billingpage2", {
      state: {
        selectedItems: items,
        customerInfo: {
          firstName: customer.firstName,
          lastName: customer.lastName,
          contactNo: customer.contactNo,
        },
      },
    });

    console.log(items);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-thin mb-4 mt-3 px-16">
        Your Meal, Your Choice !
      </h2>
      
      <div className="grid grid-cols-1 gap-4">
        {menuItems.map((item, index) => (
          <div key={index} className="relative">
            <div className="border-r-4 border-gray-200 absolute h-full top-0 left-6"></div>
            <div className="bg-white shadow-md rounded-lg p-6 pl-14">
              <div className="mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-md w-full"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-gray-700">Rs.{item.price}/-</p>
              <div className="flex justify-between mt-4">
                <input
                  type="number"
                  min="0"
                  value={itemQuantities[item.name] || ""}
                  onChange={(e) =>
                    handleQuantityChange(item.name, parseInt(e.target.value))
                  }
                  className="w-20 p-2 border border-gray-300 rounded"
                />
                <button
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                  onClick={handleOrder}
                >
                  <Link
                    to={{
                      pathname: "/billingpage2",
                      state: { selectedItems: selectedItems },
                    }}
                    className="text-white"
                  >
                    Order
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreakFast;
