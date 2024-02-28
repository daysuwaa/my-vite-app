import React, { useState } from "react";
import search from "/src/assets/CkSearch.svg";
import filter from "/src/assets/FiFilter.svg";
import DataTable from "react-data-table-component";
import DeleteModal from "./Delete_modal";

const Scheduledetails_Table = () => {
  const [isDeleteScheduleOpen, setIsDeleteScheduleOpen] = useState(false);
  const openDeleteModal = () => setIsDeleteScheduleOpen(true);
  const closeDeleteSchedule = () => setIsDeleteScheduleOpen(false);
  const columns = [
    {
      name: <div className="font-bold text-[#4A5568]">SCHEDULE ID</div>,
      selector: (row) => (
        <div className=" font-semibold text-[#1C065A]">{row.scheduleid}</div>
      ),
    },
    {
      name: <div className="font-bold text-[#4A5568]">AMOUNT</div>,
      selector: (row) => <div className="text-[#1C065A]">{row.amount}</div>,
    },

    {
      name: <div className="font-bold text-[#4A5568]">RECIPIENT</div>,
      selector: (row) => <div className="text-[#1C065A]">{row.recipients}</div>,
    },
    {
      name: <div className="font-bold text-[#4A5568]">PAID TO</div>,
      selector: (row) => <div className="text-[#1C065A]"> {row.paidto}</div>,
    },
    {
      name: <div className="font-bold text-[#4A5568]">DATE</div>,
      selector: (row) => <div className="text-[#1C065A]"> {row.date}</div>,
    },
  ];

  const data = [
    {
      id: 1,
      scheduleid: "BLPID000133B31",
      amount: "N250,000.00",
      recipients: "Ronaldo Aguero",
      lastlogin: "13:45, 11 Sep 2023",
      paidto: "First Bank: 001122334455",
      date: "13:45, 11 Sep 2023",
    },

    {
      id: 2,
      scheduleid: "BLPID000133B31",
      amount: "N250,000.00",
      recipients: "Ayomide Shola",
      lastlogin: "13:45, 11 Sep 2023",
      paidto: "First Bank: 001122334455",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 3,
      scheduleid: "BLPID000133B31",
      amount: "N250,000.00",
      recipients: "Jaden Smith",
      lastlogin: "13:45, 11 Sep 2023",
      paidto: "First Bank: 001122334455",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 4,
      scheduleid: "BLPID000133B31",
      amount: "N250,000.00",
      recipients: "David Adeleke",
      lastlogin: "13:45, 11 Sep 2023",
      paidto: "First Bank: 001122334455",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 5,
      scheduleid: "BLPID000133B31",
      amount: "N250,000.00",
      recipients: "Segun Adetayo",
      lastlogin: "13:45, 11 Sep 2023",
      paidto: "Access Bank: 001122334455",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 6,
      scheduleid: "BLPID000133B31",
      amount: "N250,000.00",
      recipients: "Damini Ogulu",
      lastlogin: "13:45, 11 Sep 2023",
      paidto: "Access Bank: 001122334455",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 7,
      scheduleid: "BLPID000133B31",
      amount: "N250,000.00",
      recipients: "Seyi Olatunji",
      lastlogin: "13:45, 11 Sep 2023",
      paidto: "Access Bank: 001122334455",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 8,
      scheduleid: "BLPID000133B31",
      amount: "N250,000.00",
      recipients: "Kendrick Lamar",
      lastlogin: "13:45, 11 Sep 2023",
      paidto: "Access Bank: 001122334455",
      date: "13:45, 11 Sep 2023",
    },
    {
      id: 9,
      scheduleid: "BLPID000133B31",
      amount: "N250,000.00",
      recipients: "Michael Olatukunbo",
      lastlogin: "13:45, 11 Sep 2023",
      paidto: "Access Bank: 001122334455",
      date: "13:45, 11 Sep 2023",
    },
  ];
  return (
    <div className="pb-7">
      <div className="lg:flex pt-8">
        <div className="px-[20px] h-10  mx-5 lg:mx-7 flex md:w-[490px] rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
          <img src={search} alt="searchicon" className="w-[16px]  " />
          <input
            type="text"
            placeholder="Search by Schedule Id"
            id="scsearch"
            className="font-light w-[320px]  outline-none text-[#718096] text-[14px] ml-1.5 bg-[#f6f6f6]"
          />
        </div>
        <div className="px-[16px] w-[90px] rounded border border-[#CBD5E0] h-10 items-center mx-5 mt-3 md:mx-5 sm:mt-3 md:mt-3 lg:mt-0 flex  ">
          <img src={filter} alt="searchicon" className="w-[16px] " />
          <p className="font-light text-[#718096] text-[14px] ml-1.5">Filter</p>
        </div>
        <div className=" flex-shrink-0 ml-auto">
          <button
            onClick={openDeleteModal}
            className="px-4 text-[#FF5655] h-[40px] mx-5 text-[14px] sm:mx-5 mt-3  md:mt-3 lg:mt-0  rounded  border border-[#FF5655] lg:mx-7  "
          >
            Delete Schedule
          </button>
        </div>
      </div>

      <hr className="bg-[#CBD5E0] w-full h-0.3 my-5" />
      <div className="border border-[#CBD5E0] mx-3 lg:mx-7  ">
        <DataTable columns={columns} data={data} className=" " />

        <DeleteModal
          isOpen={isDeleteScheduleOpen}
          modalTitle={"Delete Schedule?"}
          handleClose={closeDeleteSchedule}
          route="/schedules/payments"
        />
      </div>
    </div>
  );
};
export default Scheduledetails_Table;
