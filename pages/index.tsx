import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Card from "../public/img/masterCard.png";
import CopyImg from "../public/img/CopyImg.png";
import DownImg from "../public/img/DownImg.png";
import MoreButton from "../public/img/MoreButton.png";
import MoreButtonRed from "../public/img/MoreButtonRed.png";
import ChartGraph from "../public/img/ChartGraph.png";
// import CurvChart from "../public/img/CurvChart.png";
import LineChart from "../components/commons/chart/LineChart";
import Analytics from "../components/commons/chart/Analytics";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import SteppedLineChart from "../components/commons/chart/SteppedLineChart";
import Calendar from "../components/commons/chart/Calendar";
import CurvChart from "../components/commons/chart/CurvChart";

const Home: NextPage = () => {
  return (
    <main className="w-full px-5 xl:grid grid-cols-7 h-full ">
      <div className="lg:col-span-4 sm:flex-col ">
        <div className="bg-white w-full shadow-md p-5 rounded-md  ">
          <h1 className="text-black font-bold  text-xl">Welcome back Julie!</h1>
          <ul className="text-sm text-black px-5 list-disc marker:text-[#D11E1E]">
            <li>Since your last login on the system, there were:</li>
            <li>21 new charts</li>
            <li>15 new reports</li>
            <li>45 new messages</li>
          </ul>
        </div>
        <div className="grid lg:grid-cols-2  xl:grid-cols-5 gap-3 lg:gap-5 py-2  ">
          <div className="xl:col-span-3 flex-col  ">
            <div className="shadow-md rounded-xl py-2 px-3">
              <div className="flex items-center justify-between ">
                <div className="flex-col">
                  <h1 className="font-bold">$ 9.564</h1>
                  <p>Card Balance </p>
                </div>
                <Image src={Card} alt="" />
              </div>
              <div className="max-w-full ">
                <LineChart />
              </div>
            </div>
            <div className="shadow-md rounded-xl py-2 w-full px-6 flex-col ">
              <div className="flex justify-between ">
                <h1 className="font-bold">Statistics</h1>
                <EllipsisVerticalIcon className="w-6 " />
              </div>
              <SteppedLineChart />
            </div>
          </div>
          <div className="xl:col-span-2 grid-cols-2 ">
            <div className="mb-2 shadow-lg rounded-md overflow-hidden max-h-32 ">
              <Analytics />
            </div>
            <div className="w-1/3 lg:w-full">
              <div
                className=" rounded-md px-3 py-2 
              flex justify-around items-center shadow-md  "
              >
                <div className="flex-col">
                  <p>$223K</p>
                  <p>Earned This Month</p>
                </div>
                <Image src={MoreButtonRed} alt="" className="w-10 h-10" />
              </div>
              <div className=" rounded-md px-3 py-2 my-5 flex justify-around  shadow-md ">
                <div className="w-20 h-20">
                  <Image src={ChartGraph} alt="" />
                </div>
                <div className="flex-col">
                  <p className="font-bold text-xl">Status</p>
                  <p className="text-sm text-gray-500">Growth</p>
                  <h1 className="pt-3 font-bold text-2xl">4.312</h1>
                </div>
                <EllipsisVerticalIcon className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-1 col-span-2  lg:col-span-3 md:px-3">
        <div>
          <div className="pb-2 ">
            {/* <Image src={CurvChart} alt="" className="max-w-full" /> */}
            <CurvChart />
          </div>
          <div className="grid grid-cols-4  gap-2   ">
            <div className="bg-[#2D62ED] rounded-md text-white p-3 flex-col flex  ">
              <Image src={CopyImg} alt="" />
              <div className="flex-col pt-1 ">
                <h1>2.8K</h1>
                <p>Monthly Invoices</p>
              </div>
              <div className="flex  w-full justify-end ">
                <Image src={MoreButton} alt="" />
              </div>
            </div>
            <div className=" bg-[#7D00B5] rounded-md text-white p-3">
              <Image src={DownImg} alt="" />
              <div className="flex-col pt-1 ">
                <h1>41.7K</h1>
                <p>Monthly Invoices</p>
              </div>
              <div className="flex  w-full justify-end ">
                <Image src={MoreButton} alt="" />
              </div>
            </div>
            <div className=" bg-[#D11C1C] rounded-md text-white p-3">
              <Image src={DownImg} alt="" />
              <div className="flex-col pt-1 ">
                <h1>41.7K</h1>
                <p>Monthly Invoices</p>
              </div>
              <div className="flex  w-full justify-end ">
                <Image src={MoreButton} alt="" />
              </div>
            </div>
            <div className=" bg-[#39D5CF] rounded-md text-white p-3">
              <Image src={DownImg} alt="" />
              <div className="flex-col pt-1 ">
                <h1>41.7K</h1>
                <p>Monthly Invoices</p>
              </div>
              <div className="flex  w-full justify-end ">
                <Image src={MoreButton} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden ">
          <Calendar />
        </div>
      </div>
    </main>
  );
};

export default Home;
