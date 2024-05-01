"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/app/styles/Icon";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import { ArrowIcons } from "@/public/svg/ArrowIcons";

interface Props {
  parentClassname?: string;
  className?: string;
  placeholder?: React.ReactNode;
  data: {
    onClick: () => void;
    label: any;
    customSearchText?:string
  }[];
  childClassName?: string;
  childContainerClassName?: string;
  searchable?: boolean;
  disabled?: boolean;
  label: string | null | React.JSX.Element;
  variant?: "primary" | "secondary";
}

export const PrimaryDropdown = ({
  className,
  placeholder,
  parentClassname,
  data,
  childClassName,
  childContainerClassName,
  disabled,
  label,
  variant,
  searchable,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const insideRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null)

  const { isDarkMode } = useDarkMode();
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{ top?: number; bottom?: number }>({
    top: ref.current?.offsetHeight,
    bottom: undefined,
  });

  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          setSearchValue(null);
          setIsOpen(false);
        }
      };
      window.addEventListener("click", handleOutsideClick);
      return () => window.removeEventListener("click", handleOutsideClick);
    }
  }, [isOpen]);

  const compOnClick = useCallback((onClick: () => void, label: string) => {
    setIsOpen(false);
    onClick();
  }, []);

  const calculateDropdownPosition = () => {
    if (dataRef.current) {
      const buttonRect = insideRef.current?.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const fullComponentHeight = dataRef.current?.offsetHeight;

      if (buttonRect) {
        const spaceBelow = windowHeight - buttonRect.bottom;
        const spaceAbove = buttonRect.top;

        if (spaceBelow >= fullComponentHeight) {
          //* If there is enough space below, open the dropdown there
          setPosition({ top: buttonRect.height, bottom: undefined });
        } else if (spaceAbove >= fullComponentHeight) {
          //* If there is enough space above, open the dropdown there
          setPosition({
            top: undefined,
            bottom: insideRef.current ? buttonRect.height : 0,
          });
        } else {
          //* Default
          setPosition({ top: buttonRect.height, bottom: undefined });
        }
      }
    }
  };

  useEffect(() => {
    calculateDropdownPosition();
    window.addEventListener("resize", calculateDropdownPosition);
    window.addEventListener("scroll", calculateDropdownPosition);

    return () => {
      window.removeEventListener("resize", calculateDropdownPosition);
      window.removeEventListener("scroll", calculateDropdownPosition);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && searchable) {      
      const trackKeyboard = (e: any) => {
        if (
          !e.ctrlKey &&
          !e.altKey &&
          !e.metaKey &&
          e.key !== "Shift" &&
          e.key !== "CapsLock"
        ) {
          const inputValue = e.key;
          if (inputValue === "Backspace") {
            setSearchValue((prev) => (prev ? prev.slice(0, -1) : null));
          } else {
            setSearchValue((prev) => prev ? prev + inputValue : inputValue);
          }
        }
      };
      window.addEventListener("keydown", trackKeyboard);

      return () => {
        window.removeEventListener("keydown", trackKeyboard);
      };
    }
  }, [isOpen, searchable, setSearchValue]);

  useEffect(() => {
    const handleSpaceScroll = (e: any) => {
      if (isOpen && e.key === " ") {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleSpaceScroll);

    return () => {
      window.removeEventListener("keydown", handleSpaceScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    if (searchValue && data.length > 0 && listRef.current) {
      const index = data.findIndex(item => {
        if(item.customSearchText){
          return item.customSearchText.toLowerCase().includes(searchValue.toLowerCase())
        }else{
          return item.label.toLowerCase().includes(searchValue.toLowerCase())
        }
      });

      if (index !== -1) {
        const element = listRef.current.children[index];
        if (element) {
          //@ts-ignore
          const topPosition = element.offsetTop;
          listRef.current.scrollTop = topPosition;
        }
      }
    }
  }, [searchValue, data]);

  return (
    <div className={`relative ${parentClassname}`} ref={ref}>
      <div
        className={`w-full py-[10px] px-[16px] rounded-[4px] cursor-pointer select-none flex gap-[10px] justify-between items-center  ${className}
        ${
          isOpen &&
          ` ${
            position.bottom
              ? "!rounded-t-none"
              : position.top
                ? "!rounded-b-none"
                : ""
          }`
        }
        ${
          variant === "secondary"
            ? "border-[1px] border-solid dark:border-white border-black"
            : ""
        }
        `}
        ref={insideRef}
        onClick={() => {
          if (disabled) return null;
          setSearchValue(null);
          setIsOpen((prev) => !prev);
        }}
      >
        {label ? label : placeholder}
        {isDarkMode ? (
          <Icon
            svg={ArrowIcons["arrow_bottom_black"]}
            className={`w-[12px] h-[12px] flex justify-center items-center pointer-events-none transition-transform duration-100 mr-[5px] ${
              isOpen && "rotate-180"
            }`}
          />
        ) : (
          <Icon
            svg={ArrowIcons["arrow_bottom_white"]}
            className={`w-[12px] h-[12px] flex justify-center items-center pointer-events-none transition-transform duration-100 mr-[5px] ${
              isOpen && "rotate-180"
            }`}
          />
        )}
      </div>
      {isOpen && (
        <div
          className={`absolute z-10 left-0 right-0 w-full  rounded-[4px]  py-[10px] dark:bg-black bg-white 
          ${
            variant === "secondary"
              ? `bg-[#ffffff28] border-[1px] dark:border-white border-black border-t-none rounded-t-none`
              : ""
          }
          ${childContainerClassName}`}
          style={{ top: position.top, bottom: position.bottom }}
          ref={dataRef}
        >
          <ul className="flex flex-col !max-h-[200px] overflow-y-auto trnasition-all duration-200" ref={listRef}>
            {data.map((comp, index) => (
              <li
                key={index}
                onClick={(e) => {
                  e.nativeEvent.stopImmediatePropagation()
                  compOnClick(comp.onClick, comp.label)
                }}
                className={`text-[10px] cursor-pointer select-none px-[15px] py-[10px]
                lg:transition-colors  lg:hover:bg-background_1 lg:hover:text-primary dark:text-white text-black
                ${label === comp.label && "!text-primary"}
                ${childClassName}`}
              >
                {comp.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
