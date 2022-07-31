import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import LineChart from './LineChart';
import './LineChart.css';

// TODO: Homebrew regression function for 2nd degree polynomial
// For regression graph, maybe just plot a lot of points to make the line curved 💀

const timeData = [
    {x: '2018', y: '2021-06-25 00:00:22.00'},
    {x: '2019', y: '2021-06-25 00:00:21.40'},
    {x: '2020', y: '2021-06-25 00:00:21.00'},
    {x: '2021', y: '2021-06-25 00:00:20.70'},
]

const numData = [
    {x: 0, y: 2},
    {x: 1, y: 3},
    {x: 2, y: 2},
    {x: 1.02, y: 0.4},
    {x: 0, y: -1},
]

const x = [0, 1, 2, 1.02, 0]
const y = [2, 3, 2, 0.4, -1]

export default function RegressionGraph() {
    // we need labels and datasets for Chart.js

    const userData = {
        datasets: [{ 
            // chart styling is done HERE
            label: "Regression Test",
            data: numData, 
            backgroundColor: "rgb(170, 230, 255)",
            borderColor: "rgb(170, 230, 255)",
            borderWidth: 3,
            hoverBackgroundColor: "rgb(70, 105, 140)",
            hoverBorderColor: "rgb(70, 105, 140)",
        }],

    };

    const opts = {
        scales: {
            xAxes: {
                type: 'linear',
                position: 'bottom',
                ticks: {
                    min: -1,
                    max: 8,
                    stepSize: 1,
                    fixedStepSize: 1,
                }
            },
            yAxes: {
                type: 'linear',
                ticks: {
                    min: -2,
                    max: 4,
                    stepSize: 1,
                    fixedStepSize: 1,
                }
            }
        }
    }

    return (
        <div>
            <div className="line-graph">
                <LineChart chartData={userData} options={opts} />
            </div>
        </div>
    )
}