import React from "react";
import { FaMapLocation } from "react-icons/fa6";
import { FaMoneyBill1 } from "react-icons/fa6";
import { FaLocationPinLock } from "react-icons/fa6";
const WaitingForDriver = () => {
  return (
    <div className="flex flex-col items-center m-3">
      <h5 className="font-bold text-2xl ">Ride Details</h5>
      <div className="bg-green-500 h-1 w-full m-3"></div>
      <div className="flex justify-around">
        <div className="m-3">
          <h1 className="font-semibold text-lg m-2">Satish Ray</h1>
          <h2 className="font-semibold text-lg m-2">MREDF4320</h2>
          <h4 className="font-semibold text-lg m-2">Maruti suzuki , Desire</h4>
        </div>
        <img
          className="h-20 mr-4"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
          alt="car"
        />
      </div>
      <div>
        <div className="w-full ">
          <div className="font-semibold text-lg m-2 flex gap-2 ">
            <h2 className="font-bold p-2">
              <FaMapLocation />
            </h2>
            Pickup: XYZ street london 123r
          </div>
          <div className="font-semibold text-lg m-2 flex gap-2">
            <h2 className="font-bold p-2">
              <FaLocationPinLock />
            </h2>
            Drop : XCVHJIYF USA strest 5{" "}
          </div>
          <div className="font-semibold text-lg m-2 flex gap-2">
            <h2 className="font-bold p-2">
              <FaMoneyBill1 />
            </h2>
            Ride Fare : 156.78 rupees
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
