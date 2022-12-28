import {
  ChevronDownIcon,
  BellIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import PhoneLogo from "../../../public/img/phoneLogo.png";
import Avatar from "../../../public/img/avatar.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="w-full h-16 mb-3  shadow-md hidden lg:flex items-center pl-10 justify-between   ">
        <div className="flex gap-20">
          <div className="flex-col">
            <div
              className="flex items-center gap-3 cursor-pointer "
              onClick={() => setIsOpen(!isOpen)}
            >
              <h1>Folders</h1>
              <ChevronDownIcon className="w-4" />
            </div>
            {isOpen && (
              <div className="absolute top-14 shadow-xl  flex flex-col items-center rounded-md gap-2 bg-white pb-5  ">
                <div className=" flex items-center    ">
                  <div className="bg-[#D11C1C] mx-3 w-3 h-3"></div>
                  <h1 className="pr-8">Menu</h1>
                </div>
                <div className=" flex items-center    ">
                  <div className="bg-[#FF9B9B] mx-3 w-3 h-3 "></div>
                  <h1 className="pr-8 text-[#B5B5B5]">Menu</h1>
                </div>
                <div className=" flex items-center    ">
                  <div className="bg-[#FF9B9B] mx-3 w-3 h-3 "></div>
                  <h1 className="pr-8 text-[#B5B5B5]">Menu</h1>
                </div>
                <div className=" flex items-center    ">
                  <div className="bg-[#FF9B9B] mx-3 w-3 h-3 "></div>
                  <h1 className="pr-8 text-[#B5B5B5]">Menu</h1>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            <h1>Features</h1>
            <ChevronDownIcon className="w-4" />
          </div>
          <div className="flex items-center gap-3">
            <h1>Users</h1>
            <ChevronDownIcon className="w-4" />
          </div>
        </div>
        <div className="flex gap-8 px-5 items-center  ">
          <div className="relative border-2 rounded-full overflow-hidden w-72  ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-10 text-sm "
              placeholder="Search "
              required
            />
          </div>
          <div className="w-6 ">
            <BellIcon />
          </div>
          <div className="w-6 ">
            <ArrowLeftOnRectangleIcon className="rotate-180" />
          </div>
        </div>
      </header>
      <header className="lg:hidden p-5 items-center flex-col  w-full">
        <Phone />
      </header>
    </>
  );
};

export default Header;

const Phone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex gap-5 items-center justify-evenly w-full  ">
      <Image src={PhoneLogo} width={50} height={50} alt="Logo" />
      <div className="relative border-2 flex items-center  border-black rounded-full overflow-hidden w-10/12 h-14  ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 pl-10 text-sm "
          placeholder="Search "
          required
        />
      </div>
      <div className="relative">
        <BellIcon className="w-10 " />
      </div>
      <div className="relative">
        <Bars3Icon className="w-10 cursor-pointer" onClick={handleToggle} />
        {isOpen ? <Hambuger closeMenu={closeMenu} /> : null}
      </div>
    </div>
  );
};

const Hambuger = ({ closeMenu }: any) => {
  const [Open, setOpen] = useState(false);
  return (
    <div className="bg-[#D11C1C] absolute min-w-[40rem] h-screen  top-5 rounded-xl -right-7  py-4 px-8 text-white  ">
      <div className="flex justify-around ">
        <div className="flex pb-3  border-b-2 w-full  items-center justify-between gap-10 mt-10  ">
          <div className="flex items-center">
            <Image src={Avatar} alt="" className="w-8 h-8 " />
            <p className="text-white ml-6">홍길동 님</p>
          </div>
          <div className="">
            <ArrowLeftOnRectangleIcon
              className="w-6 rotate-180 ml-5 text-white cursor-pointer "
              onClick={closeMenu}
            />
          </div>
        </div>
      </div>
      <div className="pt-10 flex flex-col items-center  ">
        <div
          className="flex w-full items-center justify-between py-4 text-white cursor-pointer"
          onClick={() => setOpen(!Open)}
        >
          <button>Folders</button>
          <ChevronDownIcon className="w-6 h-6" />
        </div>
        {Open && (
          <div className="text-white w-full pt-5 px-10 gap-3 flex flex-col pb-5">
            <p>Features</p>
            <p>Features</p>
            <p>Features</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <h1>Features</h1>
        <h1>Users</h1>
        <hr className="border-t-2 my-5  " />
        <h1>My Page</h1>
      </div>
    </div>
  );
};
