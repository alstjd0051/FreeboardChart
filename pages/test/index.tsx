import React from "react";

const TestPage = () => {
  return (
    <div className="h-screen">
      {/* <LineChart data={TestData} options={TestOptions} /> */}
      <div>
        <TestChart />
      </div>
    </div>
  );
};

export default TestPage;

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

// const options = {
//   responsive: true,
//   plugins: {
//     title: {
//       display: false,
//     },
//     legend: {
//       display: false,
//     },
//   },
//   interaction: {
//     mode: "index" as const,
//     intersect: false,
//   },
// };
export const options = {
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({})),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
const TestChart = () => {
  return <Line options={options} data={data} width="894px" height="320px" />;
};
