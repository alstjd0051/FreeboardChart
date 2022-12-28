import React from "react";
import MoreButtonRed from "../../../public/img/MoreButtonRed.png";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axios
  LinearScale, // y axios
  PointElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({})),
      borderColor: "red",
      fill: false,
      stepped: true,
    },
  ],
};

const option = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const SteppedLineChart = () => {
  return (
    <div className=" max-w-2xl ">
      <Line data={data} options={option} />
      <div className="relative flex justify-end ">
        <Image src={MoreButtonRed} alt="" className=" w-5 h-5" />
      </div>
    </div>
  );
};

export default SteppedLineChart;
