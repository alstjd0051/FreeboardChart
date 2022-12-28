import moment from "moment";

export const calculateLabels = () => {
  const labels = [];
  const now = "";
  for (let i = 29; i >= 0; i -= 1) {
    labels.push(moment(moment(now).subtract(i, "days")).format("M월 D일"));
  }
};
