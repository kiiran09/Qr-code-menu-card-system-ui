import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dinner = () => {
  const menuItems = [
    {
      name: "Dum Aloo lakhnawi",
      description:
        "Your family will thank you for this absolutely fantastic bowl of dum aloo cooked Lakhnawi style. Take some potatoes, crumbled paneer, kasuri methi, butter, onions and some ghee.",
      price: "180",
      image:
        "https://static.punjabkesari.in/multimedia/10_12_261837785dum-aloo3.jpg",
    },
    {
      name: "Dum Paneer Kali Mirch",
      description:
        "with cinnamon, fried onions, black pepper, ginger, garlic and yogurt to make this gorgeous and fragrant curry.",
      price: "270",
      image:
        "https://fingersareforburning.com/wp-content/uploads/2021/03/IMG-1521-2.jpg",
    },
    {
      name: "Makhmali kofte",
      description:
        "A rich gravy made of khus khus, coconut and milk that tastes best with koftas made from khoya. This velvety and creamy recipe will leave you licking your fingers.",
      price: "350",
      image:
        "https://www.nextbihar.com/wp-content/uploads/2022/06/velvet-koftas.png",
    },
    {
      name: "Butter Chiken",
      description:
        "The quintessential chicken curry has become popular around the world, with Indian food lovers opting for butter chicken in restaurants around the world.",
      price: "415",
      image:
        "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg",
    },
    {
      name: "Paneer kolhapuri",
      description:
        "Tender paneer chunks are cooked in kohlapuri masala, tomatoes and hing to give this hot and spicy gravy. Indulge in this spicy paneer kolhapuri this weekend by pairing it with some delicious bhakri or tandoori naan.",
      price: "310",
      image:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2016/12/paneer-kolhapuri-recipe-2-1.jpg",
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
      name: "Chiken Bukhara",
      description:
        "Exotic chicken curry made with juicy chicken pieces simmered in luscious gravy of tomato puree followed by variety of aromatic spices",
      price: "210",
      image:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shaheen_Ali/Alu_Bhukhara_Murgh__Chicken_cooked_with_Indian_Plums.jpg",
    },
    {
      name: "Chana Masala",
      description:
        "This Chana Masala, also known as Chole Masala, is an authentic North Indian style curry made with white chickpeas, freshly powdered spices, onions, tomatoes and herbs.",
      price: "225",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?quality=90&resize=556,505",
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
              <div className=" flex justify-between mt-4">
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

export default Dinner;
