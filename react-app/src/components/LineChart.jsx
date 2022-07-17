import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './LineChart.css';
import { UserData } from './TestData';

export default function LineChart({ chartData }) {
    const data = {
        labels: UserData.map((data) => data.year),
        datasets: [{
            // chart styling done here
            label: "Time",
            data: UserData.map((data) => data.time),
            backgroundColor: "rgb(70, 105, 140)",
            borderColor: "rgb(70, 105, 140)",
            borderWidth: 3,
            hoverBackgroundColor: "rgb(170, 230, 255)",
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    

    return (
        <div className="LineChart">
            <Line data={data} options={options}/>
        </div>
    )
}