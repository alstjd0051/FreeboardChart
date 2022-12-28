import React from "react";
import LineChartCard from "../../../public/img/LineChartCard.png";
import Image from "next/image";

type Props = {};

const Analytics = (props: Props) => {
  return (
    <div>
      <Image src={LineChartCard} alt="Analytics" />
    </div>
  );
};

export default Analytics;
