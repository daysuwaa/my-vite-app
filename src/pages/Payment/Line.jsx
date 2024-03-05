import React from "react";
import CopyToClipboard from "../../components/Utility/Copy";
import Tooltip from "@mui/material/Tooltip";

const Line = () => {
  return (
    <div>
      <div className="flex">
        <p className="flex tracking-wide mr-auto lg:mr-0 mb-3 items-center font-light mx-5  md:mx:0  text-[#1C065A] text-sm ">
          My account
          <Tooltip
            title="Fund your wallet by paying into Guarantee Trust Wallet"
            placement="bottom"
          >
            <svg
              className="mx-1 w-[10px] cursor-pointer"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="CkInfoOutline" clipPath="url(#clip0_1050_818)">
                <path
                  id="Vector"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6ZM6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM5.97963 4.00007C6.25577 4.00007 6.47963 3.77621 6.47963 3.50007C6.47963 3.22393 6.25577 3.00007 5.97963 3.00007C5.70349 3.00007 5.47963 3.22393 5.47963 3.50007C5.47963 3.77621 5.70349 4.00007 5.97963 4.00007ZM6.47963 5.00014V5.50014V8.50014V9.00014H5.47963V8.50014V5.50014V5.00014H6.47963Z"
                  fill="#4A5568"
                />
              </g>
              <defs>
                <clipPath id="clip0_1050_818">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Tooltip>
        </p>

        <CopyToClipboard />
        <div className=" hidden sm:hidden lg:flex mb-2  ml-auto  md:mb-0">
          <div className="px-[20px] h-[40px]  mx-5 items-center flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="CkSearch" clipPath="url(#clip0_1052_442)">
                <path
                  id="Vector"
                  d="M15.5895 14.4126L11.2368 10.06C12.1869 8.81104 12.6271 7.24788 12.4684 5.68671C12.3097 4.12555 11.5639 2.68294 10.382 1.65074C9.20005 0.618553 7.67016 0.0738449 6.10184 0.126823C4.53352 0.1798 3.04388 0.826508 1.93428 1.93611C0.824677 3.04571 0.177969 4.53535 0.124991 6.10367C0.0720139 7.67199 0.616722 9.20188 1.64891 10.3838C2.68111 11.5658 4.12371 12.3115 5.68488 12.4702C7.24605 12.6289 8.80921 12.1887 10.0581 11.2386L14.4108 15.5913C14.5684 15.745 14.7799 15.8311 15.0001 15.8311C15.2203 15.8311 15.4318 15.745 15.5895 15.5913C15.7456 15.4349 15.8333 15.2229 15.8333 15.002C15.8333 14.781 15.7456 14.569 15.5895 14.4126ZM1.83346 6.33329C1.83346 5.44327 2.09738 4.57324 2.59184 3.83322C3.08631 3.0932 3.78911 2.51642 4.61138 2.17583C5.43365 1.83523 6.33845 1.74612 7.21136 1.91975C8.08428 2.09339 8.8861 2.52197 9.51544 3.15131C10.1448 3.78064 10.5734 4.58247 10.747 5.45538C10.9206 6.32829 10.8315 7.23309 10.4909 8.05536C10.1503 8.87763 9.57354 9.58043 8.83352 10.0749C8.0935 10.5694 7.22347 10.8333 6.33346 10.8333C5.14041 10.8319 3.99664 10.3573 3.15303 9.51371C2.30943 8.6701 1.83487 7.52633 1.83346 6.33329Z"
                  fill="#718096"
                />
              </g>
              <defs>
                <clipPath id="clip0_1052_442">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Line;
