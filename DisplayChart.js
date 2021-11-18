import React, { useState } from "react";
import DataBarChart from "./DataBarChart";
import DataLineChart from "./DataLineChart";
// import * as csv from "./csv.json";
// import * as csv2 from "./csv2.json";
const DisplayChart = ({ dataselect }) => {
  //   const [chartshow, setChartshow] = useState();
  return (
    <div>
      {dataselect?.title === "csv.xlsx" ? <DataLineChart /> : <DataBarChart />}
    </div>
  );
};

export default DisplayChart;
