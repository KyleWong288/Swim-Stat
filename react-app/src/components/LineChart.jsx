import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import "./LineChart.css";

// wrapper for Line
export default function LineChart({ chartData, options }) {
    return (
        <div className="line-chart">
            <Line data={chartData} options={options} />
        </div>
    )
}