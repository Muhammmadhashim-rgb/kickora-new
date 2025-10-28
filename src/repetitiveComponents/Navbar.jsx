import React, { Component } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menOpen: false,
      woOpen: false,
      mobileMenuOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState({
      menOpen: !this.state.menOpen,
      woOpen: false,
    });
  };

  toggleDropdownWO = () => {
    this.setState({
      woOpen: !this.state.woOpen,
      menOpen: false,
    });
  };

  toggleMobileMenu = () => {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
      menOpen: false,
      woOpen: false,
    });
  };

  render() {
    return (
      <div className="2xl:p-7 xl:p-7 lg:p-7 md:p-7 sm:p-7 xs:p-[1.2rem]  2xl:my-10 xl:my-10 lg:my-10 md:my-10 sm:my-10 xs:my-[1rem] bg-[#FAFAFA] rounded-2xl relative z-50">

        {/* ---------- Desktop Navbar ---------- */}
        <div className="hidden lg:flex justify-between items-center w-full">
          {/* Left Menu */}
          <ul className="flex gap-2 items-center relative">
            <li>
              <a
                className="text-[#232321] font-semibold font-rubik"
                href="#"
              >
                New Drops 🔥
              </a>
            </li>

            {/* Men Dropdown */}
            <li className="relative">
              <button
                onClick={this.toggleDropdown}
                className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 text-[#232321] font-semibold font-rubik"
              >
                Men
                <ChevronDownIcon className="w-5 h-5 text-gray-800" />
              </button>

              {this.state.menOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 z-50 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition-all duration-200 ease-in-out">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      T-Shirts
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Shoes
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Accessories
                    </a>
                  </div>
                </div>
              )}
            </li>

            {/* Women Dropdown */}
            <li className="relative">
              <button
                onClick={this.toggleDropdownWO}
                className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 text-[#232321] font-semibold font-rubik"
              >
                Women
                <ChevronDownIcon className="w-5 h-5 text-gray-800" />
              </button>

              {this.state.woOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 z-50 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition-all duration-200 ease-in-out">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      T-Shirts
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Shoes
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Accessories
                    </a>
                  </div>
                </div>
              )}
            </li>
          </ul>

          {/* Logo */}
          <img className="cursor-pointer" src="/Images/Logo.svg" alt="Logo" />

          {/* Right Icons */}
          <ul className="flex gap-10 items-center">
            {/* Search Icon */}
            <li className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004"
                  clipRule="evenodd"
                />
              </svg>
            </li>

            {/* User Icon */}
            <li className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m-4 9.5A3.75 3.75 0 0 0 4.25 17v1.188c0 .754.546 1.396 1.29 1.517c4.278.699 8.642.699 12.92 0a1.54 1.54 0 0 0 1.29-1.517V17A3.75 3.75 0 0 0 16 13.25h-.34q-.28.001-.544.086l-.866.283a7.25 7.25 0 0 1-4.5 0l-.866-.283a1.8 1.8 0 0 0-.543-.086z"
                />
              </svg>
            </li>

            {/* Cart Icon */}
            <li className="cursor-pointer">
              <div className="flex w-8 h-8 p-2.5 justify-center items-center rounded-full bg-[#FFA52F] text-black font-semibold font-rubik">
                0
              </div>
            </li>
          </ul>
        </div>

        {/* ---------- Mobile Navbar ---------- */}
        <div className="flex lg:hidden justify-between items-center">
          <img className="cursor-pointer xs:w-28" src="/Images/Logo.svg" alt="Logo" />

          <button
            onClick={this.toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* ---------- Mobile Menu ---------- */}
        {this.state.mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 mt-4 px-7 py-5 bg-white shadow-xl rounded-2xl z-40">
            <a
              href="#"
              className="block text-[#232321] font-semibold font-rubik mb-3"
            >
              New Drops 🔥
            </a>

            {/* Men */}
            <div className="relative mb-3">
              <button
                onClick={this.toggleDropdown}
                className="flex justify-between w-full items-center text-[#232321] font-semibold font-rubik"
              >
                Men
                <ChevronDownIcon className="w-5 h-5" />
              </button>

              {this.state.menOpen && (
                <div className="absolute top-full left-0 mt-2 w-full rounded-md bg-white shadow-md ring-1 ring-black/5 transition-all duration-200 ease-in-out z-50">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      T-Shirts
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Shoes
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Accessories
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Women */}
            <div className="relative mb-3">
              <button
                onClick={this.toggleDropdownWO}
                className="flex justify-between w-full items-center text-[#232321] font-semibold font-rubik"
              >
                Women
                <ChevronDownIcon className="w-5 h-5" />
              </button>

              {this.state.woOpen && (
                <div className="absolute top-full left-0 mt-2 w-full rounded-md bg-white shadow-md ring-1 ring-black/5 transition-all duration-200 ease-in-out z-50">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      T-Shirts
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Shoes
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Accessories
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
