import React from "react";
import LineChartCard from "../../../public/img/LineChartCard.png";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: "Line Chart",
    },
  },
};
const labels = ["01/20", "02/20", "03/20"];

const data = {
  labels,
  datasets: [
    {
      data: [60, 30, 50],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      fill: false,
    },
  ],
};

const Analytics = () => {
  return (
    <div className="">
      <Line options={options} data={data} />
    </div>
  );
};

export default Analytics;
