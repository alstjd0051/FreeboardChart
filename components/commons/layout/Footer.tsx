import React from "react";
import {
  ChevronDownIcon,
  HomeIcon,
  FolderIcon,
  ChartPieIcon,
  AdjustmentsVerticalIcon,
  Cog6ToothIcon,
  BellIcon,
  Bars3Icon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const MobileFooter = () => {
  return (
    <div className="flex lg:hidden h-20 text-white items-center bg-[#D11C1C] w-full justify-around">
      <HomeIcon className="opacity-25 hover:opacity-100 w-10 h-10" />
      <FolderIcon className="opacity-25 hover:opacity-100 w-10 h-10" />
      <ChartPieIcon className="opacity-25 hover:opacity-100 w-10 h-10" />
      <AdjustmentsVerticalIcon className="opacity-25 hover:opacity-100 w-10 h-10" />
      <Cog6ToothIcon className="opacity-25 hover:opacity-100 w-10 h-10" />
    </div>
  );
};

export default MobileFooter;
