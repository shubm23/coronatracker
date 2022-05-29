import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

export default function Chart() {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    fetchDailyData()
      .then((data) => {
        setDailyData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  const LineChart = () => (
    <>
      {dailyData[0] ? (
        <Line
          data={{
            labels: "",
            datasets: [{}, {}],
          }}
        />
      ) : null}
    </>
  );
  return (
    <div>
      <lineChart />
    </div>
  );
}
