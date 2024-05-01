import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  style?: any;
  type?: "submit" | "reset" | "button";
  className?: string;
  variant?: "primary" | "secondary" | 'third' | 'gradient';
}

export const PrimaryButton = ({
  children,
  onClick,
  style,
  type = "button",
  className,
  variant = "primary",
}: Props) => {
  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
      className={`
      ${
        variant === "primary"
          ? " bg-brown text-white py-[12px] px-[15px] text-[11px] font-medium tracking-[1px] font-inter rounded-[6px]"
          : variant ==='secondary' 
          ? "bg-primary font-bold text-[16px] text-white rounded-[5px]"
          :
          variant === 'third'?
          "border-[2px] border-light_primary rounded-[5px] p-[10px] dark:text-white font-medium hover:bg-light_primary hover:dark:text-black transition-colors duration-200"
          :
          variant === 'gradient' ?
          "font-bold rounded-[20px] px-[50px] py-[12px] bg-gradient-to-r from-[#FA9703] via-[#F48F0F] to-[#F6510A] text-white"
          :
          ''
      }
      ${className}`}
    >
      {children}
    </button>
  );
};
