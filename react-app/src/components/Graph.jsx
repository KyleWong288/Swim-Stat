import React, { useState } from 'react';
import './Graph.css';
import TestGraph from './TestGraphImg.png';
import LineChart from './LineChart';

// TODO: Make Y-axis time
// TODO: Graph should take in props times and years.
// Display the stats and pass times and years to LineChart
export default function Graph(props) {
    const times = props.Times;
    const years = props.Years;

    const userData = {
        labels: years.map((item, index) => (
            item
        )),
        datasets: [{
            label: "Time",
            data: times.map((item, index) => (
                item
            )),
            backgroundColor: "rgb(170, 230, 255)",
            borderColor: "rgb(170, 230, 255)",
            borderWidth: 3,
            hoverBackgroundColor: "rgb(70, 105, 140)",
            hoverBorderColor: "rgb(70, 105, 140)",
        }],
    };

    const opts = {
        maintainAspectRation: false,
        scales: {
            y: {
                grace: "10%"
            }
        }
    }

    return (
        <div>
            <h1 className="times-header">
                Year:
                <div> Time: </div>
            </h1>
            <div>
                {years.map((item,index) => (
                    <div className="times">
                        {years.at(index)}
                        {console.log(years[0])}
                        {console.log(times[0])}
                        <div>{times.at(index)}</div>
                    </div>
                ))}
            </div>
            <div className="chart-spacing">
                <LineChart chartData={userData} options={opts}/>
            </div>
        </div>
    )
}