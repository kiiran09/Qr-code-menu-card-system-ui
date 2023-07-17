import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Roti = () => {
  const menuItems = [
    {
      name: "Phulka",
      description:
        "Made with wheat flour dough, phulkas or rotis make for a very healthy meal with high amounts of nutrients and fiber and low fat.",
      price: "15",
      image:
        "https://5.imimg.com/data5/PX/EF/MY-34988579/phulka-chapati-500x500.jpg",
    },
    {
      name: "Chapati",
      description:
        " Usually thinner than the phulka roti, chapatis generally do not encompass the puff up characteristic which means they are as flat breads as they possibly can be. Also made from wheat flour",
      price: "15",
      image:
        "https://recipes.timesofindia.com/thumb/61203720.cms?width=1200&height=900",
    },
    {
      name: "Paratha",
      description:
        "A chapati that includes oil or ghee in its cooking mode- that’s what essentially the paratha happens to be.",
      price: "185",
      image:
        "https://media.dinedelicious.in/wp-content/uploads/2020/09/Aloo-Paratha_.jpg",
    },
    {
      name: "Thalipeeth",
      description:
        " thalipeeth makes use of an assortment of different flours, both of grains and legumes. Apart from wheat flour, rice, bajra, jowar as well as chana and urad dal flours",
      price: "110",
      image:
        "https://smithakalluraya.com/wp-content/uploads/2014/03/thalipeeth-recipe.jpg",
    },
    {
      name: "Naan",
      description:
        "Naan is a quintessential inclusion. Either plain or stuffed, naan goes best with butter chicken and other similar gravy based dishes.",
      price: "79",
      image:
        "https://www.thespruceeats.com/thmb/MReCj8olqrCsPaGvikesPJie02U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/naan-leavened-indian-flatbread-1957348-final-08-116a2e523f6e4ee693b1a9655784d9b9.jpg",
    },
    {
      name: "Kulcha",
      description:
        "Soft and fluffy, plain or stuffed, kulchas- Amritsari kulchas to be specific, are made of all purpose flour and is a mildly leavened flatbread that still is crusty despite its airy texture",
      price: "302",
      image:
        "https://www.cookingcarnival.com/wp-content/uploads/2015/07/Paneer-kulcha-4.jpg",
    },
    {
      name: "Poori",
      description:
        "A very Indian food, one that is made of maida and deep fried after being rolled out, pooris are the epitome of the simplest yet the most sinful comfort food there ever could be.",
      price: "160",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fluffy_Poori.JPG/800px-Fluffy_Poori.JPG",
    },
    {
      name: "Bhatura",
      description:
        "The Punjabi variant of the puri, Bhaturas are larger and flatter and therefore crispier than the luchis. Made of a refined flour dough that is bind by curd and water, deep fried bhatures",
      price: "50",
      image:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2010/06/bhatura-recipe-1a.jpg",
    },
    {
      name: "Khamiri Roti",
      description:
        "khamiri rotis are extremely soft and spongy types of the Indian bread that go well with rich, dense curries",
      price: "20",
      image:
        "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/1442316033wVlfhQOCDd.jpeg",
    },
    {
      name: "Makki ki roti",
      description:
        "Makki ki roti is made with maize flour or makki atta, also called cornmeal and is very distinctly an eponymous fit as well.",
      price: "30",
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2018/12/Makki-Ki-Roti-Recipe.jpg",
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
      <h2 className="font-thin text-2xl mx-14 py-4">
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
              <p className=" text-gray-600 mb-2">{item.description}</p>
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

export default Roti;
