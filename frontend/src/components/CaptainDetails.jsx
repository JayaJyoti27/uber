import React, { useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { HiBanknotes } from "react-icons/hi2";
import { IoIosTime, IoIosSpeedometer } from "react-icons/io";
const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100" // Placeholder profile image
            alt="Driver"
            className="w-14 h-14 rounded-full border-2 border-gray-300"
          />
          <div>
            <h5 className="text-lg font-semibold text-gray-800">
              {captain.fullName.firstName + " " + captain.fullName.lastName}
            </h5>
            <p className="text-sm text-gray-500"></p>
          </div>
        </div>
        <div className="text-right">
          <h4 className="text-xl font-bold text-green-600">₹295.65</h4>
          <p className="text-sm text-gray-500">Earned Today</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-between mt-6 bg-yellow-300 rounded-xl p-4">
        <StatCard
          Icon={IoIosTime}
          value="10.2"
          label="Hours Online"
          color="text-blue-500"
        />
        <StatCard
          Icon={IoIosSpeedometer}
          value="42 km"
          label="Distance Covered"
          color="text-yellow-500"
        />
        <StatCard
          Icon={HiBanknotes}
          value="₹5,420"
          label="Total Earnings"
          color="text-green-500"
        />
      </div>
    </div>
  );
};
const StatCard = ({ Icon, value, label, color }) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className={`text-4xl ${color}`} />
      <h5 className="text-lg font-semibold text-gray-800">{value}</h5>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
};

export default CaptainDetails;
