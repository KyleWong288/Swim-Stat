import React from 'react';
import { Chart } from "react-google-charts";
import './Graph.css';
import linearRegression from '../../utils/LinearRegression';
import { motion } from "framer-motion";

// PLAN: Better than Chart.js, smooth lines appeal to my smooth brain
// TODO: Fix hover effect and time label

// convert times to date for charting
function timesToDates(timesArray) {
	const datesArray = [];
	for (let i=0; i<timesArray.length; i++) {
		// formating based on string size.
		let curr = timesArray[i];
        if (curr.length === 4) {
            datesArray.push("2022-06-09 00:00:0" + curr);
        }
		else if (curr.length === 5) {
			datesArray.push("2022-06-09 00:00:" + curr);
		}
        else if (curr.length === 7) {
            datesArray.push("2022-06-09 00:0" + curr);
        }
        else if (curr.length === 8) {
            datesArray.push("2022-06-09 00:" + curr);
        }
        else if (curr.length === 10) {
            datesArray.push("2022-06-09 0" + curr);
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

function getLast3(regArray) {
    const res = [];
    const last3Years = [];
    const last3Times = [];
    const size = regArray[0].length;
    for (let i=0; i<3; i++) {
        last3Years.push(regArray[0][size - 3 + i]);
        last3Times.push(regArray[1][size - 3 + i]);
    }
    res.push(last3Years);
    res.push(last3Times);
    return res;
}

export default function GoogleChart({years, times, name, event, displayOld}) {
    const regArray = linearRegression(years, times);
    const resData = mergeData(regArray[0], regArray[1]);
    const last3 = getLast3(regArray);

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
        chartArea: {
            height: "75%",
            width: "75%",
            bottom: "8%",
        },
        animation: {
            startup: false, // prevents duration lag when first rendering
            easing: "inAndOut",
            duration: 1000,
        },
        
    }

    return (
        <div>
            <div className={displayOld ? "times-separate" : "times-centered"}>
                <div>
                    <span>{displayOld ? 
                        <div>
                            <h1 className="times-header">
                                Year:
                                <div> Time: </div>
                            </h1>
                            {years.map((item,index) => (
                                <div className="times">
                                    {years.at(index)}
                                    <div>{times.at(index)}</div>
                                </div>
                            ))}
                        </div> :
                        <div> {null} </div> }  
                    </span>
                </div>
                <div>
                    <h1 className="times-header">
                        Year:
                        <span> {window.innerWidth >= 720 ? 
                            <div> Predicted Time: </div> : 
                            <div> Predicted: </div>
                        } </span>
                        
                    </h1>
                    <div>
                        {last3[0].map((item,index) => (
                            <div className="times">
                                {last3[0].at(index)}
                                <div>{last3[1].at(index)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="chart-container">
                <Chart
                    chartType="LineChart"
                    data={resData}
                    options={options}
                    width="100%"
                    height={window.innerWidth >= 520 ? "300px" : "200px"}
                />
            </div>
        </div>
    )
}

