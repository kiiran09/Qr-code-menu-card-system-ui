import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Drinks = () => {
  const menuItems = [
    {
      name: "Masala Chai",
      description:
        "Simply put, Masala Chai is a tea preparation containing milk, sugar, and various spices.",
      price: "30",
      image:
        "https://carameltintedlife.com/wp-content/uploads/2021/01/Masala-Chai--500x500.jpg",
    },
    {
      name: "Lassi",
      description:
        "The Punjab region in India is famous for its rich and creamy Lassi preparations that include sweet yoghurt, dry fruits and spices.",
      price: "40",
      image:
        "https://tastedrecipes.com/wp-content/uploads/2022/08/Shahi-Lassi-1.jpg",
    },
    {
      name: "Jal-Jeera",
      description:
        "The drink has many ingredients like rock salt, coriander, mint, cumin, dry mango powder and pepper, which lend a spicy and tangy taste",
      price: "25",
      image:
        "https://www.cookingcarnival.com/wp-content/uploads/2021/10/Pineapple-jal-jeera.jpg",
    },
    {
      name: "Shikanji",
      description:
        "Although lemon is the key ingredient, Shikanji is prepared using slightly different recipes in different parts of India and contains a mix of sugar syrup, salt, and spices like coriander, cumin, pepper and carbonated water.",
      price: "30",
      image:
        "https://vanitascorner.com/wp-content/uploads/2023/03/Masala-Shikanji.jpg",
    },
    {
      name: "Thandai",
      description:
        "Thandai is a North Indian milk-based beverage that incorporates nuts, seeds, and various spices.",
      price: "50",
      image:
        "https://pipingpotcurry.com/wp-content/uploads/2022/03/Thandai-Recipe-for-Holi-Piping-Pot-Curry.jpg",
    },
    {
      name: "Coffee",
      description:
        "Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic",
      price: "30",
      image:
        "https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x375.png",
    },
    {
      name: "Bisleri",
      description: "Minral Water",
      price: "25",
      image:
        "https://i.pinimg.com/736x/85/45/67/85456788b030f0eb468174fe388d7c9a.jpg",
    },
  ];

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
    // Create an array of selected items
    const items = Object.entries(itemQuantities)
      .filter(([itemName, quantity]) => quantity > 0)
      .map(([itemName, quantity]) => ({
        name: itemName,
        quantity: quantity,
        price: menuItems.find((item) => item.name === itemName)?.price || "",
      }));

    navigate("/billingpage2", { state: { selectedItems: items } });
    console.log(items);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-thin pl-16 mt-4">
        Your Meal, Your Choice !
      </h2>
      <div className="grid grid-cols-1">
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
                <div>
                  <h3 className="text-lg font-medium mt-2 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-gray-700">Rs.{item.price}/-</p>
                  <div className="flex justify-between mt-4">
                    <input
                      type="number"
                      min="0"
                      value={itemQuantities[item.name] || ""}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.name,
                          parseInt(e.target.value)
                        )
                      }
                      className="rounded w-20 p-2 border border-gray-300"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
