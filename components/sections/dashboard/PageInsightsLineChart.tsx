"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const LINE_COLOR = "#405FF2";

const chartLabels = [
  "Mar 21",
  "Mar 22",
  "Mar 23",
  "Mar 24",
  "Mar 25",
  "Mar 26",
  "Mar 27",
  "Mar 28",
  "Mar 29",
  "Mar 30",
  "Mar 31",
];

const chartData = {
  labels: chartLabels,
  datasets: [
    {
      label: "# of Votes",
      data: [50, 100, 15, 150, 25, 50, 100, 15, 50, 25, 75],
      borderColor: LINE_COLOR,
      backgroundColor: LINE_COLOR,
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: LINE_COLOR,
      pointBorderColor: LINE_COLOR,
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      fill: false,
      tension: 0,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
      align: "center" as const,
      labels: {
        color: "#242323",
        font: {
          size: 14,
          family: "Inter, sans-serif",
        },
        boxWidth: 18,
        boxHeight: 18,
        padding: 20,
        usePointStyle: false,
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 160,
      ticks: {
        stepSize: 20,
        color: "#B6B6B6",
        font: {
          size: 12,
        },
        padding: 8,
      },
      grid: {
        color: "#E9E8E8",
      },
      border: {
        display: false,
      },
    },
    x: {
      ticks: {
        color: "#B6B6B6",
        font: {
          size: 12,
        },
        padding: 8,
      },
      grid: {
        color: "#E9E8E8",
      },
      border: {
        display: false,
      },
    },
  },
};

function PageInsightsLineChart() {
  return (
    <div className="map-chart" style={{ height: 400, width: "100%" }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default PageInsightsLineChart;
