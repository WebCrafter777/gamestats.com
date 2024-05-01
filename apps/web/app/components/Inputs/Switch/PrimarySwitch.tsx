import React, { useRef } from "react";

interface Props {
  isTrue: boolean;
  setIsTrue: (val: boolean) => void;
  id: string;
  activeClassName?:string,
  label?:string
}

export const PrimarySwitch: React.FC<Props> = ({
  isTrue,
  setIsTrue,
  id,
  activeClassName,
  label
}: Props) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (checkboxRef.current) {
      setIsTrue(checkboxRef.current.checked);
    }
  };

  return (
    <div className="select-none flex items-center gap-[5px]">
      <input
        type="checkbox"
        id={id}
        ref={checkboxRef}
        checked={isTrue}
        onChange={handleChange}
        className="hidden"
      />
      <label
        htmlFor={id}
        className={`cursor-pointer flex items-center justify-between w-12 h-6 bg-[#9b9999]  rounded-full !p-1 transition
        ${checkboxRef.current?.checked ?  activeClassName ? activeClassName :  `!bg-blue-400` : ""}
        before:block before:w-4 before:h-4  before:rounded-full before:shadow-md before:transform before:bg-white ${
            isTrue ? "before:translate-x-[24px]" : "before:translate-x-0"
          } before:transition
        `}
      >
      </label>
      {
        label ?
        <p className="text-[14px] text-[#ffffffa6] font-bold">{label}</p>
        :
        null
      }
    </div>
  );
};

