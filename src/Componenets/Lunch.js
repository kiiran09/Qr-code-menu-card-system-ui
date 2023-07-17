import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Lunch = () => {
  const menuItems = [
    {
      name: "Masala Bhendi",
      description:
        "A delicious dish made with freshly bought okra. Grab some mustard oil, cumin seeds, fennel seeds, finely-chopped onions, ginger and a pinch of amchoor. We promise you'll make this recipe a regular affair in your weekly menu.",
      price: "230",
      image:
        "https://www.cookoverheels.com/wp-content/uploads/2020/01/Dry-Bhindi-Masala-in-a-bowl.jpg",
    },
    {
      name: "Chana Kulcha",
      description:
        "The quintessential chana kulcha  needs only a few ingredients - cumin powder, ginger, coriander powder, carom powder and some mango powder, which is what gives the chana it's sour and tangy taste.",
      price: "120",
      image:
        "https://www.nehascookbook.com/wp-content/uploads/2022/09/Pindi-chole-kulcha-WS-1-500x500.jpg",
    },
    {
      name: "Shahi Egg Curry",
      description:
        "Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander.",
      price: "250",
      image:
        "https://www.whiskaffair.com/wp-content/uploads/2019/04/Kolhapuri-Egg-Curry-2-3.jpg",
    },
    {
      name: "Paneer Achaari",
      description:
        "Mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao.",
      price: "150",
      image:
        "https://www.whiskaffair.com/wp-content/uploads/2015/04/Achari-Paneer-5.jpg",
    },
    {
      name: "Dal Makhani",
      description:
        "A luscious, creamy dal recipe loaded with butter, this can be served with naan or paratha or accompany with some cooked rice.",
      price: "330",
      image:
        "https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog.jpg",
    },
    {
      name: "Punjabi Dal Tadaka",
      description:
        "This Punjabi dal tadka is a mouth-watering dish served with roti, naan or rice. Any north Indian menu is incomplete without this tadka dal.",
      price: "170",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Dal-Tadka-500x500.jpg",
    },
    {
      name: "Kashmiri Rajma",
      description:
        "Rajma is a popular Indian curry made with kidney beans. This recipe is made with aroma of Kashmiri garam masala and a host of other spices.",
      price: "180",
      image:
        "https://www.whiskaffair.com/wp-content/uploads/2017/11/Kashmiri-Rajma-3.jpg",
    },
    {
      name: "Paneer Kofta",
      description:
        "This paneer kofta is stuffed with aromatic goodness of raisins and khoya along with various spices, deep fried and simmering hot in a creamy gravy.",
      price: "225",
      image:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/malai-kofta-2.jpg",
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
      <h2 className="text-2xl font-thin mb-4 mt-3 px-16 text-purple-600">
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

export default Lunch;
