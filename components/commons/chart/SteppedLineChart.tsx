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
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

type Props = {};
const data = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
  datasets: [
    {
      label: "Dataset",
      data: { count: 6, min: -100, max: 100 },
      borderColor: "red",
      fill: false,
      stepped: true,
    },
  ],
};

const SteppedLineChart = (props: Props) => {
  return (
    <div className=" max-w-2xl ">
      <Line data={data} />
      <div className="relative flex justify-end ">
        <Image src={MoreButtonRed} alt="" className=" w-5 h-5" />
      </div>
    </div>
  );
};

export default SteppedLineChart;
