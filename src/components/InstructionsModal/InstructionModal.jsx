import React from "react";

export const InstructionModal = ({ info }) => {
  return (
    <div className="instruction-modal grid place-items-center fixed left-14 md:left-52 top-8 background-2  border border-gray-200 h-1/10  w-4/6 z-50  font-semibold p-4 md:p-8 text-2xl text-brand-secondaryText">
      {info}
    </div>
  );
};
