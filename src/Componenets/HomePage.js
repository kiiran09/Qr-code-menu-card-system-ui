import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className=" grid grid-cols-1 gap-4">
      <h1 className="font-serif text-2xl mx-auto py-3 text-purple-400">Welcome!!!</h1>

      <div className="flex max-w-2xl mx-auto shadow border-cyan-700 my-10 h-16">
        <div className="py-8"></div>
        <div className="font-thin text-2xl tracking-wider text-center py-3 px-16">
          <Link to="/register" className="text-purple-400">
            Breakfast
          </Link>
        </div>
      </div>

      <div className="flex max-w-2xl mx-auto shadow border-b my-10 h-16">
        <div className="py-8"></div>
        <div className="font-thin text-2xl tracking-wider text-center py-3 px-16">
          <Link
            to={{
              pathname: "/lunch"
            }}
            className="text-purple-400"
            >
              Lunch
            </Link>
        </div>
      </div>

      <div className="flex max-w-2xl mx-auto shadow border-b my-10 h-16">
        <div className="py-8"></div>
        <div className="font-thin text-2xl tracking-wider text-center py-3 px-16">
        <Link
            to={{
              pathname: "/dinner"
            }}
            className="text-purple-400"
            >
              Dinner
            </Link>
        </div>
      </div>

      <div className="flex max-w-2xl mx-auto shadow border-b my-10 h-16">
        <div className="py-8"></div>
        <div className="font-thin text-2xl tracking-wider text-center py-3 px-16">
        <Link
            to={{
              pathname: "/roti"
            }}
            className="text-purple-400"
            >
              Roti
            </Link>
        </div>
      </div>

      <div className="flex max-w-2xl mx-auto shadow border-b my-10 h-16">
        <div className="py-8"></div>
        <div className="font-thin text-2xl tracking-wider text-center py-3 px-16">
        <Link
            to={{
              pathname: "/bevarages"
            }}
            className="text-purple-400"
            >
              Bevarages
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
