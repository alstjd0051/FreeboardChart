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
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  data?: Object;
  option?: Object;
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: "top" as const,
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  "8/19",
  "9/19",
  "19/19",
  "11/19",
  "12/19",
  "1/20",
  "2/20",
  "3/20",
  "4/20",
  "5/20",
];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const LineChart = (props: Props) => {
  ChartJS.defaults.font.size = 10;
  return (
    <div className="relative ">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
