"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Logo_Full_Vertical, Logo_Horizontal } from "../Logo";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  sizeClassName?: string;
  bodyClassName?: string;
  footerClassname?: string;
  topContent: React.ReactNode;
  bodyContent: React.ReactNode;
  footerContent: React.ReactNode;
  isLoading?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  className,
  sizeClassName,
  bodyClassName,
  footerClassname,
  topContent,
  bodyContent,
  footerContent,
  isLoading,
}: Props) => {
  const [showModal, setShowModal] = useState(isOpen);
  const ref = useRef<HTMLDivElement>(null);

  //* ---------------------> FUNCTIONS
  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(onClose, 300);
  }, [onClose, setShowModal]);

  //* ----------------> USEEFFECTS
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  //* ------> Modal USEEFFECTS
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          handleClose();
        }
      };

      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <section
      className={`fixed top-0 left-0 inset-0 w-full h-full bg-overlayBlack z-[999] overscroll-none flex justify-center items-center bg-[#00000093]`}
    >
      <div
        className={`2xl:w-1/3 sm:w-1/2 w-full sm:min-w-[500px] sm:h-auto h-full   sm:max-w-[600px] max-w-none transition-all duration-200 ${sizeClassName} 
      ${showModal ? "translate-y-0" : "translate-y-[999%]"}`}
        ref={ref}
      >
        <div
          className={`bg-background_2 sm:max-h-[calc(100vh-40px)] overflow-y-auto w-full h-full py-[20px] px-[15px] sm:rounded-[34px] flex flex-col gap-[10px] transition-opacity duration-200 bg-gray2 sm:justify-normal justify-start border-[1px] border-gray ${
            isLoading ? "opacity-75" : "opacity-100"
          } ${className} `}
        >
          <div className="flex justify-between">
            <div className="flex flex-col">
                <div className="relative w-[203px] h-[33px]">
                    <Logo_Horizontal/>
                </div>
               
                <p className="text-text_gray text-[13px]">
                    {topContent}
                </p> 
            </div>
            <div className="py-[10px] px-[15px] font-medium cursor-pointer border-[1px] border-gray text-white h-fit w-fit rounded-[6px]" onClick={handleClose}>
                Close
            </div>
          </div>
          <div className={` ${bodyClassName}`}>{bodyContent}</div>
          <div className={` ${footerClassname}`}>{footerContent}</div>
        </div>
      </div>
    </section>
  );
};
