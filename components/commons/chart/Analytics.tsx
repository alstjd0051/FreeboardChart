import React from "react";
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

export const options = {
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    title: {
      display: true,
      text: "Analytics",
    },
  },
};
const labels = ["01/2000", "02/20", "03/20"];

const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({})),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Analytics = () => {
  return <Line options={options} data={data} />;
};

export default Analytics;
