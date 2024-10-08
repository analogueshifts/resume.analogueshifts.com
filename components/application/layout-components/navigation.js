"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ApplicationLogo from "./application-logo";

//Submenu Components
import BuildersSubMenu from "./builders-sub-menu";
import ResumesSubMenu from "./resumes-sub-menu";
import CoverLetterSubMenu from "./cover-letter-sub-menu";
import CVSubMenu from "./cvs-sub-menu";
import ResourcesSubMenu from "./resources-sub-menu";

// Components
import MobileNavBar from "./mobile-navigation";
import { useUser } from "@/contexts/user";
import ProfileDropdown from "./profile-menu";

// Nav Menu Tabs
const menuTabs = ["Builders", "Resumes", "Cover Letters", "CVs", "Resources"];

export default function NavBar() {
  const [opacity, setOpacity] = useState(1);
  const [transformOne, setTransformOne] = useState(0);
  const [transformTwo, setTransformTwo] = useState(0);
  const [bodyRotate, setBodyRotate] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedMobileMenu, setSelectedMobileMenu] = useState("");
  const [subMenuComponent, setSubMenuComponent] = useState("");

  const { user } = useUser();

  // THandles Opening and Closing Of the mobile Menu and Reshaping the Hamburger button
  const toggleMenu = () => {
    if (!mobileMenuOpen) {
      setMobileMenuOpen(true);
      setOpacity(0);
      setTransformOne(-90);
      setTransformTwo(-10);
      setBodyRotate(45);
    } else {
      setMobileMenuOpen(false);
      setOpacity(1);
      setTransformOne(0);
      setTransformTwo(0);
      setBodyRotate(0);
    }
  };

  // Handles Upadating the Desktop selected Menu
  const updateSelectedMenu = (value) => {
    if (selectedMenu === value) {
      setSelectedMenu("");
    } else {
      setSelectedMenu(value);
    }
  };

  // This Changes The SubMenu Element To be rendered Whenever the Desktop Selected Menu Gets Changed
  useEffect(() => {
    switch (selectedMenu) {
      case "":
        setSubMenuComponent("");
        break;
      case "Builders":
        setSubMenuComponent(<BuildersSubMenu />);
        break;
      case "Resumes":
        setSubMenuComponent(<ResumesSubMenu />);
        break;
      case "Cover Letters":
        setSubMenuComponent(<CoverLetterSubMenu />);
        break;
      case "CVs":
        setSubMenuComponent(<CVSubMenu />);
        break;
      case "Resources":
        setSubMenuComponent(<ResourcesSubMenu />);
        break;
      default:
        setSubMenuComponent("");
        break;
    }
  }, [selectedMenu]);

  return (
    <nav className="w-full  z-50">
      <div
        style={{ boxShadow: "1px 1px 50px rgba(0,0,0,0.1)" }}
        className="w-[calc(100%-12px)] z-50 h-16 backdrop-filter backdrop-blur-sm top-1.5 left-1.5 fixed rounded-full px-7 flex justify-between items-center"
      >
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="https://analogueshifts.com" target="_blank">
              <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
            </Link>
          </div>
        </div>
        <div className="flex gap-6 max-[850px]:hidden">
          {/* Map Through Desktop Nav Menus */}
          {menuTabs.map((menu) => {
            return (
              <button
                onClick={() => updateSelectedMenu(menu)}
                key={crypto.randomUUID()}
                className="border-none relative menu-link"
              >
                <p
                  className={`text-base ${
                    selectedMenu === menu
                      ? "text-AnalogueShiftsTextColor"
                      : "text-black/70"
                  }  ${
                    selectedMenu !== menu && "hover:text-black"
                  } font-medium`}
                >
                  {menu}
                </p>
                <div
                  className={`w-1 h-1 rounded-full bg-AnalogueShiftsTextColor absolute left-[50%] -bottom-2.5 ${
                    selectedMenu === menu ? "opacity-100" : "opacity-0"
                  } `}
                ></div>
              </button>
            );
          })}

          {user ? (
            <ProfileDropdown />
          ) : (
            <Link
              className="border-black/70 border duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-2 px-12 rounded-lg"
              href="https://auth.analogueshifts.app?app=resume"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div
          style={{ transform: `rotate(${bodyRotate}deg)` }}
          onClick={toggleMenu}
          className="hidden max-[850px]:flex duration-300 origin-left flex-col w-5 h-3 cursor-pointer justify-between"
        >
          <div
            style={{ transform: `rotate(${transformOne}deg)` }}
            className="w-full duration-300 h-0.5 bg-black/80 rounded"
          ></div>
          <div
            style={{ opacity: opacity }}
            className="w-full h-0.5 duration-300 bg-black/80 rounded"
          ></div>
          <div
            style={{ transform: `translateY(${transformTwo}px)` }}
            className="w-full h-0.5 bg-black/80 duration-300 rounded"
          ></div>
        </div>
      </div>

      {/* The Sub Menu Component */}
      <div className="z-70 w-[calc(100%-12px)] fixed left-1.5 top-1.5">
        {subMenuComponent}
      </div>

      {/* Render The Mobile Nav Bar If mobileMenuOpen is True */}
      {mobileMenuOpen && (
        <MobileNavBar
          selectedMobileMenu={selectedMobileMenu}
          setSelectedMobileMenu={(value) => setSelectedMobileMenu(value)}
        />
      )}
    </nav>
  );
}
