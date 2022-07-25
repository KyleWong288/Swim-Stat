import LineChart from "../components/LineChart";
import RegressionGraph from "../components/RegressionGraph";
import 'chartjs-adapter-date-fns';
import { useState } from "react";
import {Data} from '../components/Data';
import "./Page1.css";

const firstSwimmer = Data.at(0);
const times = [80, 70, 60];
const years = ['2015','2016','2017'];

const timeDataY = [
    {x: 2018, y: '2021-06-25 00:00:22.00'},
    {x: 2019, y: '2021-06-25 00:00:21.40'},
    {x: 2020, y: '2021-06-25 00:00:21.00'},
    {x: 2021, y: '2021-06-25 00:00:20.70'},
]

// Chart.js playground for now
// TODO: work on chart hover effect, for now there are none (see events: [])
// Remove comma in date if possible
export default function Page1() {
    // we need labels and datasets for Chart.js

    for (let i=0; i<timeDataY.length; i++) {
        console.log(timeDataY[i].x);
        console.log(timeDataY[i].y);
    }
    const userData = {
        
        datasets: [{ 
            // chart styling is done HERE
            label: "Time",
            data: timeDataY,
            backgroundColor: "rgb(170, 230, 255)",
            borderColor: "rgb(170, 230, 255)",
            borderWidth: 3,
            hoverBackgroundColor: "rgb(70, 105, 140)",
            hoverBorderColor: "rgb(70, 105, 140)",
        }],

    };

    const opts = {
        scales: {
            // x: {
            //     type: 'time',
            //     time: {
            //         unit: 'year',
            //     }
            // },
            x: {
                type: 'linear',
                ticks: {
                    precision: 0
                },
            },
            y: {
                type: 'time',
                time: {
                    displayFormats: {
                        second: 'ss.SS',
                    },
                    unit: 'second',
                    beginAtZero: true,
                },
            }
        }
    }

    return (
        <div>
            <div className="line-graph">
            <LineChart chartData={userData} options={opts}/>
            <RegressionGraph />
            </div>
        </div>
    )
}