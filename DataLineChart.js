import React, { useState } from "react";
import { Chart } from "react-google-charts";
import data from "./csv.json";
const DataLineChart = () => {
  // const [chartselect, setChartselect] = useState();
  let lessthan10 = 0;
  let lessthan20 = 0;
  let lessthan30 = 0;
  let lessthan40 = 0;
  let lessthan50 = 0;
  let lessthan60 = 0;
  let lessthan70 = 0;
  let lessthan80 = 0;
  let lessthan90 = 0;
  let lessthan100 = 0;

  let result_point = [["index","point"]]

  data.map((each, index) => {
    let bell = parseInt(each.Pointdata.substring(0, 2));
    result_point.push([index,bell]) 

  });

  console.log("chartdataLine", result_point);

  return (
    <div>
      <Chart
        width={"800px"}
        height={"400px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={result_point}
      />
    </div>
  );
};

export default DataLineChart;
