import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from React Router

const NavbarMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");  
  const location = useLocation();  

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  // Function to set active menu item
  const setActiveMenu = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div>
      {/* Desktop Menu */}
      <div className="hidden sm:block">
        <div className="justify-evenly grid grid-cols-3 sm:grid-cols-6 font-semibold text-center text-md bg-[#008080] cursor-pointer text-white p-2">
          {/* Apply active class based on activeMenuItem state */}
          <Link
            to="/sarkariJobs"
            className={`hover:bg-[#016161]${
              location.pathname === "/sarkariJobs" ? "bg-[#016161]" : ""
            }`}
            onClick={() => {
              closeDropdown();
              setActiveMenu("sarkariJobs");
            }}
          >
            Sarkari Jobs
          </Link>
          <Link
            to="/privateJobs"
            className={`hover:bg-[#016161] ${
              location.pathname === "/privateJobs" ? "bg-[#016161]" : ""
            }`}
            onClick={() => {
              closeDropdown();
              setActiveMenu("privateJobs");
            }}
          >
            Private Jobs
          </Link>
          <Link
            to="/results"
            className={`hover:bg-[#016161] ${
              location.pathname === "/results" ? "bg-[#016161]" : ""
            }`}
            onClick={() => {
              closeDropdown();
              setActiveMenu("results");
            }}
          >
            Results
          </Link>
          <Link
            to="/news"
            className={`hover:bg-[#016161] ${
              location.pathname === "/news" ? "bg-[#016161]" : ""
            }`}
            onClick={() => {
              closeDropdown();
              setActiveMenu("news");
            }}
          >
            Latest Jobs/ News
          </Link>
          <Link
            to="/answer-key"
            className={`hover:bg-[#016161] ${
              location.pathname === "/answer-key" ? "bg-[#016161]" : ""
            }`}
            onClick={() => {
              closeDropdown();
              setActiveMenu("answer-key");
            }}
          >
            Answer Key
          </Link>
          <Link
            to="/admit-card"
            className={`hover:bg-[#016161] ${
              location.pathname === "/admit-card" ? "bg-[#016161]" : ""
            }`}
            onClick={() => {
              closeDropdown();
              setActiveMenu("admit-card");
            }}
          >
            Admit Card
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden relative">
        <div
          className="flex justify-center text-sm gap-2 items-center bg-[#008080] text-white p-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <span className="font-semibold">Menu</span>

          <div className="text-xl">
            {showDropdown ? <RxCross2 /> : <IoMenu />}
          </div>
        </div>
        {showDropdown && (
          <div className="absolute right-0 w-full top-full text-sm font-bold bg-[#008080] text-white text-center">
            <Link
              to="/sarkariJobs"
              className={`p-2 hover:bg-[#016161] ${
                location.pathname === "/sarkariJobs" ? "bg-[#016161]" : ""
              }`}
              onClick={() => {
                closeDropdown();
                setActiveMenu("sarkariJobs");
              }}
            >
              Sarkari Jobs
            </Link>
            <Link
              to="/privateJobs"
              className={`p-2 hover:bg-[#016161] ${
                location.pathname === "/privateJobs" ? "bg-[#016161]" : ""
              }`}
              onClick={() => {
                closeDropdown();
                setActiveMenu("privateJobs");
              }}
            >
              Private Jobs
            </Link>
            <Link
              to="/results"
              className={`p-2 hover:bg-[#016161] ${
                location.pathname === "/results" ? "bg-[#016161]" : ""
              }`}
              onClick={() => {
                closeDropdown();
                setActiveMenu("results");
              }}
            >
              Results
            </Link>
            <Link
              to="/news"
              className={`p-2 hover:bg-[#016161] ${
                location.pathname === "/news" ? "bg-[#016161]" : ""
              }`}
              onClick={() => {
                closeDropdown();
                setActiveMenu("news");
              }}
            >
              Latest Jobs/ News
            </Link>
            <Link
              to="/answer-key"
              className={`p-2 hover:bg-[#016161] ${
                location.pathname === "/answer-key" ? "bg-[#016161]" : ""
              }`}
              onClick={() => {
                closeDropdown();
                setActiveMenu("answer-key");
              }}
            >
              Answer Key
            </Link>
            <Link
              to="/admit-card"
              className={`p-2 hover:bg-[#016161] ${
                location.pathname === "/admit-card" ? "bg-[#016161]" : ""
              }`}
              onClick={() => {
                closeDropdown();
                setActiveMenu("admit-card");
              }}
            >
              Admit Card
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarMenu;
