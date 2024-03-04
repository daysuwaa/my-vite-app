import React from "react";
import Navbar from "../../components/Layout/Navbar";
import { Link } from "react-router-dom";

const RecentsPayment = () => {
  return (
    <div>
      <Navbar title="Payment" />

      <Link to="/payment/details">
        <div className="flex mx-3 md:mx-7 my-5 items-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="FiChevronLeft">
              <path
                id="Vector (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.16244 3.08748C9.39024 3.31529 9.39024 3.68463 9.16244 3.91244L6.07492 6.99996L9.16244 10.0875C9.39024 10.3153 9.39024 10.6846 9.16244 10.9124C8.93463 11.1402 8.56529 11.1402 8.33748 10.9124L4.83748 7.41244C4.60967 7.18463 4.60967 6.81529 4.83748 6.58748L8.33748 3.08748C8.56529 2.85967 8.93463 2.85967 9.16244 3.08748Z"
                fill="#1C065A"
              />
            </g>
          </svg>
          <p className="text-[14px] font-semibold mx-2 text-[#1C065A]">
            Payment
            <span className="text-[#4A5568] font-normal">/ Payment-detail / Recent Payments</span>
          </p>
        </div>
      </Link>
      <div className="cols-span-1 mt-4">
        <hr className=" mx-3 md:mx-7 h-[2px] border-b my-4 bg-[#CBD5E0]"></hr>
        <div className="flex mx-3 md:mx-7 items-center ">
          <h1 className="text-[#1C065A] text-[16px] font-[600]">Recent Payment</h1>
        </div>
        <div className="flex mx-3 md:mx-7 bg-[#EBE3FC] px-[16px] py-[12px] rounded mt-4">
          <p className="text-[#718096] text-[14px]">Total Paid:</p>
          <p className="ml-auto text-[#1C065A] text-[14px] font-[600]">12,430,900.00</p>
        </div>
        <div className="grid-cols-2 grid-rows-6 mx-3 md:mx-7 pb-7 lg:pb-0">
          <div className="flex mt-5">
            <p className="text-[#1C065A] text-[14px] font-[600] ">650,000.00</p>
            <p className="ml-auto text-[#718096] text-[14px] font-[300]">12th August,2023.</p>
          </div>
          <p className="text-[#718096] text-[14px]  font-[300]">Monthly Salary</p>
          <div className="flex mt-5">
            <p className="text-[#1C065A] text-[14px] font-[600] ">650,000.00</p>
            <p className="ml-auto text-[#718096] text-[14px] font-[300]">12th August,2023.</p>
          </div>
          <p className="text-[#718096] text-[14px]  font-[300]">Monthly Salary</p>
          <div className="flex mt-5">
            <p className="text-[#1C065A] text-[14px] font-[600] ">650,000.00</p>
            <p className="ml-auto text-[#718096] text-[14px] font-[300]">12th August,2023.</p>
          </div>
          <p className="text-[#718096] text-[14px]  font-[300]">Monthly Salary</p>
          <div className="flex mt-5">
            <p className="text-[#1C065A] text-[14px] font-[600] ">650,000.00</p>
            <p className="ml-auto text-[#718096] text-[14px] font-[300]">12th August,2023.</p>
          </div>
          <p className="text-[#718096] text-[14px]  font-[300]">Monthly Salary</p>
          <div className="flex mt-5">
            <p className="text-[#1C065A] text-[14px] font-[600] ">650,000.00</p>
            <p className="ml-auto text-[#718096] text-[14px] font-[300]">12th August,2023.</p>
          </div>
          <p className="text-[#718096] text-[14px]  font-[300]">Monthly Salary</p>
          <div className="flex mt-5">
            <p className="text-[#1C065A] text-[14px] font-[600] ">200,000.00</p>
            <p className="ml-auto text-[#718096] text-[14px] font-[300]">12th August,2023.</p>
          </div>
          <p className="text-[#718096] text-[14px]  font-[300]">Monthly Salary</p>
          <div className="flex mt-5">
            <p className="text-[#1C065A] text-[14px] font-[600] ">350,000.00</p>
            <p className="ml-auto text-[#718096] text-[14px] font-[300]">12th August,2023.</p>
          </div>
          <p className="text-[#718096] text-[14px]  font-[300]">Monthly Salary</p>
          <div className="flex mt-5">
            <p className="text-[#1C065A] text-[14px] font-[600] ">10,000.00</p>
            <p className="ml-auto text-[#718096] text-[14px] font-[300]">12th August,2023.</p>
          </div>
          <p className="text-[#718096] text-[14px]  font-[300]">Monthly Salary</p>
          <div className="flex mt-5">
            <p className="text-[#1C065A] text-[14px] font-[600] ">650,000.00</p>
            <p className="ml-auto text-[#718096] text-[14px] font-[300]">12th August,2023.</p>
          </div>
          <p className="text-[#718096] text-[14px]  font-[300]">Monthly Salary</p>
          <div className="flex mt-5">
            <p className="text-[#1C065A] text-[14px] font-[600] ">50,000.00</p>
            <p className="ml-auto text-[#718096] text-[14px] font-[300]">12th August,2023.</p>
          </div>
          <p className="text-[#718096] text-[14px]  font-[300]">Monthly Salary</p>
          <div className="flex mt-5">
            <p className="text-[#1C065A] text-[14px] font-[600] ">20,000.00</p>
            <p className="ml-auto text-[#718096] text-[14px] font-[300]">12th August,2023.</p>
          </div>
          <p className="text-[#718096] text-[14px]  font-[300]">Monthly Salary</p>
        </div>
      </div>
    </div>
  );
};

export default RecentsPayment;
