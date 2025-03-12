import React from "react";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaUser,
  FaLocationArrow,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const FinishRide = (props) => {
  return (
    <div className="w-full relative h-full  flex items-center justify-center bg-white shadow-lg rounded-lg p-8 md:max-w-md md:mx-auto">
      <h4
        onClick={() => props.setFinalRide(false)}
        className="absolute top-5 left-3 font-extrabold text-3xl"
      >
        <IoIosArrowBack />
      </h4>

      <div className="w-full">
        <h5 className="font-bold text-2xl text-center text-gray-800 mb-3">
          Finish this ride
        </h5>

        {/* Rider Info */}
        <div className="mb-4 flex items-center bg-yellow-300 p-4 rounded-xl">
          <img
            src="https://i.pravatar.cc/100"
            alt="Rider"
            className="w-16 h-16 rounded-full border-2 border-gray-300"
          />
          <div className="ml-4">
            <h2 className="text-lg font-bold">Ramesh Kumar</h2>
            <p className="text-gray-700 text-sm">⭐ 4.8 | 2.2 KM Away</p>
          </div>
        </div>

        {/* Driver Info */}
        <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
          <FaUser className="text-blue-600 text-xl" />
          <span className="font-medium text-gray-700">Rider: Suresh Patel</span>
        </div>

        {/* Ride Details */}
        <div className="mt-3 space-y-3">
          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <span className="font-medium text-gray-700">
              Pickup: XYZ Street, London
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
            <FaLocationArrow className="text-red-600 text-xl" />
            <span className="font-medium text-gray-700">
              Drop: USA Street 5
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
            <FaClock className="text-orange-500 text-xl" />
            <span className="font-medium text-gray-700">ETA: 5 min</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
            <FaMoneyBillWave className="text-green-600 text-xl" />
            <span className="font-medium text-gray-700">Fare: ₹156.78</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5">
          <Link
            to="/captain-riding"
            className="w-full block text-center bg-green-600 text-white py-3 rounded-lg font-semibold"
          >
            Complete Ride
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
