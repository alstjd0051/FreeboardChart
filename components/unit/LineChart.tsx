import React from "react";
import { Line } from "react-chartjs-2";

interface Props {
  data: any;
  options: any;
}

const LineChart = ({ data, options }: Props) => {
  return <Line data={data} options={options} />;
};

export default LineChart;
