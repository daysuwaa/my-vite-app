import React from "react";
import Navbar from "../Layout/Navbar";
import toast, { Toaster } from "react-hot-toast";
import Table from "./Scheduledetails_Table";
import { Link } from "react-router-dom";

const Scheduledetails = () => {
  const copyToClipboard = () => {
    const textToCopy = "BLPSCID0013B31";
    toast("Copied to clipboard!", {
      id: "copyy",
    });
    if (navigator.clipboard) return navigator.clipboard.writeText(textToCopy);

    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = textToCopy;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  return (
    <div>
      <Navbar title="Schedules" />
      <Link to="/schedules/table">
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
            Schedules
            <span className="text-[#4A5568] font-normal">
              / Schedule-detail (BLPSCID0013B31)
            </span>
          </p>
        </div>
      </Link>

      {/* chevron salaries */}
      {/* md7 lg screen */}

      <div className="hidden md:hidden lg:block pb-7  col-span-2 bg-white lg:mx-7 md:mx-3">
        <div className="flex mx-3 md:mx-7 pt-6">
          <h5 className="text-[#1C065A] font-[500] text-[14px]">
            Chevron Salaries Staff Grade 1A
          </h5>
          <div className="flex ml-auto items-center " onClick={copyToClipboard}>
            <h5 className="font-light text-[14px] mr-4   text-[#4A5568]">
              Schedule Id
            </h5>
            <svg
              className="mr-5 cursor-pointer"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="IoCopyOutline">
                <path
                  id="Vector (Stroke)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.33594 3.375C3.80523 3.375 3.375 3.80523 3.375 4.33594V9.53906C3.375 10.0698 3.80523 10.5 4.33594 10.5H9.53906C10.0698 10.5 10.5 10.0698 10.5 9.53906V4.33594C10.5 3.80523 10.0698 3.375 9.53906 3.375H4.33594ZM2.625 4.33594C2.625 3.39101 3.39101 2.625 4.33594 2.625H9.53906C10.484 2.625 11.25 3.39101 11.25 4.33594V9.53906C11.25 10.484 10.484 11.25 9.53906 11.25H4.33594C3.39101 11.25 2.625 10.484 2.625 9.53906V4.33594Z"
                  fill="black"
                />
                <path
                  id="Vector (Stroke)_2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.62389 0.750003L2.625 0.75L7.68857 0.750002C8.13545 0.751275 8.56366 0.92936 8.87965 1.24535C9.19564 1.56134 9.37373 1.98956 9.375 2.43643L9.37492 2.44531L9.3632 3.00781C9.35889 3.21487 9.18753 3.37923 8.98047 3.37492C8.77341 3.37061 8.60905 3.19925 8.61336 2.99219L8.62498 2.43451C8.62321 2.18727 8.52422 1.95059 8.34932 1.77568C8.17357 1.59993 7.93545 1.50084 7.68692 1.5H2.62559C2.32739 1.50102 2.04168 1.61993 1.8308 1.8308C1.61993 2.04168 1.50102 2.32739 1.5 2.6256V7.68692C1.50084 7.93545 1.59993 8.17357 1.77568 8.34932C1.95143 8.52507 2.18957 8.62417 2.4381 8.625H3C3.20711 8.625 3.375 8.7929 3.375 9C3.375 9.20711 3.20711 9.375 3 9.375H2.4375L2.43643 9.375C1.98955 9.37373 1.56134 9.19564 1.24535 8.87965C0.929358 8.56366 0.751273 8.13545 0.750002 7.68857L0.75 7.6875V2.62389C0.751468 2.12736 0.949368 1.65158 1.30047 1.30047C1.65158 0.949369 2.12736 0.751471 2.62389 0.750003Z"
                  fill="black"
                />
              </g>
            </svg>
          </div>
        </div>
        {/* second line */}
        <div className="flex mx-7  ">
          <p className="text-[14px] font-light text-[#4A5568]">
            25 Beneficiaries
          </p>
          <p className="ml-auto text-[#1C065A] text-[14px] font-[500]">
            BLPSCOD0013B31
          </p>
        </div>
        <Toaster />

        <hr className="mx-5 h-[2px] border-b my-9 bg-[#CBD5E0]"></hr>
        <div className="mx-7  ">
          <p className="text-[#1C065A] text-[10px] font-[500]">
            SCHEDULE DETAILS
          </p>
          <div className="flex  text-[#718096] text-[12px] font-light lg:gap-[1.5rem] xl:gap-[5.5rem] pt-3">
            <div className="border-r-[1px] pr-[3.5rem] ">
              <div>DAY PAYABLE</div>
              <div className="text-[#1C065A] text-[12px] font-[500] pt-1">
                28th of the Month
              </div>
            </div>
            <div className="border-r-[1px] pr-[3.5rem]">
              <div>TIME PAYABLE</div>
              <div className="text-[#1C065A] text-[12px] font-[500] pt-1">
                12:00
              </div>
            </div>
            <div className="border-r-[1px] pr-[3.5rem]">
              <div>TOTAL PAYOUT</div>
              <div className="text-[#1C065A] text-[12px] font-[500] pt-1">
                N12.430,900.00
              </div>
            </div>
            <div className="border-r-[1px] pr-[3.5rem]">
              <div>CREATED ON</div>
              <div className="text-[#1C065A] text-[12px] font-[500] pt-1">
                12th September, 2023
              </div>
            </div>
            <div className="">
              <div>LAST PAYMENT</div>
              <div className="text-[#1C065A] text-[12px] font-[500] pt-1">
                12th September, 2023
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* xs and sm */}
      <div className="md:block lg:hidden pb-7  block col-span-2 bg-white mx-3 lg:mx-7">
        <div className="mx-3 md:mx-7 pt-6">
          <h5 className="text-[#1C065A] font-[500] text-[14px]">
            Chevron Salaries Staff Grade 1A
          </h5>
          <p className="text-[14px] font-light text-[#4A5568]">
            25 Beneficiaries
          </p>
          <div className="flex items-center " onClick={copyToClipboard}>
            <h5 className="font-light text-[14px] mr-2  text-[#4A5568]">
              Schedule Id
            </h5>
            <svg
              className="mr-9 cursor-pointer"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="IoCopyOutline">
                <path
                  id="Vector (Stroke)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.33594 3.375C3.80523 3.375 3.375 3.80523 3.375 4.33594V9.53906C3.375 10.0698 3.80523 10.5 4.33594 10.5H9.53906C10.0698 10.5 10.5 10.0698 10.5 9.53906V4.33594C10.5 3.80523 10.0698 3.375 9.53906 3.375H4.33594ZM2.625 4.33594C2.625 3.39101 3.39101 2.625 4.33594 2.625H9.53906C10.484 2.625 11.25 3.39101 11.25 4.33594V9.53906C11.25 10.484 10.484 11.25 9.53906 11.25H4.33594C3.39101 11.25 2.625 10.484 2.625 9.53906V4.33594Z"
                  fill="black"
                />
                <path
                  id="Vector (Stroke)_2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.62389 0.750003L2.625 0.75L7.68857 0.750002C8.13545 0.751275 8.56366 0.92936 8.87965 1.24535C9.19564 1.56134 9.37373 1.98956 9.375 2.43643L9.37492 2.44531L9.3632 3.00781C9.35889 3.21487 9.18753 3.37923 8.98047 3.37492C8.77341 3.37061 8.60905 3.19925 8.61336 2.99219L8.62498 2.43451C8.62321 2.18727 8.52422 1.95059 8.34932 1.77568C8.17357 1.59993 7.93545 1.50084 7.68692 1.5H2.62559C2.32739 1.50102 2.04168 1.61993 1.8308 1.8308C1.61993 2.04168 1.50102 2.32739 1.5 2.6256V7.68692C1.50084 7.93545 1.59993 8.17357 1.77568 8.34932C1.95143 8.52507 2.18957 8.62417 2.4381 8.625H3C3.20711 8.625 3.375 8.7929 3.375 9C3.375 9.20711 3.20711 9.375 3 9.375H2.4375L2.43643 9.375C1.98955 9.37373 1.56134 9.19564 1.24535 8.87965C0.929358 8.56366 0.751273 8.13545 0.750002 7.68857L0.75 7.6875V2.62389C0.751468 2.12736 0.949368 1.65158 1.30047 1.30047C1.65158 0.949369 2.12736 0.751471 2.62389 0.750003Z"
                  fill="black"
                />
              </g>
            </svg>
          </div>
        </div>
        {/* second line */}
        <div className="flex mx-3 md:mx-7 ">
          <p className=" text-[#1C065A] text-[14px] font-[500]">
            BLPSCOD0013B31
          </p>
        </div>
        <Toaster />

        <hr className="mx-3 h-[2px] border-b my-7 bg-[#CBD5E0]"></hr>
        <div className="mx-3 md:mx-7   ">
          <p className="text-[#1C065A] text-[10px] font-[500]">
            SCHEDULE DETAILS
          </p>
          <div className="sm:flex block mt-3 grid-cols-1 sm:grid-cols-2  text-[#718096] text-[12px] font-light  ">
            <div className="col-span-2 ">
              <p>DAY PAYABLE</p>
              <p className="text-[#1C065A] text-[12px] font-[500] pt-1">
                26th of the Month
              </p>
            </div>
            <div className="mt-3 sm:mt-0  ml-auto sm:mr-[4rem]">
              <p>TIME PAYABLE</p>
              <p className="text-[#1C065A] text-[12px] font-[500] pt-1">
                12:00
              </p>
            </div>
          </div>
          <div className="sm:flex block mt-3 grid-cols-1 sm:grid-cols-2  text-[#718096] text-[12px] font-light ">
            <div className="col-span-2">
              <p>DAY PAYOUT</p>
              <p className="text-[#1C065A] text-[12px] font-[500] pt-1">
                N12,430,900.00
              </p>
            </div>
            <div className="col-span-2 ml-auto mt-3 sm:mt-0 ">
              <p>CREATED ON</p>
              <p className="text-[#1C065A] text-[12px] font-[500] pt-1">
                12th of September, 2023.
              </p>
            </div>
          </div>
          <div className="flex mt-3 grid-cols-1 sm:grid-cols-2  text-[#718096] text-[12px] font-light ">
            <div className="col-span-1 ">
              <p>LAST PAYMENT</p>
              <p className="text-[#1C065A] text-[12px] font-[500] pt-1">
                12th of September, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Scheduledetails;
