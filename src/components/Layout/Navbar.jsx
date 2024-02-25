import React from "react";
import ShowSidebar from "../Layout/Showsidebar";
import man from "../../assets/image 1.png";
import arrowdown from "../../assets/FiChevronDown.svg";

const Navbar = ({ title }) => {
  return (
    <div className="flex items-center px-12  md:px-[32px] py-[18px] justify-between h-[60px] bg-white">
      <ShowSidebar className="" />
      <p className="font-semibold tracking-wide ">{title}</p>
      <div className="flex items-center">
        <img src={man} alt="arrow" className="w-[24px] h-[24px] mr-3" />
        <img src={arrowdown} alt="man" className="w-[14px] h-[14px]" />
      </div>
    </div>
  );
};

export default Navbar;
