"use client";
import React, { useEffect, useState } from "react";
import { PrimaryInput } from "../Inputs/TextField/PrimaryInput";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";

import { AnimatePresence, motion } from "framer-motion";
import { InnerMoon } from "@theme-toggles/react";

import { Icon } from "../../styles/Icon";
import useMediaQuery, { screenSizes } from "@/app/hooks/useMediaQuery";
import { LargeScreensNavbarContent } from "./LargeScreensNavbarContent";
import { SmallScreenNavMenu } from "./SmallScreenNavMenu";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import { SectionContainer } from "../SectionContainer";

const variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    x: "100%",
    scale: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const isAboveMediumScreens = useMediaQuery(screenSizes.mediumScreens);
  const { setIsDarkMode: setHookDarkMode } = useDarkMode();
  const { t } = useTranslation();
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    updateTheme(newDarkMode);
    setHookDarkMode(newDarkMode);
  };

  const updateTheme = (darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");

    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode === "true");
      updateTheme(savedDarkMode === "true");
    }
  }, []);

  if (isAboveMediumScreens) {
    return (
      //@ts-ignore
      <InnerMoon
        id="changetheme"
        toggled={isDarkMode}
        toggle={toggleDarkMode}
        className="w-[30px] h-[30px]"
        placeholder={""}
        duration={400}
        reversed
        // onPointerEnterCapture={() => {}}
        // onPointerLeaveCapture={() => {}}
        color="#000"
      />
    );
  } else {
    return (
      <div
        className="border-[1px] border-solid dark:border-white border-black py-[10px] px-[10px] flex items-center justify-between rounded-[6px] cursor-pointer select-none"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? t("dark") : t("light")}
        {/* @ts-ignore */}
        <InnerMoon
          id="changetheme"
          toggled={isDarkMode}
          toggle={toggleDarkMode}
          className="w-[30px] h-[30px]"
          placeholder={""}
          duration={400}
          reversed
          // onPointerEnterCapture={() => {}}
          // onPointerLeaveCapture={() => {}}
        />
      </div>
    );
  }
};

export const Navbar = () => {
  const [isSmallScreenNavOpen, setIsSmallScreenNavOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const isAboveMediumScreens = useMediaQuery(screenSizes.mediumScreens);

  return (
    <nav className="md:pt-0 pt-[10px]">
      <SectionContainer className="!relative">
        <div className="flex justify-between items-center gap-[25px]">
          <PrimaryInput
            id="Search"
            name="Search"
            placeholder="Search by hostname or map...."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            parentClassName="h-[40px] rounded-[6px] flex-grow xs:!max-w-[400px] !max-w-[247px]"
            rightSvg={() => (
              <div className="dark:bg-white h-full flex justify-center items-center rounded-r-[6px] px-[24px] border-l-[1px] border-l-[#E8E8E8]">
                <Icon
                  svg={WebsiteIcons["search"]}
                  className="w-[20px] h-[20px]"
                />
              </div>
            )}
            className="rounded-r-none h-[40px]"
          />
          <div className="flex gap-[10px] items-center">
            {isAboveMediumScreens ? (
              <React.Fragment>
                <LargeScreensNavbarContent />
                <DarkModeToggle />
              </React.Fragment>
            ) : (
              <div
                onClick={() => {
                  if (!isAboveMediumScreens) {
                    setIsSmallScreenNavOpen((prev) => !prev);
                  }
                }}
                className="cursor-pointer"
              >
                <Icon
                  id="hamburger"
                  svg={WebsiteIcons["hamburger"]}
                  className="w-[53px] h-[53px]"
                />
              </div>
            )}
          </div>
        </div>
        {!isAboveMediumScreens && (
          <AnimatePresence>
            {isSmallScreenNavOpen && (
              <motion.div
                className="absolute w-full left-[0] top-[116px] z-[20]"
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <SmallScreenNavMenu changeNavOpen={(val:boolean)=>setIsSmallScreenNavOpen(val)} />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </SectionContainer>
    </nav>
  );
};
