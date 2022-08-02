import React from 'react';
import { Chart } from "react-google-charts";
import './Graph.css';

// PLAN: Better than Chart.js, smooth lines appeal to my smooth brain
// TODO: Maybe add min/max for time axis

const testData = [
    ["Year", "Time"],
    [2018, new Date("2022-06-09 0:01:30.00")],
    [2019, new Date("2022-06-09 0:01:10.00")],
    [2020, new Date("2022-06-09 0:01:00.00")],
    [2021, new Date("2022-06-09 0:00:55.00")],
]

// regression utility goes here

// convert times to date for charting
function timesToDates(timesArray) {
	const datesArray = [];
	for (let i=0; i<timesArray.length; i++) {
		// formating based on string size
		let curr = timesArray[i];
		if (curr.length === 5) {
			datesArray.push("2022-06-09 00:00:" + curr);
		}
        else if (curr.length === 7) {
            datesArray.push("2022-06-09 00:0" + curr);
        }
	}
    return datesArray;
}

function mergeData(years, times) {
    const timesData = [];
    const dates = timesToDates(times);
    timesData.push(["Year", "Time"]);
    for (let i=0; i<years.length; i++) {
        timesData.push([years[i], new Date(dates[i])]);
    }
    return timesData;
}

export default function GoogleChart({years, times, name, event}) {
    const timeData = mergeData(years, times);

    const options = {
        title: name + ": " + event,
        curveType: 'function',
        hAxis: {
            format: '####',
            gridlines: {
                count: 4
            },
        },
        vAxis: {
            //type: "date",
            format: "m:ss.SS",
            gridlines: {
                count: 4
            }
        },
        
        animation: {
            startup: false, // prevents duration lag when first rendering
            easing: "inAndOut",
            duration: 1000,
        },
        
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
                        <div>{times.at(index)}</div>
                    </div>
                ))}
            </div>
            <div className="chart-container">
                <Chart
                    chartType="LineChart"
                    data={timeData}
                    options={options}
                    width="100%"
                    height="300px"
                />
            </div>
        </div>
    )
}

