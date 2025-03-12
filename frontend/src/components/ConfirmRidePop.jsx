import React, { useState } from "react";

import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCarSide,
  FaClock,
  FaPhone,
  FaUser,
  FaLocationArrow,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const RiderDetailsPop = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const [otp, setOtp] = useState("");
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg w-80 mx-auto border border-gray-200">
      {/* Rider Info */}
      <h5 className="font-bold text-2xl text-center text-gray-800 mb-3">
        Confirm this ride to start
      </h5>
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
          <span className="font-medium text-gray-700">Drop: USA Street 5</span>
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

      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            type="text"
            value={otp}
            onChange={() => {
              setOtp(e.target.value);
            }}
            placeholder="Enter OTP"
            className="flex items-center gap-3 bg-gray-100 p-3 w-full mt-3 border border-gray-600 rounded-lg"
          />
          <Link
            to="/captain-riding"
            className="w-full mt-4 flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg font-semibold"
          >
            Confirm
          </Link>
          <button
            onClick={() => {
              props.setConfirmRidePop(false);
              props.setRidePopUp(false);
            }}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-lg font-semibold "
          >
            Decline
          </button>
        </form>
      </div>
    </div>
  );
};

export default RiderDetailsPop;
