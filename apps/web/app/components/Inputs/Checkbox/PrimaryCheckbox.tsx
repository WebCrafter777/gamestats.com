"use client";

import React from "react";

interface Props {
  isChecked: boolean;
  setIsChecked: () => void;
  id: string;
  label?: React.ReactNode;
  errors: any;
}

export const PrimaryCheckbox = ({
  isChecked,
  setIsChecked,
  id,
  errors,
  label,
}: Props) => {
  const handleCheckboxChange = () => {
    setIsChecked();
  };
  
  return (
    <div className="select-none">
      <input
        id={id}
        name={id}
        type="checkbox"
        hidden
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor={id}
        className="cursor-pointer text-white flex gap-[5px] items-center"
      >
        {/* //* Checkbox mark */}
        <div
          className={`w-fit h-fit p-2 rounded-full border-[#C4C4C4] `}
          style={
            isChecked
              ? { boxShadow: "inset 0 0 0 3px #C4C4C4" }
              : { boxShadow: "inset 0 0 0 1px #C4C4C4" }
          }
        />
        <div className={`leading-normal ${errors && '!text-rose-400 '}`}>{label}</div>
      </label>
    </div>
  );
};
