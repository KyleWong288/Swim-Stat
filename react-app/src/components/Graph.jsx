import React from 'react';
import './Graph.css';
import LineChart from './LineChart';

// convert times to date for charting
function timesToDates(timesArray) {
	const datesArray = [];
	for (let i=0; i<timesArray.length; i++) {
		// formating based on string size
		let curr = timesArray[i];
		if (curr.length === 5) {
			datesArray.push("2022-06-25 00:00:" + curr);
		}
	}
    return datesArray;
}

function mergeData(timesArray, yearsArray) {
    const data = [];
    for (let i=0; i<timesArray.length; i++) {
        data.push({x: yearsArray[i], y: timesArray[i]});
    }
    return data;
}

export default function Graph(props) {
    const times = timesToDates(props.Times);
    const years = props.Years;
    const data = mergeData(times, years);

    const testData = [
        {x: '2018', y: '2021-06-25 00:00:22.00'},
        {x: '2019', y: '2021-06-25 00:00:21.40'},
        {x: '2020', y: '2021-06-25 00:00:21.00'},
        {x: '2021', y: '2021-06-25 00:00:20.70'},
    ]

    const userData = {
        datasets: [{
            label: "Time",
            data: data,
            backgroundColor: "rgb(120, 160, 220)",
            borderColor: "rgb(120, 160, 220)",
            borderWidth: 3,
            hoverBackgroundColor: "rgb(70, 105, 140)",
            hoverBorderColor: "rgb(70, 105, 140)",
        }],
    };

    const opts = {
        events: [],
        scales: { 
            xAxes: {
                type: 'linear',
                ticks: {
                    precision: 0,
                },
                
            },
            yAxes: {
                type: 'time',
                time: {
                    displayFormats: {
                        second: 'm:ss.SS',
                    },
                    unit: 'second',
                },
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
                        <div>{props.Times.at(index)}</div>
                    </div>
                ))}
            </div>
            <div className="chart-container">
                <LineChart chartData={userData} options={opts}/>
            </div>
        </div>
    )
}