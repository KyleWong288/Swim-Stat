import LineChart from "../components/LineChart";
import GoogleChart from "../components/GoogleChart";
import 'chartjs-adapter-date-fns';
import { useState } from "react";
import "./Page1.css";

const years = [2018, 2019, 2020, 2021];
const times = ["22.00", "21.40", "21.00", "20.70"]; // times should be string to store minutes 
const name = "Your Mom";
const event = "50 Free";


const timeDataY = [
    {x: 2018, y: '2021-06-25 00:00:22.00'},
    {x: 2019, y: '2021-06-25 00:00:21.40'},
    {x: 2020, y: '2021-06-25 00:00:21.00'},
    {x: 2021, y: '2021-06-25 00:00:20.70'},
]

// Google Charts playground. Old Chart.js work also here.
export default function Page1() {
    // we need labels and datasets for Chart.js

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
            {/* <LineChart chartData={userData} options={opts}/> */}
            <GoogleChart years={years} times={times} name={name} event={event}/>
            {/* <TestPlot/> */}
            </div>
        </div>
    )
}