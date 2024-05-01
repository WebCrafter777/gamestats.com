"use client";

import { Icon } from "@/app/styles/Icon";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import React, { useState } from "react";

interface Props {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  onChange?: (val: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  type?: "number" | "text" | "email" | "password";
  errors?: any;
  className?: string;
  parentClassName?: string;
  labelClassname?: string;
  showErrorMessage?: boolean;
  rightSvg?: () => React.ReactNode | JSX.Element;
  leftSvg?:()=> React.ReactNode | JSX.Element;
  variant?: string;
  disabled?: boolean;
}

export const PrimaryInput = ({
  id,
  name,
  placeholder,
  label,
  onChange,
  value,
  errors,
  type = "text",
  className,
  showErrorMessage,
  rightSvg,
  variant = "primary",
  parentClassName,
  disabled,
  labelClassname,
  leftSvg
}: Props) => {
  const [innerType, setInnerType] = useState(type);

  return (
    <div className={`flex flex-col gap-[5px] ${parentClassName}`}>
      {label && (
        <label
          htmlFor={id}
          className={`text-[13px] font-Noto  ${
            variant === "secondary"
              ? "text-white text-[15px] font-normal"
              : ""
          }
          ${labelClassname}
          `}
        >
          {label}
        </label>
      )}
      <div className="h-full">
        <div className={`relative flex justify-center items-center h-full  rounded-[6px]`}>
        {leftSvg && leftSvg()}
          <input
            id={id}
            name={name}
            type={innerType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`w-full  outline-none disabled:text-text-gray text-black dark:text-white
          ${errors && "border-[2px] border-solid !border-red-700"}
          ${
            variant === "primary"
              ? "bg-white placeholder:text-text-gray dark:text-white rounded-[6px] py-[14px] px-[16px]"
              :  variant === "secondary"
              ?
              'bg-[#4343437a] border-[1px] border-solid border-text_gray py-[12px] px-[10px] text-[14px] placeholder:text-text_gray dark:text-white rounded-[9px]'
              :
              ''
          }
          ${className ? className : ""}
          `}
          />
          {rightSvg && rightSvg()}
        </div>
        {errors && errors.length > 1 && showErrorMessage && (
          <div className="w-full mt-[2px] py-[6px] px-[5px] text-rose-500 flex gap-[5px] items-center">
            <Icon
              svg={WebsiteIcons["error"]}
              className="w-[20px] h-[20px] flex items-center mt-[5px]"
            />
            <p>{errors}</p>
          </div>
        )}
      </div>
    </div>
  );
};
