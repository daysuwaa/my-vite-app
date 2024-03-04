import React, { useState } from "react";
import Modal from "react-modal";

const GetScheduleModal = ({ isOpen, handleClose, modalTitle }) => {
  const [benefi, setBenfi] = useState("");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel={modalTitle}
      shouldCloseOnOverlayClick={false}
      className="absolute rounded top-1/2 md:left-1/2 left-[43%] transform -translate-x-1/2 bg-white -translate-y-1/2 p-[2rem] m-[2rem]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="flex">
        <h2 className="text-md text-[#4A5568] mx-auto  font-semibold">
          {/* Get Schedule Template */}
          {modalTitle}
        </h2>
        <button onClick={handleClose} className="text-gray-600">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="IoCloseOutline">
              <path
                id="Vector (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L12 10.9393L16.7197 6.21967C17.0126 5.92678 17.4874 5.92678 17.7803 6.21967C18.0732 6.51256 18.0732 6.98744 17.7803 7.28033L13.0607 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L12 13.0607L7.28033 17.7803C6.98744 18.0732 6.51256 18.0732 6.21967 17.7803C5.92678 17.4874 5.92678 17.0126 6.21967 16.7197L10.9393 12L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z"
                fill="#4A5568"
              />
            </g>
          </svg>
        </button>
      </div>
      <hr className=" h-[2px] border-b mt-2 bg-[#CBD5E0] " />
      <div className=" flex items-center justify-between ">
        <div className="my-6">
          <form>
            <label htmlFor="benefic" className="text-[#4A5568] text-sm ">
              Beneficiary List Name
            </label>
            <div className="px-[10px] mt-2 items-center h-[40px] flex w-full rounded border border-[#CBD5E0] focus-within:outline outline-2 outline-blue-600">
              <input
                type="text"
                value={benefi}
                onChange={(e) => setBenfi(e.target.value)}
                placeholder="Enter Beneficiary List Name"
                id="benefic"
                className="font-normal w-[320px] md:w-[550px] outline-none text-[#718096] text-[16px]"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="my-2">
        <button
          className="bg-[#3B2774] text-white py-2 px-4 rounded"
          onClick={handleClose}
        >
          Get Template
        </button>
      </div>
    </Modal>
  );
};

export default GetScheduleModal;
