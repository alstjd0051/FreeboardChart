import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../public/img/Logo.png";
import Avatar from "../../../public/img/avatar.png";
import {
  ChevronDownIcon,
  HomeIcon,
  FolderIcon,
  ChartPieIcon,
  AdjustmentsVerticalIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const NavBar = () => {
  return (
    <div className="max-h-full">
      <div className="lg:block hidden h-20">
        <nav className="bg-[#D11C1C] h-screen xl:w-52  flex flex-col ">
          <div className="flex gap-3 px-5 py-10  ">
            <Image src={Logo} alt="" className="w-5 h-5" />
            <p className="text-white font-medium text-base hidden xl:block">
              Marketian
            </p>
          </div>
          <div className="flex gap-5 px-5 items-center ">
            <Image
              src={Avatar}
              alt=""
              className="sm:w-8 sm:h-8 lg:w-9 lg:h-10"
            />
            <div className="flex-col text-white hidden xl:flex">
              <p className="font-medium">Name</p>
              <div className="flex text-sm gap-3 items-center  ">
                <p className="font-light">Active</p>
                <ChevronDownIcon className="w-3 h-3" />
              </div>
            </div>
          </div>
          <div className="my-20 w-full  ">
            <div className="Nav hover:border-l-4  hover:pl-2 ">
              <HomeIcon className=" NavIcon " />
              <p className="hidden xl:block">Home</p>
            </div>
            <div className="Nav hover:border-l-4 hover:pl-2 ">
              <FolderIcon className="NavIcon  " />
              <p className="hidden xl:block">File</p>
            </div>
            <div className="Nav hover:border-l-4 hover:pl-2 ">
              <ChartPieIcon className=" NavIcon " />
              <p className="hidden xl:block">Charts</p>
            </div>
            <div className="Nav hover:border-l-4 hover:pl-2 ">
              <AdjustmentsVerticalIcon className="NavIcon " />
              <p className="hidden xl:block">Filter</p>
            </div>
            <div className="Nav hover:border-l-4 hover:pl-2  ">
              <Cog6ToothIcon className="NavIcon " />
              <p className="hidden xl:block">Settingsv</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
