import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import computer from "../../assets/computer.png";
import GetBeneficiaryModal from "./GetBeneficiaryModal";
import AddBeneficiaryModal from "./AddBeneficiaryModal";

const Beneficiaries = () => {
  const [isGetBeneficiaryOpen, setIsBeneficiaryOpen] = useState(false);
  const openGetBeneficiaryModal = () => setIsBeneficiaryOpen(true);
  const closeBeneficiaryModal = () => setIsBeneficiaryOpen(false);

  const [isAddBeneficiaryOpen, setIsAddBeneficiaryModal] = useState(false);
  const openAddBeneficiaryModal = () => setIsAddBeneficiaryModal(true);
  const closeAddBeneficiaryModal = () => setIsAddBeneficiaryModal(false);
  const [beneficiaryname, setBeneficiaryname] = useState("");

  return (
    <div className="bg-[#F6F6F6] h-full">
      <Navbar title="Beneficiary" />

      <div className="flex ml-auto justify-end items-center mx-5 md:px-[10px] mt-8">
        <button
          className="bg-[#3B2774] py-1.5 px-3 rounded text-center text-white text-sm font-semibold gap-8"
          onClick={openAddBeneficiaryModal}
        >
          Add New Beneficiary
        </button>
      </div>

      <div className="flex flex-col items-center mt-[8rem]">
        <img src={computer} alt="" className="mb-4" />
        <p className="text-center text-[#1C065A] font-light tracking-wide text-xl">
          No Beneficiaries created
        </p>
        <p className="text-center text-[#718096] font-light tracking-wide text-sm mx-3">
          You do not have any Beneficiaries.
          <br />
          Click the button below to generate a template for one
        </p>
        <button
          className="py-2 px-3 text-[#1C065A] text-[14px] font-semibold sm:text-[16px] mt-4 rounded bg-white border border-[#3B2773]  text-center flex items-center justify-center"
          onClick={openGetBeneficiaryModal}
        >
          Get Beneficiary Template
        </button>

        <GetBeneficiaryModal
          isOpen={isGetBeneficiaryOpen}
          modalTitle={"Get Beneficiary Template"}
          handleClose={closeBeneficiaryModal}
        />

        <AddBeneficiaryModal
          isOpen={isAddBeneficiaryOpen}
          modalTitle={"Add New Beneficiary"}
          handleClose={closeAddBeneficiaryModal}
          beneficiaryname={beneficiaryname}
          setBeneficiaryename={setBeneficiaryname}
        />
      </div>
    </div>
  );
};

export default Beneficiaries;
