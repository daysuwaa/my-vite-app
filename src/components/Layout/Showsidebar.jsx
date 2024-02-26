import React, { useState } from "react";
import dashboard from "../../assets/IoSpeedometerOutline.svg";
import approvals from "../../assets/FiCheckCircle.svg";
import payments from "../../assets/FiCreditCard.svg";
import analytics from "../../assets/FiPieChart.svg";
import users from "../../assets/FiUsers.svg";
import beneficiary from "../../assets/IoWalletOutline.svg";
import schedules from "../../assets/BsClock-2.svg";
import settings from "../../assets/BsGear.svg";
import chevron from "../../assets/chevron logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const ShowSidebar = () => {
  const locationObj = useLocation();
  const activeLink = locationObj.pathname;

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const renderLink = (link, text, imgSrc) => {
    const isActive = activeLink.startsWith(link);

    return (
      <Link to={link} className="grid">
        <div className=" items-center mx-1 space-x-12 ">
          <div
            className={`flex px-3 w-full md:w-[226px] h-[44px]  `}
            style={{
              borderRadius: isActive ? "4px" : "",
              border: isActive
                ? "1px solid rgba(255, 255, 255, 0.22)"
                : "1px solid rgba(255, 255, 255, 0)",
              background: isActive ? "#42257E" : "",
            }}
          >
            <img
              src={imgSrc}
              alt="icon"
              className="w-[18px] h-[18px] mt-3 mx-auto"
            />
            <p
              className={`flex-1 text-white tracking-wider text-sm leading-6 px-3  mt-2  md:block ${
                isActive ? "font-bold" : "font-light"
              }`}
            >
              {text}
            </p>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <>
      <div className="md:hidden top-0 left-0 fixed m-4 z-50">
        {showSidebar ? (
          <div className="fixed top-0 left-[49%] sm:left-[32%]  border-2 border-black transform -translate-x-1/2 m-4 z-50">
            <IoMdClose
              className="text-black cursor-pointer"
              size={24}
              onClick={toggleSidebar}
            />
          </div>
        ) : (
          <IoMenuOutline
            className="text-black cursor-pointer"
            size={24}
            onClick={toggleSidebar}
          />
        )}
      </div>

      {showSidebar && (
        <div className="sidebar md:hidden bg-[#1C065A] w-[49%] sm:w-[32%] text-white fixed top-0 left-0 bottom-0 z-40   transition-all duration-300 ease-in-out">
          <div className="py-6 flex justify-center items-center space-x-2">
            <img src={chevron} alt="logo" className="w-10 h-10 rounded-sm" />
            <p className="font-semibold text-[16px] leading-[24px]">
              Chevron Group
            </p>
          </div>

          <hr className="border-gray-600" />

          <div className="mt-4">
            {renderLink("/dashboard", "Dashboard", dashboard)}
            {renderLink("/payment", "Payments", payments)}
            {renderLink("/schedules", "Schedules", schedules)}
            {renderLink("/beneficiaries", "Beneficiaries", beneficiary)}
            {renderLink("/approvals", "Approvals", approvals)}
            {renderLink("/users", "Users", users)}
            {renderLink("/analytics", "Analytics", analytics)}
            {renderLink("/settings", "Settings", settings)}
          </div>
        </div>
      )}
    </>
  );
};

export default ShowSidebar;
