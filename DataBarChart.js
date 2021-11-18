import React, { useState } from "react";
import { Chart } from "react-google-charts";
import data from "./csv.json";
const DataLineChart = () => {
  //   const [chartselect, setChartselect] = useState();
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

  data.map((each) => {
    let bell = each.Pointdata.substring(0, 2);
    // console.log("bell", bell);
    if (parseInt(bell) <= 10) {
      lessthan10 += 1;
    } else if (parseInt(bell) <= 20) {
      lessthan20 += 1;
    } else if (parseInt(bell) <= 30) {
      lessthan30 += 1;
    } else if (parseInt(bell) <= 40) {
      lessthan40 += 1;
    } else if (parseInt(bell) <= 50) {
      lessthan50 += 1;
    } else if (parseInt(bell) <= 60) {
      lessthan60 += 1;
    } else if (parseInt(bell) <= 70) {
      lessthan70 += 1;
    } else if (parseInt(bell) <= 80) {
      lessthan80 += 1;
    } else if (parseInt(bell) <= 90) {
      lessthan90 += 1;
    } else if (parseInt(bell) <= 100) {
      lessthan100 += 1;
    }
  });
  let result_point = [
    ["","count"],
    ["0-10", lessthan10],
    ["11-20", lessthan20],
    ["21-30", lessthan30],
    ["31-40", lessthan40],
    ["41-50", lessthan50],
    ["51-60", lessthan60],
    ["61-70", lessthan70],
    ["71-80", lessthan80],
    ["81-90", lessthan90],
    ["91-100", lessthan100],
  ];
  //   setChartselect({ Pointdata: result_point });

  console.log("chartdataBar", result_point);

  return (
    <div>
      <Chart
        width={"800px"}
        height={"400px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={result_point}
      />
    </div>
  );
};

export default DataLineChart;
